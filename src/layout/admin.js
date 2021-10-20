import React from 'react'
import { Link, NavLink, Redirect } from 'react-router-dom'
const LayoutAdmin = (props) => {
    return (
        <div className="page-wrapper" id="pageWrapper">
            <div className="page-main-header">
                <div className="main-header-right row m-0">
                <div className="main-header-left">
                    <div className="logo-wrapper"><a href="index.html"><img className="img-fluid" src="../assets/images/logo/logo.png" alt /></a></div>
                    <div className="dark-logo-wrapper"><a href="index.html"><img className="img-fluid" src="../assets/images/logo/dark-logo.png" alt /></a></div>
                    <div className="toggle-sidebar"><i className="status_toggle middle" data-feather="align-center" id="sidebar-toggle" /></div>
                </div>
                <div className="left-menu-header col">
                    <ul>
                    <li>
                        <form className="form-inline search-form">
                        <div className="search-bg"><i className="fa fa-search" />
                            <input className="form-control-plaintext" placeholder="Search here....." />
                        </div>
                        </form><span className="d-sm-none mobile-search search-bg"><i className="fa fa-search" /></span>
                    </li>
                    </ul>
                </div>
                <div className="nav-right col pull-right right-menu p-0">
                    <ul className="nav-menus">
                    <li><a className="text-dark" href="#!" onclick="javascript:toggleFullScreen()"><i data-feather="maximize" /></a></li>
                    <li className="onhover-dropdown">
                        <div className="bookmark-box"><i data-feather="star" /></div>
                        <div className="bookmark-dropdown onhover-show-div">
                        <div className="form-group mb-0">
                            <div className="input-group">
                            <div className="input-group-prepend"><span className="input-group-text"><i className="fa fa-search" /></span></div>
                            <input className="form-control" type="text" placeholder="Search for bookmark..." />
                            </div>
                        </div>
                        <ul className="m-t-5">
                            <li className="add-to-bookmark"><i className="bookmark-icon" data-feather="inbox" />Email<span className="pull-right"><i data-feather="star" /></span></li>
                            <li className="add-to-bookmark"><i className="bookmark-icon" data-feather="message-square" />Chat<span className="pull-right"><i data-feather="star" /></span></li>
                            <li className="add-to-bookmark"><i className="bookmark-icon" data-feather="command" />Feather Icon<span className="pull-right"><i data-feather="star" /></span></li>
                            <li className="add-to-bookmark"><i className="bookmark-icon" data-feather="airplay" />Widgets<span className="pull-right"><i data-feather="star"> </i></span></li>
                        </ul>
                        </div>
                    </li>
                    <li className="onhover-dropdown">
                        <div className="notification-box"><i data-feather="bell" /><span className="dot-animated" />
                        </div>
                        <ul className="notification-dropdown onhover-show-div">
                        <li>
                            <p className="f-w-700 mb-0">You have 3 Notifications<span className="pull-right badge badge-primary badge-pill">4</span></p>
                        </li>
                        <li className="noti-primary">
                            <div className="media"><span className="notification-bg bg-light-primary"><i data-feather="activity"> </i></span>
                            <div className="media-body">
                                <p>Delivery processing </p><span>10 minutes ago</span>
                            </div>
                            </div>
                        </li>
                        <li className="noti-secondary">
                            <div className="media"><span className="notification-bg bg-light-secondary"><i data-feather="check-circle"> </i></span>
                            <div className="media-body">
                                <p>Order Complete</p><span>1 hour ago</span>
                            </div>
                            </div>
                        </li>
                        <li className="noti-success">
                            <div className="media"><span className="notification-bg bg-light-success"><i data-feather="file-text"> </i></span>
                            <div className="media-body">
                                <p>Tickets Generated</p><span>3 hour ago</span>
                            </div>
                            </div>
                        </li>
                        <li className="noti-danger">
                            <div className="media"><span className="notification-bg bg-light-danger"><i data-feather="user-check"> </i></span>
                            <div className="media-body">
                                <p>Delivery Complete</p><span>6 hour ago</span>
                            </div>
                            </div>
                        </li>
                        </ul>
                    </li>
                    <li>
                        <div className="mode"><i className="fa fa-moon-o" /></div>
                    </li>
                    <li className="onhover-dropdown"><i data-feather="message-square" />
                        <ul className="chat-dropdown onhover-show-div">
                        <li>
                            <div className="media"><img className="img-fluid rounded-circle me-3" src="../assets/images/user/4.jpg" alt />
                            <div className="media-body"><span>Ain Chavez</span>
                                <p className="f-12 light-font">Lorem Ipsum is simply dummy...</p>
                            </div>
                            <p className="f-12">32 mins ago</p>
                            </div>
                        </li>
                        <li>
                            <div className="media"><img className="img-fluid rounded-circle me-3" src="../assets/images/user/1.jpg" alt />
                            <div className="media-body"><span>Erica Hughes</span>
                                <p className="f-12 light-font">Lorem Ipsum is simply dummy...</p>
                            </div>
                            <p className="f-12">58 mins ago</p>
                            </div>
                        </li>
                        <li>
                            <div className="media"><img className="img-fluid rounded-circle me-3" src="../assets/images/user/2.jpg" alt />
                            <div className="media-body"><span>Kori Thomas</span>
                                <p className="f-12 light-font">Lorem Ipsum is simply dummy...</p>
                            </div>
                            <p className="f-12">1 hr ago</p>
                            </div>
                        </li>
                        <li className="text-center"> <a className="f-w-700" href="javascript:void(0)">See All </a></li>
                        </ul>
                    </li>
                    <li className="onhover-dropdown p-0">
                        <button className="btn btn-primary-light" type="button"><a href="login_two.html"><i data-feather="log-out" />Log out</a></button>
                    </li>
                    </ul>
                </div>
                <div className="d-lg-none mobile-toggle pull-right w-auto"><i data-feather="more-horizontal" /></div>
                </div>
            </div>
        <div className="page-body-wrapper horizontal-menu">
    
            <header className="main-nav">
            <div className="sidebar-user text-center"><a className="setting-primary" href="javascript:void(0)"><i data-feather="settings" /></a><img className="img-90 rounded-circle" src="../assets/images/dashboard/1.png" alt />
                <div className="badge-bottom"><span className="badge badge-primary">New</span></div><a href="user-profile.html">
                <h6 className="mt-3 f-14 f-w-600">Emay Walter</h6>
                </a>
                <p className="mb-0 font-roboto">Human Resources Department</p>
                <ul>
                <li><span><span className="counter">19.8</span>k</span>
                    <p>Follow</p>
                </li>
                <li><span>2 year</span>
                    <p>Experince</p>
                </li>
                <li><span><span className="counter">95.2</span>k</span>
                    <p>Follower </p>
                </li>
                </ul>
            </div>
            <nav>
                <div className="main-navbar">
                <div className="left-arrow" id="left-arrow"><i data-feather="arrow-left" /></div>
                <div id="mainnav">
                    <ul className="nav-menu custom-scrollbar">
                    <li className="back-btn">
                        <div className="mobile-back text-end"><span>Back</span><i className="fa fa-angle-right ps-2" aria-hidden="true" /></div>
                    </li>
                    <li className="sidebar-main-title">
                        <div>
                        <h6>General </h6>
                        </div>
                    </li>
                    </ul>
                </div>
                <div className="right-arrow" id="right-arrow"><i data-feather="arrow-right" /></div>
                </div>
            </nav>
            </header>
   
            <div className="page-body">
           
            <div className="container-fluid">
               
                {props.children}
                
            </div>
           
            </div>
    
            <footer className="footer">
        <div className="container-fluid">
            <div className="row">
            <div className="col-md-6 footer-copyright">
                <p className="mb-0">Copyright 2021-22 © viho All rights reserved.</p>
            </div>
            <div className="col-md-6">
                <p className="pull-right mb-0">Hand crafted &amp; made with <i className="fa fa-heart font-secondary" /></p>
            </div>
            </div>
        </div>
            </footer>
  </div>
</div>

    )
}

export default LayoutAdmin
