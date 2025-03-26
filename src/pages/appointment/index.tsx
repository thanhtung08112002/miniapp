import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import './index.scss'

const AppointmentPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    department: '',
    note: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    department: ''
  });

  const validateForm = () => {
    const newErrors = {
      name: '',
      phone: '',
      email: '',
      date: '',
      time: '',
      department: ''
    };

    let isValid = true;

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = 'Vui lòng nhập họ và tên';
      isValid = false;
    }

    // Validate phone
    if (!formData.phone.trim()) {
      newErrors.phone = 'Vui lòng nhập số điện thoại';
      isValid = false;
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = 'Số điện thoại không hợp lệ';
      isValid = false;
    }

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = 'Vui lòng nhập email';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email không hợp lệ';
      isValid = false;
    }

    // Validate department
    if (!formData.department) {
      newErrors.department = 'Vui lòng chọn khoa';
      isValid = false;
    }

    // Validate date
    if (!formData.date) {
      newErrors.date = 'Vui lòng chọn ngày khám';
      isValid = false;
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.date = 'Ngày khám không được trong quá khứ';
        isValid = false;
      }
    }

    // Validate time
    if (!formData.time) {
      newErrors.time = 'Vui lòng chọn giờ khám';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    // TODO: Implement appointment submission
    console.log('Form submitted:', formData);

    // Hiển thị thông báo thành công
    toast.success('Đặt lịch thành công!', {
      duration: 2000,
      position: 'top-center',
      style: {
        background: '#00a651',
        color: '#fff',
        borderRadius: '8px',
        padding: '12px 24px',
      },
    });

    // Chuyển đến trang thành công sau 2 giây
    setTimeout(() => {
      navigate('/appointment/success');
    }, 2000);
  };

  const handleInput = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
    // Clear error when user types
    if (errors[field as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const handleSelectChange = (field: string) => (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
    // Clear error when user selects
    if (errors[field as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  return (
    <div className='appointment-page'>
      <form onSubmit={handleSubmit} className='appointment-form'>
        <div className='form-group'>
          <label className='label'>Họ và tên</label>
          <input
            className={`input ${errors.name ? 'error' : ''}`}
            value={formData.name}
            onChange={handleInput('name')}
            placeholder='Nhập họ và tên'
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div className='form-group'>
          <label className='label'>Số điện thoại</label>
          <input
            className={`input ${errors.phone ? 'error' : ''}`}
            type='tel'
            value={formData.phone}
            onChange={handleInput('phone')}
            placeholder='Nhập số điện thoại'
          />
          {errors.phone && <span className="error-message">{errors.phone}</span>}
        </div>

        <div className='form-group'>
          <label className='label'>Email</label>
          <input
            className={`input ${errors.email ? 'error' : ''}`}
            type='email'
            value={formData.email}
            onChange={handleInput('email')}
            placeholder='Nhập email'
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        <div className='form-group'>
          <label className='label'>Khoa</label>
          <select
            className={`picker ${errors.department ? 'error' : ''}`}
            value={formData.department}
            onChange={handleSelectChange('department')}
          >
            <option value="">Chọn khoa</option>
            <option value="Khoa Nhi">Khoa Nhi</option>
            <option value="Khoa Tai Mũi Họng">Khoa Tai Mũi Họng</option>
            <option value="Khoa Tim mạch">Khoa Tim mạch</option>
            <option value="Khoa Nội">Khoa Nội</option>
          </select>
          {errors.department && <span className="error-message">{errors.department}</span>}
        </div>

        <div className='form-group'>
          <label className='label'>Ngày khám</label>
          <input
            type='date'
            className={`picker ${errors.date ? 'error' : ''}`}
            value={formData.date}
            onChange={handleInput('date')}
          />
          {errors.date && <span className="error-message">{errors.date}</span>}
        </div>

        <div className='form-group'>
          <label className='label'>Giờ khám</label>
          <input
            type='time'
            className={`picker ${errors.time ? 'error' : ''}`}
            value={formData.time}
            onChange={handleInput('time')}
          />
          {errors.time && <span className="error-message">{errors.time}</span>}
        </div>

        <div className='form-group'>
          <label className='label'>Ghi chú</label>
          <input
            className='input'
            value={formData.note}
            onChange={handleInput('note')}
            placeholder='Nhập ghi chú (nếu có)'
          />
        </div>

        <button type='submit' className='submit-btn'>
          Đặt lịch
        </button>
      </form>
    </div>
  );
};

export default AppointmentPage; 