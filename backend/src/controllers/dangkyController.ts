import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { createUser, findUserByUsernameOrEmail } from '../models/User';

export const registerUser = async (req: Request, res: Response) => {
  const { ten_dang_nhap, mat_khau, email, sdt, gioi_tinh } = req.body;

  try {
    const existingUser = await findUserByUsernameOrEmail(ten_dang_nhap, email);
    if (existingUser.length > 0) {
      return res.status(400).json({ message: 'Tên đăng nhập hoặc email đã tồn tại' });
    }

    const hashedPassword = await bcrypt.hash(mat_khau, 10);
    await createUser({ ten_dang_nhap, mat_khau: hashedPassword, email, sdt, gioi_tinh });
    
    res.status(201).json({ message: 'Đăng ký thành công!' });
  } catch (error) {
    res.status(500).json({ message: 'Có lỗi xảy ra khi đăng ký người dùng', error });
  }
};
