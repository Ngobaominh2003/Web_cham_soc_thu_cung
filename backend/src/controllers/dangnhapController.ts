import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { findUserByEmail } from '../models/User'; // Giả sử hàm này tìm người dùng theo email
import dotenv from 'dotenv';

dotenv.config(); // Đảm bảo sử dụng biến môi trường cho dữ liệu nhạy cảm

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret'; // Sử dụng khóa bí mật từ biến môi trường

export const loginUser = async (req: Request, res: Response) => {
    const { email, mat_khau } = req.body;

    try {
        // Tìm người dùng theo email
        const user = await findUserByEmail(email);

        // Kiểm tra nếu người dùng tồn tại
        if (!user) {
            return res.status(404).json({ message: 'Người dùng không tồn tại' });
        }

        // Xác thực mật khẩu
        const isPasswordValid = await bcrypt.compare(mat_khau, user.mat_khau);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Thông tin đăng nhập không chính xác' });
        }

        // Tạo JWT token
        const token = jwt.sign(
            { nguoi_dung_id: user.nguoi_dung_id, vai_tro: user.vai_tro },
            JWT_SECRET,
            { expiresIn: '1h' } // Token hết hạn sau 1 giờ
        );

        // Xác định URL chuyển hướng dựa trên vai trò người dùng
        let redirectUrl = '/Mew';
        if (user.vai_tro === 'quản trị' || user.vai_tro === 'nhân viên') {
            redirectUrl = '/Admin';
        }

        // Trả về token và URL chuyển hướng
        res.status(200).json({
            message: 'Đăng nhập thành công',
            token,
            redirectUrl,
            nguoi_dung_id: user.nguoi_dung_id,
        });
    } catch (error) {
        console.error('Lỗi đăng nhập:', error);
        res.status(500).json({ message: 'Lỗi máy chủ' });
    }
};
