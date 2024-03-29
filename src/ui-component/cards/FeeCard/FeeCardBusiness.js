import React from "react";
import "./FeeCardBusiness.scss";

const FeeCardBusiness = () => {
  return (
    <>
      <section className="product-container product-1">
        <div className="card">
          <div className="photo"></div>
          <div className="content">
            <div className="title">Cước phí doanh nghiệp</div>
            <div className="bg-title">Phí</div>
            <div className="feature size">
              <div>Giá:</div>
              <span>500,000đ/tháng</span>
            </div>
            <div className="feature color">
              <div>số bãi:</div>
              <span>Không giới hạn</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeeCardBusiness;
