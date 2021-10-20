import React from 'react'

const AdminListBooking = () => {
    return (
        <div className="col-sm-12">
                    <div className="card">
                    <div className="card-header pb-0">
                        <h5>Thông Tin Bệnh Nhân Đặt Khám</h5>
                    </div>
                    <div className="card-body">
                        <div className="dt-ext table-responsive">
                        <div id="auto-fill_wrapper" className="dataTables_wrapper container-fluid dt-bootstrap4">
                            <div className="row">
                            <div className="col-sm-12 col-md-6">
                                <div className="dataTables_length" id="auto-fill_length"><label>Show
                                    <select name="auto-fill_length" aria-controls="auto-fill" className="form-control form-control-sm">
                                    <option value={10}>10</option>
                                    <option value={25}>25</option>
                                    <option value={50}>50</option>
                                    <option value={100}>100</option>
                                    </select> entries</label></div>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <div id="auto-fill_filter" className="dataTables_filter">
                                <label>Search:<input type="search" className="form-control form-control-sm" placeholder aria-controls="auto-fill" /></label>
                                </div>
                            </div>
                            </div>
                            <div className="row">
                            <div className="col-sm-12">
                                <table className="display dataTable" id="auto-fill" role="grid" aria-describedby="auto-fill_info">
                                <thead>
                                    <tr role="row">
                                    <th className="sorting_asc" tabIndex={0} aria-controls="auto-fill" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="#: activate to sort column descending" style={{width: '16.5938px', textAlign: 'center'}}>#</th>
                                    <th className="sorting" tabIndex={0} aria-controls="auto-fill" rowSpan={1} colSpan={1} aria-label="Tên: activate to sort column ascending" style={{width: '60.3021px', textAlign: 'center'}}>Tên</th>
                                    <th className="sorting" tabIndex={0} aria-controls="auto-fill" rowSpan={1} colSpan={1} aria-label="Ảnh: activate to sort column ascending" style={{width: '68.5312px', textAlign: 'center'}}>Ảnh</th>
                                    <th className="sorting" tabIndex={0} aria-controls="auto-fill" rowSpan={1} colSpan={1} aria-label="Mã bác sĩ: activate to sort column ascending" style={{width: '95.75px', textAlign: 'center'}}>Mã bác sĩ</th>
                                    <th className="sorting" tabIndex={0} aria-controls="auto-fill" rowSpan={1} colSpan={1} aria-label="Dịch vụ: activate to sort column ascending" style={{width: '193.229px', textAlign: 'center'}}>Dịch vụ</th>
                                    <th className="sorting" tabIndex={0} aria-controls="auto-fill" rowSpan={1} colSpan={1} aria-label="Trạng thái: activate to sort column ascending" style={{width: '105.5208px', textAlign: 'center'}}>Trạng thái</th>
                                    <th className="sorting" tabIndex={0} aria-controls="auto-fill" rowSpan={1} colSpan={1} aria-label="
                                            Thêm mới
                                        : activate to sort column ascending" style={{width: '176.021px', textAlign: 'center'}}>
                                        <a href className="btn btn-primary">Thêm mới</a>
                                    </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr role="row" className="odd">
                                    <td className="sorting_1">1</td>
                                    <td>trung vu</td>
                                    <td><img src="http://127.0.0.1:8000/storage/img\6169abeec68ae-pp-3.png" width={70} /></td>
                                    <td />
                                    <td>
                                        * Mr. Preston Kertzmann II <br />
                                        * Prof. Ernest Mayer <br />
                                    </td>
                                    <td />
                                    <td>
                                        <a href className="btn btn-warning">Sửa</a>
                                        <a href className="btn btn-danger mt-2">Xóa</a>
                                    </td>
                                    </tr>
                                    <tr role="row" className="even">
                                    <td className="sorting_1">2</td>
                                    <td>Đoàn DỰ</td>
                                    <td><img src="http://127.0.0.1:8000/storage/img\616a404e36c49-c-author-3.png" width={70} /></td>
                                    <td />
                                    <td>
                                        * Prof. Ernest Mayer <br />
                                        * Tobin Mohr <br />
                                    </td>
                                    <td />
                                    <td>
                                        <a href className="btn btn-warning">Sửa</a>
                                        <a href className="btn btn-danger mt-2">Xóa</a>
                                    </td>
                                    </tr>
                                    <tr role="row" className="odd">
                                    <td className="sorting_1">3</td>
                                    <td>trung vu</td>
                                    <td><img src="http://127.0.0.1:8000/storage/img/616aa3aa7d721-t-p-3.png" width={70} /></td>
                                    <td />
                                    <td>
                                        * Mr. Preston Kertzmann II <br />
                                        * Prof. Ernest Mayer <br />
                                    </td>
                                    <td />
                                    <td>
                                        <a href className="btn btn-warning">Sửa</a>
                                        <a href className="btn btn-danger mt-2">Xóa</a>
                                    </td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                            </div>
                            <div className="row">
                            <div className="col-sm-12 col-md-5">
                                <div className="dataTables_info" id="auto-fill_info" role="status" aria-live="polite">Showing 1 to 3 of 3 entries</div>
                            </div>
                            <div className="col-sm-12 col-md-7">
                                <div className="dataTables_paginate paging_simple_numbers" id="auto-fill_paginate">
                                <ul className="pagination">
                                    <li className="paginate_button page-item previous disabled" id="auto-fill_previous"><a href="#" aria-controls="auto-fill" data-dt-idx={0} tabIndex={0} className="page-link">Previous</a></li>
                                    <li className="paginate_button page-item active"><a href="#" aria-controls="auto-fill" data-dt-idx={1} tabIndex={0} className="page-link">1</a></li>
                                    <li className="paginate_button page-item next disabled" id="auto-fill_next"><a href="#" aria-controls="auto-fill" data-dt-idx={2} tabIndex={0} className="page-link">Next</a></li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
    )
}

export default AdminListBooking
