  import { Request, Response } from 'express';
  import bcrypt from 'bcrypt';
  import connection from '../config/db'; // Import kết nối cơ sở dữ liệu
  import { getAllUsers, createUser as addUser, deleteUser,updateUserInDB,findUserById } from '../models/User'; // Import từ models
 

  // Lấy danh sách người dùng
  export const fetchUsers = async (req: Request, res: Response) => {
    try {
      const users = await getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

 
// Tạo người dùng mới và lưu vào cơ sở dữ liệu
export const createUser = async (req: Request, res: Response) => {
  const { ten_dang_nhap, mat_khau, email, sdt, gioi_tinh } = req.body;
  
  // Lấy tên file ảnh đã upload (nếu có)
  const avatar = req.file ? req.file.filename : null;

  try {
    // Kiểm tra tên đăng nhập hoặc email đã tồn tại chưa
    const [existingUsers] = await connection.query(
      'SELECT * FROM nguoi_dung WHERE ten_dang_nhap = ? OR email = ?',
      [ten_dang_nhap, email]
    );

    if ((existingUsers as any[]).length > 0) {
      return res.status(400).json({ message: 'Tên đăng nhập hoặc email đã tồn tại' });
    }

    // Băm mật khẩu để bảo mật
    const hashedPassword = await bcrypt.hash(mat_khau, 10);

    // Thêm người dùng vào cơ sở dữ liệu
    const [result] = await connection.query(
      'INSERT INTO nguoi_dung (ten_dang_nhap, mat_khau, email, sdt, gioi_tinh, avata) VALUES (?, ?, ?, ?, ?, ?)',
      [ten_dang_nhap, hashedPassword, email, sdt, gioi_tinh, avatar]
    );

    res.status(201).json({ message: 'Người dùng đã được tạo thành công', userId: (result as any).insertId });
  }  catch (error) {
    if (error instanceof Error) {
      // Nếu 'error' là một đối tượng Error hợp lệ
      console.error('Error creating user:', error.message);
      res.status(500).json({ message: 'Internal Server Error', error: error.message });
    } else {
      // Nếu 'error' không phải là một đối tượng Error
      console.error('Unknown error:', error);
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
};



  // Xóa user
  export const removeUser = async (req: Request, res: Response) => {
    const { id } = req.params; // Lấy nguoi_dung_id từ params

    try {
      const result = await deleteUser(parseInt(id)); // Chuyển id thành số nguyên
      if (result.affectedRows > 0) {
        res.status(200).json({ message: 'Xóa người dùng thành công.' });
      } else {
        res.status(404).json({ message: 'Người dùng không tồn tại.' }); // Nếu không tìm thấy người dùng
      }
    } catch (error) {
      console.error('Error deleting user:', error);
      res.status(500).json({ message: 'Lỗi máy chủ nội bộ' }); // Lỗi 500
    }
  };

 // Lấy thông tin người dùng theo nguoi_dung_id
 export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  console.log(`Yêu cầu lấy thông tin người dùng với ID: ${id}`);

  try {
    const user = await findUserById(parseInt(id, 10));
    console.log('Thông tin người dùng từ DB:', user); // Thêm log để kiểm tra dữ liệu từ DB
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'Người dùng không tồn tại' });
    }
  } catch (error) {
    console.error('Lỗi khi lấy thông tin người dùng:', error);
    res.status(500).json({ message: 'Lỗi máy chủ nội bộ' });
  }
};
// Hàm cập nhật người dùng
export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params; // Lấy ID người dùng từ params
  const { ten_dang_nhap, mat_khau, email, sdt, gioi_tinh, vai_tro } = req.body; // Lấy dữ liệu từ body request
  const avata = req.file ? req.file.filename : undefined; // Kiểm tra có avatar mới không

  try {
    const result = await updateUserInDB({ 
      nguoi_dung_id: Number(id),
      ten_dang_nhap, 
      mat_khau, 
      email, 
      sdt, 
      gioi_tinh, 
      vai_tro, 
      avata
    });

    res.status(200).json({ message: 'Cập nhật thông tin người dùng thành công!', result });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ message: 'Lỗi khi cập nhật thông tin người dùng' });
  }
};
