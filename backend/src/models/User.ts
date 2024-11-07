import connection from '../config/db';
import { RowDataPacket } from 'mysql2/promise';  // Đảm bảo sử dụng 'mysql2/promise'
import bcrypt from 'bcrypt';
// Định nghĩa kiểu User
interface User {
  nguoi_dung_id?: number;
  ten_dang_nhap: string;
  mat_khau: string;
  email: string;
  sdt?: string;
  gioi_tinh?: 'nam' | 'nu' | 'khac';
  vai_tro?: 'quan_tri' | 'nhan_vien' | 'nguoi_dung' | 'cong_tac_vien';
  ngay_tao?: Date;
  avata?: string;
}

// Lấy tất cả người dùng
export const getAllUsers = async (): Promise<User[]> => {
  try {
    const [rows] = await connection.query<RowDataPacket[]>('SELECT * FROM nguoi_dung'); // Không cần callback
    return rows as User[];  // Chuyển đổi kết quả từ RowDataPacket[] thành User[]
  } catch (error) {
    throw error;
  }
};

// Tạo user mới

export const createUser = async (user: User): Promise<any> => {
  const { ten_dang_nhap, mat_khau, email, sdt, gioi_tinh } = user;

  try {
    // Băm mật khẩu để tăng cường bảo mật
    const hashedPassword = await bcrypt.hash(mat_khau, 10);

    const [result] = await connection.query(
      'INSERT INTO nguoi_dung (ten_dang_nhap, mat_khau, email, sdt, gioi_tinh) VALUES (?, ?, ?, ?, ?)',
      [ten_dang_nhap, hashedPassword, email, sdt, gioi_tinh]
    );
    return result;
  } catch (error) {
    throw error;
  }
};

// Tìm user bằng tên đăng nhập hoặc email
export const findUserByUsernameOrEmail = async (ten_dang_nhap: string, email: string): Promise<User[]> => {
  try {
    const [rows] = await connection.query<RowDataPacket[]>(
      'SELECT * FROM nguoi_dung WHERE ten_dang_nhap = ? OR email = ?',
      [ten_dang_nhap, email]
    );
    return rows as User[];
  } catch (error) {
    throw error;
  }
};

// Tìm user bằng nguoi_dung_id
export const findUserById = async (nguoi_dung_id: number): Promise<User | null> => {
  try {
    const [rows] = await connection.query<RowDataPacket[]>(
      'SELECT nguoi_dung_id, ten_dang_nhap, mat_khau, email, vai_tro, avata, sdt, gioi_tinh FROM nguoi_dung WHERE nguoi_dung_id = ?',
      [nguoi_dung_id]
    );
    return rows.length > 0 ? (rows[0] as User) : null;
  } catch (error) {
    throw error;
  }
};





// Xóa user bằng nguoi_dung_id
export const deleteUser = async (nguoi_dung_id: number): Promise<any> => {
  try {
    const [result] = await connection.query(
      'DELETE FROM nguoi_dung WHERE nguoi_dung_id = ?',
      [nguoi_dung_id]
    );
    return result;
  } catch (error) {
    throw error;
  }
};

// Tìm user bằng email
export const findUserByEmail = async (email: string): Promise<User | null> => {
  try {
    const [rows] = await connection.query<RowDataPacket[]>(
      'SELECT * FROM nguoi_dung WHERE email = ?',
      [email]
    );
    return rows.length > 0 ? (rows[0] as User) : null;
  } catch (error) {
    throw error;
  }
};
// Cập nhật người dùng trong cơ sở dữ liệu
export const updateUserInDB = async (user: User): Promise<any> => {
  const { nguoi_dung_id, ten_dang_nhap, mat_khau, email, sdt, gioi_tinh, vai_tro, avata } = user;

  try {
    const hashedPassword = mat_khau ? await bcrypt.hash(mat_khau, 10) : undefined;

    const sql = `
      UPDATE nguoi_dung 
      SET 
        ten_dang_nhap = ?, 
        ${hashedPassword ? 'mat_khau = ?, ' : ''} 
        email = ?, 
        sdt = ?, 
        gioi_tinh = ?, 
        vai_tro = ?, 
        ${avata ? 'avata = ?' : 'avata = avata'}
      WHERE nguoi_dung_id = ?
    `;

    const values = [
      ten_dang_nhap,
      ...(hashedPassword ? [hashedPassword] : []),
      email,
      sdt,
      gioi_tinh,
      vai_tro,
      ...(avata ? [avata] : []),
      nguoi_dung_id
    ];

    const [result] = await connection.query(sql, values);
    return result;
  } catch (error) {
    throw error;
  }
};


