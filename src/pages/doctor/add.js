import React from 'react'

const AddDoctor = () => {
    
    return (
        <div className="col-sm-12">
  <div className="card">
    <div className="card-header pb-0">
      <h5>Tạo mới bác sĩ</h5>
    </div>
    <div className="card-body">
      <form className="theme-form" action method="post" encType="multipart/form-data">
        <input type="hidden" name="_token" defaultValue="6wI5eTGRIcpZZc9kNoeXgljPVMyQIjkqeDsrBeVY" />                    <div className="mb-3">
          <label className="col-form-label pt-0" htmlFor="exampleInputEmail1">Tên bác sĩ</label>
          <input className="form-control" id="exampleInputEmail1" name="name" type="text" aria-describedby="emailHelp" placeholder="Name" />
        </div>
        <div className="mb-3">
          <label className="col-form-label pt-0" htmlFor="exampleInputPassword1">Ảnh</label>
          <input className="form-control" id="exampleInputPassword1" name="avatar" type="file" placeholder="Avatar" />
        </div>
        <div className="mb-3">
          <label className="col-form-label pt-0" htmlFor="exampleInputPassword1">Số điện thoại</label>
          <input className="form-control" id="exampleInputPassword1" name="phone_number" type="number" placeholder="Phone number" />
        </div>
        <div className="mb-3">
          <label className="col-form-label pt-0" htmlFor="exampleInputPassword1">Email</label>
          <input className="form-control" id="exampleInputPassword1" name="email" type="email" placeholder="Email" />
        </div>
        <div className="mb-3">
          <label className="col-form-label pt-0" htmlFor="exampleInputPassword1">Địa chỉ</label>
          <input className="form-control" id="exampleInputPassword1" name="address" type="text" placeholder="address" />
        </div>
        <div className="card">
          <div className="card-header pb-0">
            <h5>Dịch vụ</h5>
          </div>
          <div className="card-body animate-chk">
            <div className="row">
              <label className="d-block col-2" htmlFor="chk-ani">
                <input className="checkbox_animated" name="services_id[]" defaultValue={1} id="chk-ani" type="checkbox" /> Mr. Preston Kertzmann II
              </label>
              <label className="d-block col-2" htmlFor="chk-ani">
                <input className="checkbox_animated" name="services_id[]" defaultValue={2} id="chk-ani" type="checkbox" /> Dr. Marilyne Beier
              </label>
              <label className="d-block col-2" htmlFor="chk-ani">
                <input className="checkbox_animated" name="services_id[]" defaultValue={3} id="chk-ani" type="checkbox" /> Mr. Pierre Wilkinson Sr.
              </label>
              <label className="d-block col-2" htmlFor="chk-ani">
                <input className="checkbox_animated" name="services_id[]" defaultValue={4} id="chk-ani" type="checkbox" /> Mireille Mraz
              </label>
              <label className="d-block col-2" htmlFor="chk-ani">
                <input className="checkbox_animated" name="services_id[]" defaultValue={5} id="chk-ani" type="checkbox" /> Audrey Flatley
              </label>
              <label className="d-block col-2" htmlFor="chk-ani">
                <input className="checkbox_animated" name="services_id[]" defaultValue={6} id="chk-ani" type="checkbox" /> Catalina Senger
              </label>
              <label className="d-block col-2" htmlFor="chk-ani">
                <input className="checkbox_animated" name="services_id[]" defaultValue={7} id="chk-ani" type="checkbox" /> Prof. Ernest Mayer
              </label>
              <label className="d-block col-2" htmlFor="chk-ani">
                <input className="checkbox_animated" name="services_id[]" defaultValue={8} id="chk-ani" type="checkbox" /> Tobin Mohr
              </label>
              <label className="d-block col-2" htmlFor="chk-ani">
                <input className="checkbox_animated" name="services_id[]" defaultValue={9} id="chk-ani" type="checkbox" /> Eliza Berge I
              </label>
              <label className="d-block col-2" htmlFor="chk-ani">
                <input className="checkbox_animated" name="services_id[]" defaultValue={10} id="chk-ani" type="checkbox" /> Grace Walter
              </label>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header pb-0">
            <h5>Thời gian làm việc</h5>
          </div>
          <div className="card-body animate-chk">
            <div className="row">
              <label className="d-block col-2" htmlFor="chk-ani">
                <input className="checkbox_animated" name="work_time_id[]" defaultValue={1} id="chk-ani" defaultChecked type="checkbox" /> 07:30:00 - 08:30:00
              </label>
              <label className="d-block col-2" htmlFor="chk-ani">
                <input className="checkbox_animated" name="work_time_id[]" defaultValue={2} id="chk-ani" defaultChecked type="checkbox" /> 08:30:00 - 09:30:00
              </label>
              <label className="d-block col-2" htmlFor="chk-ani">
                <input className="checkbox_animated" name="work_time_id[]" defaultValue={3} id="chk-ani" defaultChecked type="checkbox" /> 09:30:00 - 10:30:00
              </label>
              <label className="d-block col-2" htmlFor="chk-ani">
                <input className="checkbox_animated" name="work_time_id[]" defaultValue={4} id="chk-ani" defaultChecked type="checkbox" /> 10:30:00 - 11:30:00
              </label>
              <label className="d-block col-2" htmlFor="chk-ani">
                <input className="checkbox_animated" name="work_time_id[]" defaultValue={5} id="chk-ani" defaultChecked type="checkbox" /> 14:00:00 - 15:00:00
              </label>
              <label className="d-block col-2" htmlFor="chk-ani">
                <input className="checkbox_animated" name="work_time_id[]" defaultValue={6} id="chk-ani" defaultChecked type="checkbox" /> 15:00:00 - 16:00:00
              </label>
              <label className="d-block col-2" htmlFor="chk-ani">
                <input className="checkbox_animated" name="work_time_id[]" defaultValue={7} id="chk-ani" defaultChecked type="checkbox" /> 16:00:00 - 17:00:00
              </label>
              <label className="d-block col-2" htmlFor="chk-ani">
                <input className="checkbox_animated" name="work_time_id[]" defaultValue={8} id="chk-ani" defaultChecked type="checkbox" /> 17:00:00 - 18:00:00
              </label>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <button className="btn btn-primary">Submit</button>
          <button className="btn btn-secondary">Cancel</button>
        </div>
      </form>
    </div>
  </div>
</div>
    )
}

export default AddDoctor
