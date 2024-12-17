import connection from '../config/db';
import {  ResultSetHeader,RowDataPacket } from 'mysql2/promise';

// Định nghĩa interface cho hóa đơn
interface HoaDon {
    hoaDonId?: number;
    nguoiDungId: number;
    datPhongId?: number;
    datLichId?: number;
    tongTien: number;
    ngayTao?: Date;
    trangThai?: 'chưa thanh toán' | 'đã thanh toán' | 'hủy';
}

// Lấy tất cả hóa đơn
export const getAllHoaDon = async (): Promise<HoaDon[]> => {
    try {
        const [rows] = await connection.query<RowDataPacket[]>('SELECT * FROM hoa_don');
        return rows.map(row => row as HoaDon); // Đảm bảo trả về đúng kiểu dữ liệu
    } catch (error) {
        console.error('Lỗi khi lấy tất cả hóa đơn:', error);
        throw error;
    }
};

// Hàm tự động tạo hóa đơn khi người dùng đặt phòng
export const createHoaDonAutomatically = async (nguoiDungId: number): Promise<HoaDon> => {
    const query = `
        SELECT dp.dat_phong_id, dp.nguoi_dung_id, dp.tien AS tien_phong, dp.ngay_tao AS ngay_tao_phong, 
               dl.dat_lich_id, dl.nguoi_dung_id AS nguoi_dung_id_lich, dl.ngay_tao AS ngay_tao_lich
        FROM dat_phong dp
        JOIN dat_lich dl ON dp.nguoi_dung_id = dl.nguoi_dung_id
        WHERE dp.nguoi_dung_id = ? AND dp.trang_thai = 'đang hoạt động' AND dl.trang_thai = 'đang hoạt động';
    `;
    
    try {
        const [result] = await connection.execute<RowDataPacket[]>(query, [nguoiDungId]);

        if (result.length === 0) {
            throw new Error('Không tìm thấy thông tin đặt phòng và đặt lịch cho người dùng');
        }

        const datPhong = result[0];
        const hoaDon: HoaDon = {
            nguoiDungId: datPhong.nguoi_dung_id,
            datPhongId: datPhong.dat_phong_id,
            datLichId: datPhong.dat_lich_id,
            tongTien: datPhong.tien_phong, // Tổng tiền từ đặt phòng
            trangThai: 'chưa thanh toán',
            ngayTao: new Date(), // Ngày tạo hóa đơn là hiện tại
        };

        // Chèn hóa đơn vào bảng hoa_don
        const insertQuery = `
            INSERT INTO hoa_don (nguoi_dung_id, dat_phong_id, dat_lich_id, tong_tien, trang_thai, ngay_tao)
            VALUES (?, ?, ?, ?, ?, NOW());
        `;
        
        const [insertResult] = await connection.execute<ResultSetHeader>(insertQuery, [
            hoaDon.nguoiDungId,
            hoaDon.datPhongId,
            hoaDon.datLichId,
            hoaDon.tongTien,
            hoaDon.trangThai,
        ]);

        // Trả về hóa đơn đã tạo với ID tự động sinh
        return {
            ...hoaDon,
            hoaDonId: insertResult.insertId, // Truy cập insertId từ kết quả
        };
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error('Lỗi khi tạo hóa đơn tự động: ' + error.message);
        } else {
            throw new Error('Đã xảy ra lỗi không xác định');
        }
    }
};


// Cập nhật hóa đơn
export const updateHoaDon = async (id: number, hoaDon: HoaDon): Promise<any> => {
    const { nguoiDungId, datPhongId, datLichId, tongTien, trangThai } = hoaDon;

    try {
        const [result] = await connection.query(
            'UPDATE hoa_don SET nguoi_dung_id = ?, dat_phong_id = ?, dat_lich_id = ?, tong_tien = ?, trang_thai = ? WHERE hoa_don_id = ?',
            [nguoiDungId, datPhongId, datLichId, tongTien, trangThai, id]
        );
        return result;
    } catch (error) {
        console.error('Lỗi khi cập nhật hóa đơn:', error);
        throw error;
    }
};

// Xóa hóa đơn
export const deleteHoaDon = async (id: number): Promise<any> => {
    try {
        const [result] = await connection.query(
            'DELETE FROM hoa_don WHERE hoa_don_id = ?',
            [id]
        );
        return result;
    } catch (error) {
        console.error('Lỗi khi xóa hóa đơn:', error);
        throw error;
    }
};
