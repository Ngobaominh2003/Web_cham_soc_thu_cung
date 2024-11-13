// src/controllers/datLichController.ts

import { Request, Response } from 'express';
import * as DatLichModel from '../models/DatLich';

// Lấy tất cả lịch đặt
export const getAllDatLich = async (req: Request, res: Response) => {
  try {
    const datLichs = await DatLichModel.getAllDatLich();
    res.json(datLichs);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: String(error) });
    }
  }
};

// Lấy lịch đặt theo nguoi_dung_id
export const getDatLichByNguoiDungId = async (req: Request, res: Response) => {
  const nguoi_dung_id = parseInt(req.params.nguoi_dung_id);
  try {
    const datLichs = await DatLichModel.getDatLichByNguoiDungId(nguoi_dung_id);
    res.json(datLichs);
  } catch (error) {
  if (error instanceof Error) {
    res.status(500).json({ message: error.message });
  } else {
    res.status(500).json({ message: String(error) });
  }
}
};

// Lấy lịch đặt theo dat_lich_id
export const getDatLichById = async (req: Request, res: Response) => {
  const dat_lich_id = parseInt(req.params.id);
  try {
    const datLich = await DatLichModel.getDatLichById(dat_lich_id);
    if (datLich) {
      res.json(datLich);
    } else {
      res.status(404).json({ message: 'Không tìm thấy lịch đặt' });
    }
  } catch (error) {
  if (error instanceof Error) {
    res.status(500).json({ message: error.message });
  } else {
    res.status(500).json({ message: String(error) });
  }
}
};

// Thêm mới lịch đặt
export const createDatLich = async (req: Request, res: Response) => {
  const datLichData = req.body;
  try {
    const result = await DatLichModel.createDatLich(datLichData);
    res.status(201).json({ dat_lich_id: result.insertId });
  } catch (error) {
  if (error instanceof Error) {
    res.status(500).json({ message: error.message });
  } else {
    res.status(500).json({ message: String(error) });
  }
}
};

// Hàm cập nhật lịch đặt
export const updateDatLich = async (req: Request, res: Response) => {
  const dat_lich_id = parseInt(req.params.dat_lich_id);

  // Kiểm tra tính hợp lệ của dat_lich_id
  if (isNaN(dat_lich_id)) {
    return res.status(400).json({ message: 'ID không hợp lệ' });
  }

  // Lấy dữ liệu cần cập nhật từ body
  const datLichData = req.body;

  try {
    // Gọi model để thực hiện cập nhật
    const result = await DatLichModel.updateDatLich(dat_lich_id, datLichData);
    if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Không tìm thấy lịch đặt' });
    } else {
      res.json({ message: 'Cập nhật thành công' });
    }
  } catch (error) {
    // Xử lý lỗi và gửi phản hồi lỗi cho client
    res.status(500).json({ message: error instanceof Error ? error.message : String(error) });
  }
};

// Hàm xóa lịch đặt
export const deleteDatLich = async (req: Request, res: Response) => {
  const dat_lich_id = parseInt(req.params.dat_lich_id);

  // Kiểm tra tính hợp lệ của dat_lich_id
  if (isNaN(dat_lich_id)) {
    return res.status(400).json({ message: 'ID không hợp lệ' });
  }

  try {
    // Gọi model để thực hiện xóa
    const result = await DatLichModel.deleteDatLich(dat_lich_id);
    if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Không tìm thấy lịch đặt' });
    } else {
      res.json({ message: 'Xóa thành công' });
    }
  } catch (error) {
    // Xử lý lỗi và gửi phản hồi lỗi cho client
    res.status(500).json({ message: error instanceof Error ? error.message : String(error) });
  }
};