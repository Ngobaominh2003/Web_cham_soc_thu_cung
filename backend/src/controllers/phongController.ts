import { Request, Response } from 'express';
import * as PhongModel from '../models/Phong';

// Lấy tất cả phòng
export const getAllPhong = async (req: Request, res: Response): Promise<void> => {
  try {
    const phongList = await PhongModel.getAllPhong();
    res.status(200).json(phongList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Lỗi khi lấy danh sách phòng' });
  }
};

// Lấy phòng theo `phong_id`
export const getPhongById = async (req: Request, res: Response): Promise<void> => {
  const { phong_id } = req.params;

  try {
    const phong = await PhongModel.getPhongById(Number(phong_id));
    if (phong) {
      res.status(200).json(phong);
    } else {
      res.status(404).json({ message: 'Không tìm thấy phòng' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Lỗi khi lấy thông tin phòng' });
  }
};

// Thêm phòng mới
export const createPhong = async (req: Request, res: Response): Promise<void> => {
  const { so_phong, gia_phong, trang_thai_phong } = req.body;

  if (!so_phong || !gia_phong) {
    res.status(400).json({ message: 'Thông tin phòng không đầy đủ' });
    return;
  }

  try {
    await PhongModel.createPhong(so_phong, gia_phong, trang_thai_phong);
    res.status(201).json({ message: 'Phòng đã được tạo thành công' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Lỗi khi tạo phòng mới' });
  }
};


// Hàm xử lý yêu cầu cập nhật phòng
export const updatePhong = async (req: Request, res: Response): Promise<void> => {
  const { phong_id } = req.params;
  const { so_phong, gia_phong, trang_thai_phong } = req.body;

  try {
    // Gọi Model để thực hiện cập nhật
    await PhongModel.updatePhong(
      parseInt(phong_id),  // Chuyển phong_id từ string sang number
      so_phong,            // Có thể là undefined
      gia_phong,           // Có thể là undefined
      trang_thai_phong     // Có thể là undefined
    );

    // Trả về phản hồi thành công
    res.status(200).json({ message: 'Cập nhật phòng thành công!' });
  } catch (error) {
    console.error('Lỗi khi cập nhật phòng:', error);
    res.status(500).json({ message: 'Lỗi khi cập nhật phòng.' });
  }
};

/*chỉ cập nhật trạng thái*/
// Cập nhật trạng thái phòng theo `phong_id`
export const updatePhongStatus = async (req: Request, res: Response): Promise<void> => {
  const { phong_id } = req.params; // Lấy `phong_id` từ params
  const { trang_thai_phong } = req.body; // Lấy trạng thái phòng từ body

  try {
    // Kiểm tra xem trạng thái phòng có hợp lệ không
    if (!trang_thai_phong || !['đang trống', 'đã đặt', 'đang sửa chữa'].includes(trang_thai_phong)) {
      res.status(400).json({ message: 'Trạng thái phòng không hợp lệ.' });
      return;
    }

    // Cập nhật trạng thái phòng
    await PhongModel.updatePhongStatus(parseInt(phong_id), trang_thai_phong);

    // Trả về phản hồi thành công
    res.status(200).json({ message: 'Cập nhật trạng thái phòng thành công!' });
  } catch (error) {
    console.error('Lỗi khi cập nhật trạng thái phòng:', error);
    res.status(500).json({ message: 'Lỗi khi cập nhật trạng thái phòng.' });
  }
};

// Xóa phòng theo `phong_id`
export const deletePhong = async (req: Request, res: Response): Promise<void> => {
  const { phong_id } = req.params;

  try {
    await PhongModel.deletePhong(Number(phong_id));
    res.status(200).json({ message: 'Phòng đã được xóa thành công' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Lỗi khi xóa phòng' });
  }
};
