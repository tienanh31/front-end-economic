import Header from "../Components/Header"
import Footer from "../Components/Footer"
import Navbar_Menu from "../Components/Navbar_Menu"
const SignUp = () => {
    return (
        <>
<Header/>
<Navbar_Menu/>
<main className="main pages">
        <div className="page-header breadcrumb-wrap">
            <div className="container">
                <div className="breadcrumb">
                    <a href="/" rel="nofollow"><i className="fi-rs-home mr-5"></i>Home</a>
                    <span></span> Pages <span></span> My Account
                </div>
            </div>
        </div>
        <div className="page-content pt-150 pb-150">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-10 col-md-12 m-auto">
                        <div className="row">
                            <div className="col-lg-6 col-md-8">
                                <div className="login_wrap widget-taber-content background-white">
                                    <div className="padding_eight_all bg-white">
                                        <div className="heading_s1">
                                            <h1 className="mb-5">Create an Account</h1>
                                            <p className="mb-30">Already have an account? <a href="/login">Login</a></p>
                                        </div>
                                        <form method="post">
                                            <div className="form-group">
                                                <input type="text" required="" name="username" placeholder="Username" />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" required="" name="email" placeholder="Email" />
                                            </div>
                                            <div className="form-group">
                                                <input required="" type="password" name="password" placeholder="Password" />
                                            </div>
                                            <div className="form-group">
                                                <input required="" type="password" name="password" placeholder="Confirm password" />
                                            </div>
                                            <div className="login_footer form-group">
                                                <div className="chek-form">
                                                    <input type="text" required="" name="email" placeholder="Security code *" />
                                                </div>
                                                <span className="security-code">
                                                    <b className="text-new">8</b>
                                                    <b className="text-hot">6</b>
                                                    <b className="text-sale">7</b>
                                                    <b className="text-best">5</b>
                                                </span>
                                            </div>
                                            <div className="login_footer form-group mb-50">
                                                <div className="chek-form">
                                                    <div className="custome-checkbox">
                                                        <input className="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox12" value="" />
                                                        <label className="form-check-label" htmlFor="exampleCheckbox12"><span>I agree to terms &amp; Policy.</span></label>
                                                    </div>
                                                </div>
                                                <a href=""><i className="fi-rs-book-alt mr-5 text-muted"></i>Lean more</a>
                                            </div>
                                            <div className="form-group mb-30">
                                                <button type="submit" className="btn btn-fill-out btn-block hover-up font-weight-bold" name="login">Submit &amp; Sign Up</button>
                                            </div>
                                            <p className="font-xs text-muted"><strong>Note:</strong>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy</p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 pr-30 d-none d-lg-block">
                                <div className="card-login mt-115">
                                    <a href="#" className="social-login facebook-login">
                                        <img src="src/assets/imgs/theme/icons/logo-facebook.svg" alt="" />
                                        <span>Continue with Facebook</span>
                                    </a>
                                    <a href="#" className="social-login google-login">
                                        <img src="src/assets/imgs/theme/icons/logo-google.svg" alt="" />
                                        <span>Continue with Google</span>
                                    </a>
                                    <a href="#" className="social-login apple-login">
                                        <img src="src/assets/imgs/theme/icons/logo-apple.svg" alt="" />
                                        <span>Continue with Apple</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
<Footer/>
</>
        )
    }
    
    export default SignUp