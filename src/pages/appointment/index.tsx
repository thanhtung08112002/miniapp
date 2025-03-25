import { useState } from 'react'
import './index.scss'

const AppointmentPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    department: '',
    note: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement appointment submission
    console.log('Form submitted:', formData)
  }

  const handleInput = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }))
  }

  const handleSelectChange = (field: string) => (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }))
  }

  return (
    <div className='appointment-page'>
      <div className='header'>
        <h1 className='title'>Đặt lịch khám</h1>
      </div>
      
      <form onSubmit={handleSubmit} className='appointment-form'>
        <div className='form-group'>
          <label className='label'>Họ và tên</label>
          <input
            className='input'
            value={formData.name}
            onChange={handleInput('name')}
            placeholder='Nhập họ và tên'
          />
        </div>

        <div className='form-group'>
          <label className='label'>Số điện thoại</label>
          <input
            className='input'
            type='tel'
            value={formData.phone}
            onChange={handleInput('phone')}
            placeholder='Nhập số điện thoại'
          />
        </div>

        <div className='form-group'>
          <label className='label'>Khoa</label>
          <select
            className='picker'
            value={formData.department}
            onChange={handleSelectChange('department')}
          >
            <option value="">Chọn khoa</option>
            <option value="Khoa Nhi">Khoa Nhi</option>
            <option value="Khoa Tai Mũi Họng">Khoa Tai Mũi Họng</option>
            <option value="Khoa Tim mạch">Khoa Tim mạch</option>
            <option value="Khoa Nội">Khoa Nội</option>
          </select>
        </div>

        <div className='form-group'>
          <label className='label'>Ngày khám</label>
          <input
            type='date'
            className='picker'
            value={formData.date}
            onChange={handleInput('date')}
          />
        </div>

        <div className='form-group'>
          <label className='label'>Giờ khám</label>
          <input
            type='time'
            className='picker'
            value={formData.time}
            onChange={handleInput('time')}
          />
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
  )
}

export default AppointmentPage 