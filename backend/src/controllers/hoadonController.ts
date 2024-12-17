import { Request, Response } from 'express';
import * as HoaDonModel from '../models/HoaDon';

// Lấy tất cả hóa đơn
export const getAllHoaDonController = async (req: Request, res: Response) => {
    try {
        const hoaDons = await HoaDonModel.getAllHoaDon();
        res.status(200).json({
            message: 'Lấy tất cả hóa đơn thành công!',
            data: hoaDons
        });
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy tất cả hóa đơn!',
            error: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};

// Tạo hóa đơn từ đặt phòng
export const createHoaDonFromDatPhongAndDatLichController = async (req: Request, res: Response) => {
    const { nguoiDungId } = req.body;

    if (!nguoiDungId) {
        return res.status(400).json({ message: 'Thiếu thông tin người dùng!' });
    }

    try {
        const hoaDon = await HoaDonModel.createHoaDonAutomatically(nguoiDungId);
        return res.status(201).json({
            message: 'Tạo hóa đơn thành công từ đặt phòng và đặt lịch!',
            hoaDon
        });
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi tạo hóa đơn từ đặt phòng và đặt lịch!',
            error: error instanceof Error ? error.message : 'Lỗi không xác định'
        });
    }
};




// Cập nhật hóa đơn
export const updateHoaDonController = async (req: Request, res: Response) => {
    const { id } = req.params;
    const hoaDonData = req.body;

    try {
        const result = await HoaDonModel.updateHoaDon(Number(id), hoaDonData);

        if (result.affectedRows > 0) {
            return res.status(200).json({
                message: 'Cập nhật hóa đơn thành công!',
                data: result
            });
        } else {
            return res.status(404).json({ message: 'Không tìm thấy hóa đơn để cập nhật!' });
        }
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi cập nhật hóa đơn!',
            error: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};

// Xóa hóa đơn
export const deleteHoaDonController = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const result = await HoaDonModel.deleteHoaDon(Number(id));

        if (result.affectedRows > 0) {
            return res.status(200).json({ message: 'Xóa hóa đơn thành công!' });
        } else {
            return res.status(404).json({ message: 'Không tìm thấy hóa đơn để xóa!' });
        }
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi xóa hóa đơn!',
            error: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};
