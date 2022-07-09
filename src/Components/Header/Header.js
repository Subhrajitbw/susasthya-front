import React from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery';
function Header() {
    let info, user;
    if (localStorage.getItem("name")) {
        user = localStorage.getItem("name");
        info = JSON.parse(localStorage.getItem('userInfo'));
    }
    else {
        info = "";
    }
    const mobileClick = () => {
        $(document).on('click', '#mobile_btn', function () {
            $('main-wrapper').toggleClass('slide-nav');
            $('.sidebar-overlay').toggleClass('opened');
            $('html').addClass('menu-opened');
            return false;
        });
    }
    if ($(window).width() <= 991) {
        $('.main-nav a').on('click', function (e) {
            if ($(this).parent().hasClass('has-submenu')) {
                e.preventDefault();
            }
            if (!$(this).hasClass('submenu')) {
                $('ul', $(this).parents('ul:first')).slideUp(500);
                $('a', $(this).parents('ul:first')).removeClass('submenu');
                $(this).next('ul').slideDown(500);
                $(this).addClass('submenu');
            } else if ($(this).hasClass('submenu')) {
                $(this).removeClass('submenu');
                $(this).next('ul').slideUp(500);
            }
        });
        //$('.main-nav li.has-submenu a.active').parents('li:last').children('a:first').addClass('active').trigger('click');

        // Sidebar Initiate

    }

    const mobileClose = () => {
        $(document).on('click', '#menu_close', function () {
            $('html').removeClass('menu-opened');
            $('.sidebar-overlay').removeClass('opened');
            $('main-wrapper').removeClass('slide-nav');
        });
    }
    return (
        <div>
            {/* Header */}
            <header className="header">
                <nav className="navbar navbar-expand-lg header-nav">
                    <div className="navbar-header">
                        <a id="mobile_btn" onClick={mobileClick}>
                            <span className="bar-icon">
                                <span />
                                <span />
                                <span />
                            </span>
                        </a>
                        <Link to="/" className="navbar-brand logo">
                            <img src="/assets/img/logo (1).png" className="img-fluid" alt="Logo" />
                        </Link>
                    </div>
                    <div className="main-menu-wrapper">
                        <div className="menu-header">
                            <Link to="/" className="menu-logo px-4">
                                <img src="/assets/img/logo.png" className="img-fluid mobile-logo" alt="Logo" />
                            </Link>
                            <a id="menu_close" className="menu-close" onClick={mobileClose}>
                                <i className="fas fa-times" />
                            </a>
                        </div>
                        {window.location.pathname !== '/printform' &&
                            <ul className="main-nav">
                                <li className="active">
                                    <Link to="/">Home</Link>
                                </li>

                                {/* {!info &&
                                    <li className="has-submenu">
                                        <Link to="#">Patients Area<i className="fas fa-chevron-down" /></Link>
                                        <ul className="">
                                            <li><Link to="/login">Patient Dashboard (Login First)</Link></li>
                                        </ul>
                                    </li>
                                }
                                {info && info.user.role_id < 3 &&
                                    <li className="has-submenu">
                                        <Link to="#">Patients Area<i className="fas fa-chevron-down" /></Link>
                                        <ul className="">
                                            <li><Link to="/patient/profile-settings">Patient Dashboard</Link></li>
                                            <li><Link to="/reset-password">Change Password</Link></li>
                                            <li><Link to="/logout">Logout</Link></li>
                                        </ul>
                                    </li>
                                } */}
                                {info && info.user.role_id === 1 &&
                                    <li><a href="https://admin.susasthya.com/admin">Admin</a></li>
                                }
                                {info && info.user.role_id === 1 &&
                                <>
                                    <li><Link to="/onboarding">Membership Creation</Link></li>
                                    <li><Link to="/list/patients">Patient List</Link></li>
                                    </>
                                }

                                <li><Link to="/blogs">Blogs</Link></li>



                                <li className="login-link">
                                    <Link to="/login">Login / Signup</Link>
                                </li>
                                <li><Link to="/know-your-disease">Know Your Disease</Link></li>
                            </ul>

                        }
                    </div>
                    <ul className="nav header-navbar-rht">
                        <li class="nav-item contact-item">
                            <div class="header-contact-img">
                                <i class="far fa-hospital"></i>
                            </div>
                            <div class="header-contact-detail">
                                <p class="contact-header">Contact</p>
                                <p class="contact-info-header"> +91 9038417527</p>
                            </div>
                        </li>
                        {window.location.pathname !== '/printform' && !localStorage.getItem('name') &&


                            <li className="nav-item">
                                <Link className="nav-link header-login" to="/login">login / Signup </Link>
                            </li>
                        }
                        {window.location.pathname !== '/printform' && localStorage.getItem('name') &&
                            <li className="nav-item">

                                <h4 class="btn btn-primary font-weight-bold">
                                    Welcome, {localStorage.getItem("name")}
                                </h4>

                                {/* /<Link className="nav-link header-login" to="/login"></Link> */}
                            </li>
                        }

                    </ul>
                </nav>
            </header>
            {/* /Header */}
        </div>
    )
}

export default Header