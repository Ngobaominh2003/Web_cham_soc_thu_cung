import express from 'express';
import { registerUser } from '../controllers/dangkyController';
import { loginUser } from '../controllers/dangnhapController';
import { fetchUsers, createUser, removeUser, updateUser, getUserById } from '../controllers/userController';
import { upload } from '../middleware/upload';

const router = express.Router();

// Route cho đăng ký và đăng nhập
router.post('/register', registerUser);
router.post('/login', loginUser);

// Route quản lý người dùng
router.get('/users', fetchUsers); // Lấy danh sách người dùng
router.get('/users/:id', getUserById); // Lấy thông tin người dùng theo ID
router.post('/users', upload.single('avatar'), createUser); // Thêm người dùng mới
router.put('/users/:id', upload.single('avatar'), updateUser); // Cập nhật người dùng
router.delete('/users/:id', removeUser); // Xóa người dùng

export default router;
