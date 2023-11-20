const Navbar_Menu = () => {
    return (
        <div className="header-bottom header-bottom-bg-color sticky-bar">
            <div className="container">
                <div className="header-wrap header-space-between position-relative">
                    <div className="logo logo-width-1 d-block d-lg-none">
                        <a href="/"><img src="src/assets/imgs/theme/logo.svg" alt="logo" /></a>
                    </div>
                    <div className="header-nav d-none d-lg-flex">
                        <div className="main-categori-wrap d-none d-lg-block">
                            <a className="categories-button-active" href="#">
                                <span className="fi-rs-apps"></span> <span className="et">Browse</span> All Categories
                                <i className="fi-rs-angle-down"></i>
                            </a>
                            <div className="categories-dropdown-wrap categories-dropdown-active-large font-heading">
                                <div className="d-flex categori-dropdown-inner">
                                    <ul>
                                        <li>
                                            <a href=""> <img src="src/assets/imgs/theme/icons/category-1.svg" alt="" />Laptop</a>
                                        </li>
                                        <li>
                                            <a href=""> <img src="src/assets/imgs/theme/icons/category-2.svg" alt="" />SmartPhone</a>
                                        </li>
                                        <li>
                                            <a href=""> <img src="src/assets/imgs/theme/icons/category-3.svg" alt="" />KeyBoard</a>
                                        </li>
                                        <li>
                                            <a href=""> <img src="src/assets/imgs/theme/icons/category-4.svg" alt="" />Mouse</a>
                                        </li>
                                        <li>
                                            <a href=""> <img src="src/assets/imgs/theme/icons/category-5.svg" alt="" />HeadPhone</a>
                                        </li>
                                    </ul>
                                      
                                       
                
                                          
                                </div>
                                </div>
                        </div>
                    </div>
                    <div className="hotline d-none d-lg-flex">
                        <img src="src/assets/imgs/theme/icons/icon-headphone.svg" alt="hotline" />
                        <p>1900 - 888<span>24/7 Support Center</span></p>
                    </div>
                   
                   
                </div>
            </div>
        </div>
        )
    }
    
    export default Navbar_Menu