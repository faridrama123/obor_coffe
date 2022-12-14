import { useEffect } from 'react';
import AOS from 'aos';


export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
  <>
  <div id="preloader">
        <div id="ctn-preloader" className="ctn-preloader">
            <div className="animation-preloader">
                <div className="spinner"></div>
                <div className="txt-loading">
                    <span data-text-preloader="C" className="letters-loading">
                        C
                    </span>
                    <span data-text-preloader="A" className="letters-loading">
                        A
                    </span>
                    <span data-text-preloader="F" className="letters-loading">
                        F
                    </span>
                    <span data-text-preloader="E" className="letters-loading">
                        E
                    </span>
                    <span data-text-preloader="N" className="letters-loading">
                        N
                    </span>
                    <span data-text-preloader="A" className="letters-loading">
                        A
                    </span>
                </div>
            </div>
            <div className="loader">
                <div className="row">
                    <div className="col-3 loader-section section-left">
                        <div className="bg"></div>
                    </div>
                    <div className="col-3 loader-section section-left">
                        <div className="bg"></div>
                    </div>
                    <div className="col-3 loader-section section-right">
                        <div className="bg"></div>
                    </div>
                    <div className="col-3 loader-section section-right">
                        <div className="bg"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/*  preloader end */}

    {/*  header start */}
    <header className="site-header site-header__3 site-header__4">
        <div className="menu-area menu-area__3 menu-area__4">
            <div className="container-fluid custom-width custom-width__2">
                <div className="row d-none d-xl-flex">
                    <div className="col-xl-5 col-lg-4 col-md-5 align-self-center">
                        <div className="main-menu main-menu__3 main-menu__4">
                            <nav>
                                <ul>
                                    <li className="menu-item-has-children"><a href="index.html">Home</a>
                                        <ul className="sub-menu">
                                            <li><a href="index.html">Home 01</a></li>
                                            <li><a href="home-2.html">Home 02</a></li>
                                            <li><a href="home-3.html">Home 03</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="about.html">About</a></li>
                                    <li className="active"><a href="menu">Menu</a></li>
                                    <li><a href="reservation.html">Reservation</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 d-none d-lg-block text-center align-self-center">
                        <div className="logo">
                            <a href="index.html">
                                <img src="assets/images/logo/logo-black.png" alt="img"/>
                            </a>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6 col-md-7 align-self-center">
                        <div className="menu-area__right menu-area__right--3 menu-area__right--4 d-flex justify-content-end align-items-center">
                            <div className="main-menu main-menu__3 main-menu__4">
                                <nav>
                                    <ul>
                                        <li><a href="#0">pages</a>
                                            <ul className="sub-menu">
                                                <li><a href="blog.html">Blog</a></li>
                                                <li><a href="blog-details.html">Blog Details</a></li>
                                                <li><a href="chefs.html">Chefs</a></li>
                                                <li><a href="faq.html">Faq</a></li>
                                                <li><a href="story.html">Story</a></li>
                                                <li><a href="gallery.html">Gallery</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="shop.html">Shop</a>
                                            <ul className="sub-menu">
                                                <li><a href="shop.html">Shop</a></li>
                                                <li><a href="product-details.html">Shop Details</a></li>
                                                <li><a href="cart.html">Shop Cart</a></li>
                                                <li><a href="checkout.html">Shop Checkout</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="contact.html">Contact</a></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="wrapper wrapper__2 pl-50 d-flex justify-content-end align-items-center">
                                <div className="search">
                                    <div className="search__trigger item">
                                        <span className="open"><i className="far fa-search"></i></span>
                                        <span className="close"><i className="fal fa-times"></i></span>
                                    </div>
                                    <div className="search__form">
                                        <form role="search" method="get" action="index.html">
                                            <input type="search" name="s" value="" placeholder="Search Keywords"/>
                                            <button type="submit"><i className="far fa-search"></i></button>
                                        </form>
                                    </div>
                                </div>
                                <div className="hamburger-trigger item">
                                    <i className="far fa-bars"></i>
                                </div>
                                <div className="cart cart-trigger item position-relative">
                                    <i className="fa fa-shopping-basket"></i>
                                    <span className="cart__count">3</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row d-lg-flex d-xl-none">
                    <div className="col-xl-9 col-lg-10 col-6">
                        <div className="wrapper-for-lg d-flex align-items-center">
                            <div className="logo">
                                <a href="index.html">
                                    <img src="assets/images/logo/logo-black.png" alt="img"/>
                                </a>
                            </div>
                            <div className="main-menu main-menu__3 main-menu__4">
                                <nav id="mobile-menu">
                                <ul>
                                    <li className="menu-item-has-children"><a href="index.html">Home</a>
                                        <ul className="sub-menu">
                                            <li><a href="index.html">Home 01</a></li>
                                            <li><a href="home-2.html">Home 02</a></li>
                                            <li><a href="home-3.html">Home 03</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="about.html">About</a></li>
                                    <li className="active"><a href="menu">Menu</a></li>
                                    <li><a href="reservation.html">Reservation</a></li>
                                    <li><a href="#0">pages</a>
                                        <ul className="sub-menu">
                                            <li><a href="blog.html">Blog</a></li>
                                            <li><a href="blog-details.html">Blog Details</a></li>
                                            <li><a href="chefs.html">Chefs</a></li>
                                            <li><a href="faq.html">Faq</a></li>
                                            <li><a href="story.html">Story</a></li>
                                            <li><a href="gallery.html">Gallery</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="shop.html">Shop</a>
                                        <ul className="sub-menu">
                                            <li><a href="shop.html">Shop</a></li>
                                            <li><a href="product-details.html">Shop Details</a></li>
                                            <li><a href="cart.html">Shop Cart</a></li>
                                            <li><a href="checkout.html">Shop Checkout</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </nav>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-2 col-6 align-self-center">
                        <div className="menu-area__right menu-area__right--4  d-flex justify-content-end align-items-center">
                            <div className="search">
                                <div className="search__trigger item">
                                    <span className="open"><i className="far fa-search"></i></span>
									<span className="close"><i className="fal fa-times"></i></span>
                                </div>
                                <div className="search__form">
                                    <form role="search" method="get" action="index.html">
                                        <input type="search" name="s" value="" placeholder="Search Keywords"/>
                                        <button type="submit"><i className="far fa-search"></i></button>
                                    </form>
                                </div>
                            </div>
                            <div className="hamburger-trigger item">
                                <i className="far fa-bars"></i>
                            </div>
                            <div className="cart cart-trigger item position-relative">
                                <i className="fa fa-shopping-basket"></i>
                                <span className="cart__count">3</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    {/*  header end */}

    {/*  side info for mobile view */}
    <aside className="side-info-wrapper mm-only">
        <nav>
            <div className="nav" id="nav-tab" role="tablist">
                <a className="nav-link active" id="menu-tab-1-tab" data-bs-toggle="tab"
                    href="#menu-tab-1" role="tab" aria-controls="menu-tab-1"
                    aria-selected="true">Menu</a>
                <a className="nav-link" id="menu-tab-2-tab" data-bs-toggle="tab" href="#menu-tab-2"
                    role="tab" aria-controls="menu-tab-2" aria-selected="false">Info</a>
            </div>
        </nav>
        <div className="side-info__wrapper d-flex align-items-center justify-content-between">
            <div className="side-info__logo">
                <a href="index.html">
                    <img src="assets/images/logo/logo-black.png" alt="logo"/>
                </a>
            </div>
            <div className="side-info__close">
                <a href="/"><i className="fal fa-times"></i></a>
            </div>
        </div>
        <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade show active" id="menu-tab-1" role="tabpanel"
                aria-labelledby="menu-tab-1-tab">
                <div className="mobile-menu"></div>
            </div>
            <div className="tab-pane fade" id="menu-tab-2" role="tabpanel"
                aria-labelledby="menu-tab-2-tab">
                <div className="side-info">
                    <div className="side-info__content mb-35">
                        <h4 className="title mb-5">About us</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  nisi ut aliquip ex ea commodo consequat.</p>
                        <a className="site-btn mt-20" href="contact.html">Contact us</a>
                    </div>
                    <div className="contact__info--wrapper mt-15">
                        <h4 className="title mb-10">Contact us</h4>
                        <ul className="contact__info list-unstyled">
                            <li>
                                <span><i className="fas fa-map-marker-alt"></i></span>
                                <p>Bowery St., New York, NY 10013, USA</p>
                            </li>
                            <li>
                                <span><i className="fas fa-phone"></i></span>
                                <p>+1255-568-6523</p>
                            </li>
                            <li>
                                <span><i className="fas fa-envelope-open-text"></i></span>
                                <p>information@gmail.com</p>
                            </li>
                        </ul>
                    </div>
                    <div className="social-links mt-20 d-flex justify-content-start align-items-center">
                        <a href="#0"><i className="fab fa-facebook-f"></i></a>
                        <a href="#0"><i className="fab fa-twitter"></i></a>
                        <a href="#0"><i className="fab fa-google-plus-g"></i></a>
                        <a href="#0"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </aside>

    {/*  side info for desktop view */}
    <aside className="side-info-wrapper show-all">
        <div className="side-info__wrapper d-flex align-items-center justify-content-between">
            <div className="side-info__logo">
                <a href="index.html">
                    <img src="assets/images/logo/logo-black.png" alt="logo"/>
                </a>
            </div>
            <div className="side-info__close">
                <a href="/"><i className="fal fa-times"></i></a>
            </div>
        </div>
        <div className="side-info">
            <div className="side-info__content mb-35">
                <h4 className="title mb-5">About us</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  nisi ut aliquip ex ea commodo consequat.</p>
                <a className="site-btn mt-20" href="contact.html">Contact us</a>
            </div>
            <div className="contact__info--wrapper mt-15">
                <h4 className="title mb-10">Contact us</h4>
                <ul className="contact__info list-unstyled">
                    <li>
                        <span><i className="fas fa-map-marker-alt"></i></span>
                        <p>Bowery St., New York, NY 10013, USA</p>
                    </li>
                    <li>
                        <span><i className="fas fa-phone"></i></span>
                        <p>+1255-568-6523</p>
                    </li>
                    <li>
                        <span><i className="fas fa-envelope-open-text"></i></span>
                        <p>information@gmail.com</p>
                    </li>
                </ul>
            </div>
            <div className="social-links mt-20 d-flex justify-content-start align-items-center">
                <a href="#0"><i className="fab fa-facebook-f"></i></a>
                <a href="#0"><i className="fab fa-twitter"></i></a>
                <a href="#0"><i className="fab fa-google-plus-g"></i></a>
                <a href="#0"><i className="fab fa-instagram"></i></a>
            </div>
        </div>
    </aside>

    {/*  cart list */}
    <aside className="cart-bar-wrapper">
        <div className="cart-bar__close">
            <a className="d-flex align-items-center justify-content-center" href="/"><i className="fal fa-times"></i></a>
        </div>
        <div className="cart-bar">
            <h4 className="cart-bar__title">Cart Items - <span>4</span></h4>
            <div className="cart-bar__lists">
                <div className="cart-bar__item position-relative d-flex">
                    <div className="thumb">
                        <img src="assets/images/top-grade/tg-1.png" alt="image_not_found"/>
                    </div>
                    <div className="content">
                        <h4 className="title">
                            <a href="product-details.html">Rorem ipsum dolor sit amet.</a>
                        </h4>
                        <span className="price">$19.00</span>
                        <a href="#0" className="remove"><i className="fal fa-times"></i></a>
                    </div>
                </div>
                <div className="cart-bar__item position-relative d-flex">
                    <div className="thumb">
                        <img src="assets/images/top-grade/tg-2.png" alt="image_not_found"/>
                    </div>
                    <div className="content">
                        <h4 className="title">
                            <a href="product-details.html">Rorem ipsum dolor sit amet.</a>
                        </h4>
                        <span className="price">$36.00</span>
                        <a href="#0" className="remove"><i className="fal fa-times"></i></a>
                    </div>
                </div>
                <div className="cart-bar__item position-relative d-flex">
                    <div className="thumb">
                        <img src="assets/images/top-grade/tg-3.png" alt="image_not_found"/>
                    </div>
                    <div className="content">
                        <h4 className="title">
                            <a href="product-details.html">Rorem ipsum dolor sit amet.</a>
                        </h4>
                        <span className="price">$20.00</span>
                        <a href="#0" className="remove"><i className="fal fa-times"></i></a>
                    </div>
                </div>
                <div className="cart-bar__item position-relative d-flex">
                    <div className="thumb">
                        <img src="assets/images/top-grade/tg-4.png" alt="image_not_found"/>
                    </div>
                    <div className="content">
                        <h4 className="title">
                            <a href="product-details.html">Rorem ipsum dolor sit amet.</a>
                        </h4>
                        <span className="price">$20.00</span>
                        <a href="#0" className="remove"><i className="fal fa-times"></i></a>
                    </div>
                </div>
            </div>
            <div className="cart-bar__subtotal d-flex align-items-center justify-content-between">
                <span>Sub Total:</span>
                <span>$87.00</span>
            </div>
            <div className="btns d-flex align-items-center justify-content-center">
                <a href="cart.html" className="site-btn">View Cart</a>
                <a href="checkout.html" className="site-btn site-btn__borderd">Checkout</a>
            </div>
        </div>
    </aside>
    <div className="overlay"></div>

    <main>
        {/*  breadcrumb area start */}
        <section className="breadcrumb-area pt-140 pb-140 bg_img" data-background="assets/images/bg/breadcrumb-bg-1.jpeg" data-overlay="dark" data-opacity="5">
            <div className="shape shape__1"><img src="assets/images/shape/breadcrumb-shape-1.png" alt=""/></div>
            <div className="shape shape__2"><img src="assets/images/shape/breadcrumb-shape-2.png" alt=""/></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 text-center">
                        <h2 className="page-title">cafena menu</h2>
                        <div className="cafena-breadcrumb breadcrumbs">
                            <ul className="list-unstyled d-flex align-items-center justify-content-center">
                                <li className="cafenabcrumb-item duxinbcrumb-begin">
                                    <a href="index.html"><span>Home</span></a>
                                </li>
                                <li className="cafenabcrumb-item duxinbcrumb-end">
                                    <span>menu</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*  breadcrumb area end */}

        {/*  populer menu area start */}
        <section className="popular-menu__area position-relative pb-120 pt-115">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 text-center">
                        <div className="section-heading section-heading__black mb-40">
                            <span className="sub-title">menu</span>
                            <h2 className="title">Our Popular Menu</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12 text-center">
                        <div className="popular-menu__wrapper m-auto d-inline-block">
                            <div className="popular-menu__filter d-flex justify-content-center align-items-center mb-45">
                                <button type="button" className="active" data-filter="*">All</button>
                                <button type="button" data-filter=".cat1">chocolate</button>
                                <button type="button" data-filter=".cat2">coffee</button>
                                <button type="button" data-filter=".cat3">sandwiches</button>
                                <button type="button" data-filter=".cat4">sweets</button>
                                <button type="button" data-filter=".cat5">Black tea</button>
                                <button type="button" data-filter=".cat6">Grean Tea</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="popular-menu-grid-2" className="row popular-menu__grid popular-menu__lists mt-none-30" >
                    
                    <div className="col-xl-6 col-lg-6 col-md-6 l-item grid-sizer"></div>
                    <div className="col-xl-6 col-lg-6 col-md-6 l-item grid-item cat1 cat2 cat3 mt-35">
                        <div className="popular-menu__list">
                            <div className="thumb">
                                <img src="assets/images/menu/menu-2-1.png" alt=""/>
                            </div>
                            <div className="content">
                                <h3 className="title border-effect"><a href="#0">Americano Rosted Coffee</a></h3>
                                <span className="price">$12.00</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 l-item grid-item cat1 cat3 cat4 mt-35">
                        <div className="popular-menu__list">
                            <div className="thumb">
                                <img src="assets/images/menu/menu-2-2.png" alt=""/>
                            </div>
                            <div className="content">
                                <h3 className="title border-effect"><a href="#0">JAPANIS COFFEE GRED</a></h3>
                                <span className="price">$12.00</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 l-item grid-item cat2 cat5 cat6 mt-35">
                        <div className="popular-menu__list">
                            <div className="thumb">
                                <img src="assets/images/menu/menu-2-3.png" alt=""/>
                            </div>
                            <div className="content">
                                <h3 className="title border-effect"><a href="#0">CAF?? AU LAIT Coffee</a></h3>
                                <span className="price">$12.00</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 l-item grid-item cat1 cat4 cat3 mt-35">
                        <div className="popular-menu__list">
                            <div className="thumb">
                                <img src="assets/images/menu/menu-2-4.png" alt=""/>
                            </div>
                            <div className="content">
                                <h3 className="title border-effect"><a href="#0">ESPRESSO RISTRETTO Coffee</a></h3>
                                <span className="price">$12.00</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 l-item grid-item cat2 cat5 cat6 mt-35">
                        <div className="popular-menu__list">
                            <div className="thumb">
                                <img src="assets/images/menu/menu-2-5.png" alt=""/>
                            </div>
                            <div className="content">
                                <h3 className="title border-effect"><a href="#0">VIRGIN COFFEE GRED</a></h3>
                                <span className="price">$12.00</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 l-item grid-item cat1 cat5 cat6 mt-35">
                        <div className="popular-menu__list">
                            <div className="thumb">
                                <img src="assets/images/menu/menu-2-6.png" alt=""/>
                            </div>
                            <div className="content">
                                <h3 className="title border-effect"><a href="#0">ESPRESSO RISTRETTO Coffee</a></h3>
                                <span className="price">$12.00</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 l-item grid-item cat2 cat3 cat4 mt-35">
                        <div className="popular-menu__list">
                            <div className="thumb">
                                <img src="assets/images/menu/menu-2-1.png" alt=""/>
                            </div>
                            <div className="content">
                                <h3 className="title border-effect"><a href="#0">BRAZIL COFFEE GRED</a></h3>
                                <span className="price">$12.00</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 l-item grid-item cat1 cat5 cat6 mt-35">
                        <div className="popular-menu__list">
                            <div className="thumb">
                                <img src="assets/images/menu/menu-2-2.png" alt=""/>
                            </div>
                            <div className="content">
                                <h3 className="title border-effect"><a href="#0">ESPRESSO RISTRETTO BEANS</a></h3>
                                <span className="price">$12.00</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 l-item grid-item cat2 cat3 cat4 mt-35">
                        <div className="popular-menu__list">
                            <div className="thumb">
                                <img src="assets/images/menu/menu-2-3.png" alt=""/>
                            </div>
                            <div className="content">
                                <h3 className="title border-effect"><a href="#0">CAFF?? LATTE BEANS</a></h3>
                                <span className="price">$12.00</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 l-item grid-item cat1 cat5 cat6 mt-35">
                        <div className="popular-menu__list">
                            <div className="thumb">
                                <img src="assets/images/menu/menu-2-4.png" alt=""/>
                            </div>
                            <div className="content">
                                <h3 className="title border-effect"><a href="#0">Turkish Rosted Coffee</a></h3>
                                <span className="price">$12.00</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 l-item grid-item cat2 cat3 cat4 mt-35">
                        <div className="popular-menu__list">
                            <div className="thumb">
                                <img src="assets/images/menu/menu-2-5.png" alt=""/>
                            </div>
                            <div className="content">
                                <h3 className="title border-effect"><a href="#0">Bangladeshi Rosted Coffee</a></h3>
                                <span className="price">$12.00</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 l-item grid-item cat1 cat5 cat6 mt-35">
                        <div className="popular-menu__list">
                            <div className="thumb">
                                <img src="assets/images/menu/menu-2-6.png" alt=""/>
                            </div>
                            <div className="content">
                                <h3 className="title border-effect"><a href="#0">indian Rosted Coffee</a></h3>
                                <span className="price">$12.00</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12 text-center">
                        <a href="#0" className="site-btn mt-60">load more</a>
                    </div>
                </div>
            </div>
        </section>
        {/*  populer menu area end */}

    </main>

    <footer className="site-footer dark-bg pt-155 position-relative">
        <div className="footer__top">
            <a href="#" className="go-top go-top__white position-absolute d-flex align-items-center justify-content-center">
                <i className="fal fa-long-arrow-up"></i>
            </a>
            <div className="container">
                <div className="row justify-content-center mt-none-30">
                    <div className="col-xl-3 col-lg-6 mt-30">
                        <div className="footer__widget footer__info">
                            <div className="item d-flex align-items-center justify-content-center">
                                <img src="assets/images/icons/ft-phone.png" alt=""/>
                                <span>Phone :</span>
                                <a href="tel:88019339702520">+88019 339 702 520</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 mt-30 pl-55">
                        <div className="footer__widget footer__info">
                            <div className="item d-flex align-items-center justify-content-start">
                                <img src="assets/images/icons/ft-map-marker.png" alt=""/>
                                <span>Address :</span>
                                <p>30 North West New</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-8 mt-30 pl-55">
                        <div className="footer__widget">
                            <div className="subscribe">
                                <form action="index.html">
                                    <input type="email" name="email" id="email" placeholder="Enter your email"/>
                                    <button type="submit" className="subscribe__btn">Subscribe <i className="fa fa-paper-plane"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer__middle mt-65">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="footer__logo--content">
                            <img className="mb-15" src="assets/images/logo/logo.png" alt=""/>
                            <p>Donec et nibh maximus, congue est eu, mattis nunc. Praesent ut quam quis quam venenatis fringilla. Morbi vestibulum</p>
                        </div>
                    </div>
                    <div className="col-lg-5 align-self-end">
                        <div className="social-links d-flex align-items-center justify-content-lg-end">
                            <a href="#0" target="_blank"><i className="fab fa-twitter"></i></a>
                            <a href="#0" target="_blank"><i className="fab fa-facebook-f"></i></a>
                            <a href="#0" target="_blank"><i className="fab fa-youtube"></i></a>
                            <a href="#0" target="_blank"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#0" target="_blank"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer__menu-area mt-30 pb-90">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9">
                        <div className="footer__menu">
                            <nav>
                                <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="about.html">About</a></li>
                                    <li><a href="menu">Menu</a></li>
                                    <li><a href="reservation.html">Reservation</a></li>
                                    <li><a href="#0">pages</a></li>
                                    <li><a href="shop.html">Shop</a></li>
                                    <li><a href="blog.html">Blog</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="col-lg-3 text-center text-lg-end">
                        <a href="#" className="go-top go-top__bottom">
                            <span>go top</span>
                            <i className="fal fa-long-arrow-up"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  

  </>

    
  );
}
