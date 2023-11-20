const Header = () => {
    return (
        <header className="header-area header-style-1 header-height-2">
        <div className="header-middle header-middle-ptb-1 d-none d-lg-block">
            <div className="container">
                <div className="header-wrap">
                    <div className="logo logo-width-1">
                        <a href="/"><img src="src/assets/imgs/theme/logo.svg" alt="logo" /></a>
                    </div>
                    <div className="header-right">
                        <div className="search-style-2">
                            <form action="#">
                             
                                <input type="text" placeholder="Search for items..." />
                            </form>
                        </div>
                        <div className="header-action-right">
                            <div className="header-action-2">
                                
                                <div className="header-action-icon-2">
                                    <a href="">
                                        <img className="svgInject" alt="Nest" src="src/assets/imgs/theme/icons/icon-heart.svg" />
                                        <span className="pro-count blue">6</span>
                                    </a>
                                    <a href=""><span className="lable">Favorites List</span></a>
                                </div>
                                <div className="header-action-icon-2">
                                    <a className="mini-cart-icon" href="">
                                        <img alt="Nest" src="src/assets/imgs/theme/icons/icon-cart.svg" />
                                        <span className="pro-count blue">2</span>
                                    </a>
                                    <a href=""><span className="lable">Cart</span></a>
                                    <div className="cart-dropdown-wrap cart-dropdown-hm2">
                                        <ul>
                                            <li>
                                                <div className="shopping-cart-img">
                                                    <a href="shop-product-right.html"><img alt="Nest" src="src/assets/imgs/macbook.png" /></a>
                                                </div>
                                                <div className="shopping-cart-title">
                                                    <h4><a href="shop-product-right.html">Macbook M2 pro</a></h4>
                                                    <h4><span>1 × </span>$800.00</h4>
                                                </div>
                                                <div className="shopping-cart-delete">
                                                    <a href="#"><i className="fi-rs-cross-small"></i></a>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="shopping-cart-img">
                                                    <a href="shop-product-right.html"><img alt="Nest" src="src/assets/imgs/dell.jpg" /></a>
                                                </div>
                                                <div className="shopping-cart-title">
                                                    <h4><a href="shop-product-right.html">Dell XPS 6570</a></h4>
                                                    <h4><span>1 × </span>$500.00</h4>
                                                </div>
                                                <div className="shopping-cart-delete">
                                                    <a href="#"><i className="fi-rs-cross-small"></i></a>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="shopping-cart-footer">
                                            <div className="shopping-cart-total">
                                                <h4>Total <span>$1300.00</span></h4>
                                            </div>
                                            <div className="shopping-cart-button">
                                                <a href="shop-cart.html" className="outline">View cart</a>
                                                <a href="shop-checkout.html">Checkout</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="header-action-icon-2">
                                    <a href="page-account.html">
                                        <img className="svgInject" alt="Nest" src="src/assets/imgs/theme/icons/icon-user.svg" />
                                    </a>
                                    <a href="page-account.html"><span className="lable ml-0">Account</span></a>
                                    <div className="cart-dropdown-wrap cart-dropdown-hm2 account-dropdown">
                                        <ul>
                                            <li>
                                                <a href="page-account.html"><i className="fi fi-rs-user mr-10"></i>My Account</a>
                                            </li>
                                            <li>
                                                <a href="page-account.html"><i className="fi fi-rs-location-alt mr-10"></i>Order Tracking</a>
                                            </li>
                                            <li>
                                                <a href="page-account.html"><i className="fi fi-rs-label mr-10"></i>My Voucher</a>
                                            </li>
                                            <li>
                                                <a href="shop-wishlist.html"><i className="fi fi-rs-heart mr-10"></i>My Favorites List</a>
                                            </li>
                                            <li>
                                                <a href="page-account.html"><i className="fi fi-rs-settings-sliders mr-10"></i>Setting</a>
                                            </li>
                                            <li>
                                                <a href="page-login.html"><i className="fi fi-rs-sign-out mr-10"></i>Sign out</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </header>
    )
}

export default Header