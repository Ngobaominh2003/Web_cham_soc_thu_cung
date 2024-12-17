import express from 'express';
import * as HoaDonController from '../controllers/hoadonController';

const router = express.Router();

// Lấy tất cả hóa đơn
router.get('/hoa-don', HoaDonController.getAllHoaDonController);
router.post('/hoa-don/create', HoaDonController.createHoaDonFromDatPhongAndDatLichController);
// Cập nhật hóa đơn
router.put('/hoa-don/:id', HoaDonController.updateHoaDonController);

// Xóa hóa đơn
router.delete('/hoa-don/:id', HoaDonController.deleteHoaDonController);

export default router;
