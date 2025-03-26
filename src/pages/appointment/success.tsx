import React from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import './success.scss';

const AppointmentSuccessPage = () => {
  const navigate = useNavigate();

  return (
    <div className="appointment-success">
      <div className="success-content">
        <img src="/static/icons/success.svg" alt="Success" className="success-icon" />
        <h1 className="success-title">Đặt lịch thành công!</h1>
        <p className="success-message">
          Chúng tôi sẽ liên hệ với bạn sớm nhất để xác nhận lịch khám.
        </p>
        <Button 
          variant="default" 
          className="home-button"
          onClick={() => navigate('/')}
        >
          Quay về trang chủ
        </Button>
      </div>
    </div>
  );
};

export default AppointmentSuccessPage; 