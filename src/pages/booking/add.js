import React from 'react'

const Addbooking = (props) => {
    return (
     
        <div className="container-fluid">
  <div className="row">
    <div className="col-sm-12">
      <div className="card">
        <div className="card-header pb-0">
          <h5>Thêm Thông Tin Bệnh Nhân</h5>
        </div>
        <form action>
          <div className="row g-0">
            <div className="col-lg-6 pe-lg-2 mb-3">
              <div className style={{marginLeft: 20}}>
                <div className="boder-form">
                  <div className="row g-3 align-items-center mt-2">
                    <div className>
                      <label className="col-form-label">Tên Bệnh Nhân: </label>
                    </div>
                    <div className="col-auto">
                      <input type="text" className="form-control" placeholder="Ví dụ: Nguyễn Văn A" />
                    </div>
                  </div>
                  <div className="row g-3 align-items-center mt-2">
                    <div className>
                      <label className="col-form-label">Số Điện Thoại:</label>
                    </div>
                    <div className="col-auto">
                      <input type="number" className="form-control" />
                    </div>
                  </div>
                  <div className="row g-3 align-items-center mt-2">
                    <div className>
                      <label className="col-form-label">Dịch Vụ Khám Răng Bệnh
                        Nhân:</label>
                    </div>
                    <div className="col-auto">
                      <select id="thongtinbenhnhan" className="form-select col-auto">
                        <option selected>Dịch Vụ Khám Răng</option>
                        <option value={1}>Nhổ Răng Không</option>
                        <option value={2}>Niền Răng</option>
                        <option value={3}>Đánh Bóng Răng</option>
                      </select>
                    </div>
                  </div>
                  <div className="row g-3 align-items-center mt-2">
                    <div className>
                      <label className="col-form-label">Ngày Giờ:</label>
                    </div>
                    <div className="col-auto">
                      <input type="date" className="form-control" />
                    </div>
                  </div>
                  <div className="row g-3 align-items-center mt-2">
                    <div className>
                      <label className="col-form-label">Địa Chỉ:</label>
                    </div>
                    <div className="col-auto">
                      <input type="text" className="form-control" placeholder="Địa chỉ bệnh nhân..." />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 ps-lg-2 mb-3">
              <div className>
                <div className="boder-form">
                  <div className="row g-3 align-items-center mt-2">
                    <div className>
                      <label className="col-form-label">Giới Tính: </label>
                    </div>
                    <div className="col-auto">
                      <select id="gioitinhbenhnhan" className="form-select">
                        <option value={1} selected>Nam</option>
                        <option value={0}>Nữ</option>
                      </select>
                    </div>
                  </div>
                  <div className="row g-3 align-items-center mt-2">
                    <div className>
                      <label className="col-form-label">Số CMND/Định Danh Cá
                        Nhân:</label>
                    </div>
                    <div className="col-auto">
                      <input type="number" className="form-control" placeholder="00120002*****" />
                    </div>
                  </div>
                  <div className="row g-3 align-items-center mt-2">
                    <div className>
                      <label className="col-form-label">Dịch Vụ Khám Răng Bác
                        Sĩ:</label>
                    </div>
                    <div className="col-auto">
                      <select id="thongtinbenhnhan" className="form-select col-auto">
                        <option selected>Dịch Vụ Khám Răng</option>
                        <option value={1}>Nhổ Răng Không</option>
                        <option value={2}>Niền Răng</option>
                        <option value={3}>Đánh Bóng Răng</option>
                      </select>
                    </div>
                  </div>
                  <div className="row g-3 align-items-center mt-2">
                    <div className="form-floating">
                      <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: 100}} defaultValue={""} />
                      <label htmlFor="floatingTextarea2">Ghi Chú:</label>
                    </div>
                  </div>
                  <div className="row g-3 align-items-center mt-2">
                    <div className="form-floating">
                      <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: 67}} defaultValue={""} />
                      <label htmlFor="floatingTextarea1">Kết Quả Điều Trị:</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card-footer">
                    <button class="btn btn-primary m-r-15" type="submit">Submit</button>
                    <button class="btn btn-light" type="submit">Cancel</button>
                  </div>
        </form>
      </div>
    </div>
  </div>
</div>



    )
}

export default Addbooking
