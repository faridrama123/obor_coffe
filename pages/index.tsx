import { useEffect } from 'react';
import AOS from 'aos';
// import Head from 'next/head';
// import Navbar from '../components/organisms/Navbar';
// import MainBanner from '../components/organisms/MainBanner';
// import TransactionStep from '../components/organisms/TransactionStep';
// import FeaturedGame from '../components/organisms/FeaturedGame';
// import Reached from '../components/organisms/Reached';
// import Story from '../components/organisms/Story';
// import Footer from '../components/organisms/Footer';

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
   
    <header className="site-header site-header__3 position-absolute">
        <div className="menu-area menu-area__3">
            <div className="container-fluid custom-width custom-width__2">
                <div className="row d-none d-xl-flex">
                    <div className="col-xl-5 col-lg-4 col-md-5 align-self-center">
                        <div className="main-menu main-menu__3">
                            <nav>
                                <ul>
                                    <li className="menu-item-has-children active"><a href="index.html">Home</a>
                                        <ul className="sub-menu">
                                            <li className="active"><a href="index.html">Home 01</a></li>
                                            <li><a href="home-2.html">Home 02</a></li>
                                            <li><a href="home-3.html">Home 03</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="about.html">About</a></li>
                                    <li><a href="menu.html">Menu</a></li>
                                    <li><a href="reservation.html">Reservation</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 d-none d-lg-block text-center align-self-center">
                        <div className="logo">
                            <a href="index.html">
                                <img src="assets/images/logo/logo.png" alt="img"/>
                            </a>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6 col-md-7 align-self-center">
                        <div className="menu-area__right menu-area__right--3 d-flex justify-content-end align-items-center">
                            <div className="main-menu main-menu__3">
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
                            <div className="wrapper pl-50 d-flex justify-content-end align-items-center">
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
                            <div className="logo d-lg-none">
                                <a href="index.html">
                                    <img src="assets/images/logo/logo.png" alt="img"/>
                                </a>
                            </div>
                            <div className="main-menu main-menu__3">
                                <nav id="mobile-menu">
                                <ul>
                                    <li className="menu-item-has-children active"><a href="index.html">Home</a>
                                        <ul className="sub-menu">
                                            <li className="active"><a href="index.html">Home 01</a></li>
                                            <li><a href="home-2.html">Home 02</a></li>
                                            <li><a href="home-3.html">Home 03</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="about.html">About</a></li>
                                    <li><a href="menu.html">Menu</a></li>
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
                        <div className="menu-area__right d-flex justify-content-end align-items-center">
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
        <section className="hero__area hero__area--3 bg_img" data-overlay="dark" data-opacity="4" data-background="assets/images/hero/obor.jpeg">
            <div className="container-fluid custom-width custom-width__2">
                <div className="row">
                    <div className="col-xl-6 col-lg-7 col-md-8 align-self-center">
                         <div className="hero__content hero__content--3 position-relative">
                             <h1 className="title mb-20">rosted coffee <br/>
                                for you </h1>
                                <p>The coffee is brewed by first roasting the green coffee beans over hot <br/> coals in a brazier. given an opportunity to sample.</p>
                                <div className="btns mt-45 d-flex align-items-center justify-content-start">
                                    <a href="about.html" className="site-btn">testy Coffee</a>
                                    <a href="contact.html" className="site-btn site-btn__borderd site-btn__borderd--double">Read More</a>
                                </div>
                                <div className="social-links mt-60 d-flex justify-content-start align-items-center">
                                    <a href="#0"><i className="fab fa-facebook"></i> <span>Facebook</span></a>
                                    <a href="#0"><i className="fab fa-twitter"></i> <span>Twitter</span></a>
                                    <a href="#0"><i className="fab fa-youtube"></i> <span>youtube</span></a>
                                </div>
                         </div>
                    </div>
                    <div className="col-xl-6 col-lg-5 col-md-4">
                        <div className="vide-wrapper">
                            <a href="//www.youtube.com/embed/4xe72U7mXNg?rel=0&amp;controls=0&amp;showinfo=0" data-rel="lightcase:myCollection" data-animation="fadeInLeft" className="video-btn video-btn__2 video-btn__2--white d-flex align-items-center"><i className="fas fa-play"></i><span className="border-effect">play video</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div className="feature__area feature__area--3 dark-bg pt-120" data-overlay="dark" data-opacity="9">
            <div className="container-fluid custom-width custom-width__2">
                <div className="row mt-none-30">
                    <div className="col-xl-4 col-lg-6 col-md-6 mt-30">
                        <div className="feature__item feature__item--3 bg_img" data-background="assets/images/products/f-1.jpeg">
                            <div className="shape"><img src="assets/images/shape/f-shape-1.png" alt=""/></div>
                            <div className="content">
                                <span className="count">01</span>
                                <h2 className="title mb-10">Best Coffee flavour</h2>
                                <p>Curabitur semper erat a lacusey sedn consequat, sit ametey.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 mt-30">
                        <div className="feature__item feature__item--3 bg_img" data-background="assets/images/products/f-2.jpeg">
                            <div className="shape"><img src="assets/images/shape/f-shape-1.png" alt=""/></div>
                            <div className="content">
                                <span className="count">02</span>
                                <h2 className="title mb-10">Place to Get Lost</h2>
                                <p>Curabitur semper erat a lacusey sedn consequat, sit ametey.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 mt-30">
                        <div className="feature__item feature__item--3 bg_img" data-background="assets/images/products/f-3.jpeg">
                            <div className="shape"><img src="assets/images/shape/f-shape-1.png" alt=""/></div>
                            <div className="content">
                                <span className="count">03</span>
                                <h2 className="title mb-10">Proper Roesting</h2>
                                <p>Curabitur semper erat a lacusey sedn consequat, sit ametey.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     
        <section className="about__area about__area--3 dark-bg position-relative pt-120">
            <div className="container-fluid custom-width custom-width__2">
                <div className="row g-0">
                    <div className="col-xl-6 d-flex">
                        <div className="about__left about__left--3 d-flex align-items-stretch">
                            <img src="assets/images/about/about-bg-3-1.jpeg" alt=""/>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="about__right about__history">
                            <div className="section-heading">
                                <span className="sub-title">our history</span>
                                <h2 className="title mb-25">Create a new story with us</h2>
                                <p>Mauris rhoncus orci in imperdiet placerat. Vestibulum euismod nisl suscipit ligula volutpat, a feugiat urna maximus. Cras massa nibhtincidunt.</p>
                                <p>Donec et nibh maximus, congue est eu, mattis nunc. Praesent ut quam quis quam venenatis fringilla. Morbi vestibulum id tellus mmodo mattis. Aliquam erat volutpat.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
        <section className="popular-menu__area popular-menu__area--2 dark-bg position-relative pt-115">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 text-center">
                        <div className="section-heading mb-60">
                            <span className="sub-title">menu</span>
                            <h2 className="title">Obor Popular Menu</h2>
                        </div>
                    </div>
                </div>
                <div className="row mt-none-30 justify-content-between">
                    <div className="col-xl-12">
                        <div className="pm-list-wrapper">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6 l-item mt-30">
                                    <div className="popular-menu__list">
                                        <div className="thumb">
                                            <img src="assets/images/menu/menu-2-1.png" alt=""/>
                                        </div>
                                        <div className="content">
                                            <h3 className="title border-effect"><a href="#0">Americano Rosted GRED</a></h3>
                                            <span className="price">$12.00</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 l-item mt-30">
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
                                <div className="col-xl-6 col-lg-6 col-md-6 l-item mt-30">
                                    <div className="popular-menu__list">
                                        <div className="thumb">
                                            <img src="assets/images/menu/menu-2-3.png" alt=""/>
                                        </div>
                                        <div className="content">
                                            <h3 className="title border-effect"><a href="#0">VIRGIN COFFEE GRED</a></h3>
                                            <span className="price">$12.00</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 l-item mt-30">
                                    <div className="popular-menu__list">
                                        <div className="thumb">
                                            <img src="assets/images/menu/menu-2-4.png" alt=""/>
                                        </div>
                                        <div className="content">
                                            <h3 className="title border-effect"><a href="#0">JAPANIS COFFEE GRED</a></h3>
                                            <span className="price">$12.00</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 l-item mt-30">
                                    <div className="popular-menu__list">
                                        <div className="thumb">
                                            <img src="assets/images/menu/menu-2-5.png" alt=""/>
                                        </div>
                                        <div className="content">
                                            <h3 className="title border-effect"><a href="#0">CAFÈ AU LAIT Coffee</a></h3>
                                            <span className="price">$12.00</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 l-item mt-30">
                                    <div className="popular-menu__list">
                                        <div className="thumb">
                                            <img src="assets/images/menu/menu-2-6.png" alt=""/>
                                        </div>
                                        <div className="content">
                                            <h3 className="title border-effect"><a href="#0">ESPRESSO RISTRETTO</a></h3>
                                            <span className="price">$12.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* menu area end */}

        {/* about area start */}
        <section className="about__area about__area--4 dark-bg position-relative pt-120 pb-120">
            <div className="container">
                <div className="row mm-reverse">
                    <div className="col-xl-6">
                        <div className="about__left about__left--4">
                            <div className="section-heading">
                                <h2 className="title mb-25">Coffee machine,Buy for home</h2>
                                <p>Donec et nibh maximus, congue est eu, mattis nunc. Praesent ut quam quis quam venenatis fringilla. Morbi vestibulum id tellus mmodo mattis. Aliquam erat volutpat. <br/>
                                mattis nunc. Praesent ut quam quis quam venenatis fringilla. Morbi vestibulum id tellus mmodo mattis.</p>
                            </div>
                            <div className="btns mt-45 d-flex align-items-center">
                                <a href="about.html" className="site-btn">Discover now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 offset-xl-2">
                        <div className="big-product-wrapper position-relative">
                            <img src="assets/images/products/product-big.png" alt="img"/>
                            <div className="ph-wrapper">
                                <div className="product-highlight">
                                    <span className="product-highlight__trigger"><i className="fal fa-plus"></i></span>
                                </div>
                                <div className="product-highlight">
                                    <span className="product-highlight__trigger"><i className="fal fa-plus"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* about area end */}

        {/* populer product area start */}
        <section className="pp__area pp__area--2 dark-bg position-relative pt-120 bg_img" data-opacity="6" data-overlay="dark" data-background="assets/images/bg/pp-bg-3-1.jpeg">
            <div className="container">
                <div className="row align-items-end mb-60">
                    <div className="col-lg-8">
                        <div className="section-heading">
                            <span className="sub-title">Popular Product</span>
                            <h2 className="title">Obor Popular Product</h2>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="btns-wrapper text-center text-lg-end">
                            <a href="shop.html" className="site-btn mt-none-10">View all Product</a>
                        </div>
                    </div>
                </div>
                <div className="row mt-none-30">
                    <div className="col-xl-4 col-lg-6 mt-30">
                        <div className="pp__item pp__item--3 active text-center pt-30 pb-25">
                            <div className="pp__action d-flex align-items-center justify-content-center">
                                <div className="cart d-flex align-items-center justify-content-center">
                                    <a href="#0"><i className="fal fa-shopping-basket"></i></a>
                                </div>
                                <div className="wishlist d-flex align-items-center justify-content-center">
                                    <a href="#0"><i className="fal fa-heart"></i></a>
                                </div>
                                <div className="view d-flex align-items-center justify-content-center">
                                    <a href="#0"><i className="fal fa-eye"></i></a>
                                </div>
                            </div>
                            <div className="pp__thumb mt-30">
                                <img className="default" src="assets/images/products/pp-1.png" alt=""/>
                                <img className="on-hover" src="assets/images/products/pp-2.png" alt=""/>
                            </div>
                            <div className="pp__content mt-40">
                                <div className="pp__c-top d-flex align-items-center justify-content-center">
                                    <div className="pp__cat">
                                        <a href="#0">Coffee</a>
                                    </div>
                                    <div className="pp__rating d-flex align-items-center justify-content-center">
                                        <a href="#0"><i className="fas fa-star"></i></a>
                                        <a href="#0"><i className="fas fa-star"></i></a>
                                        <a href="#0"><i className="fas fa-star"></i></a>
                                        <a href="#0"><i className="fal fa-star"></i></a>
                                        <a href="#0"><i className="fal fa-star"></i></a>
                                    </div>
                                </div>
                                <h4 className="pp__title mt-10">
                                    <a href="product-details.html">BRAZIL COFFEE GRED</a>
                                </h4>
                                <div className="pp__price mt-10 d-flex align-items-center justify-content-center">
                                    <h6 className="label">Price - </h6>
                                    <span className="price"> $325.00 / <span className="regular"><del>$348</del></span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 mt-30">
                        <div className="pp__item pp__item--3 text-center pt-30 pb-25">
                            <div className="pp__action d-flex align-items-center justify-content-center">
                                <div className="cart d-flex align-items-center justify-content-center">
                                    <a href="#0"><i className="fal fa-shopping-basket"></i></a>
                                </div>
                                <div className="wishlist d-flex align-items-center justify-content-center">
                                    <a href="#0"><i className="fal fa-heart"></i></a>
                                </div>
                                <div className="view d-flex align-items-center justify-content-center">
                                    <a href="#0"><i className="fal fa-eye"></i></a>
                                </div>
                            </div>
                            <div className="pp__thumb mt-30">
                                <img className="default" src="assets/images/products/pp-2.png" alt=""/>
                                <img className="on-hover" src="assets/images/products/pp-1.png" alt=""/>
                            </div>
                            <div className="pp__content mt-40">
                                <div className="pp__c-top d-flex align-items-center justify-content-center">
                                    <div className="pp__cat">
                                        <a href="#0">Coffee</a>
                                    </div>
                                    <div className="pp__rating d-flex align-items-center justify-content-center">
                                        <a href="#0"><i className="fas fa-star"></i></a>
                                        <a href="#0"><i className="fas fa-star"></i></a>
                                        <a href="#0"><i className="fas fa-star"></i></a>
                                        <a href="#0"><i className="fal fa-star"></i></a>
                                        <a href="#0"><i className="fal fa-star"></i></a>
                                    </div>
                                </div>
                                <h4 className="pp__title mt-10">
                                    <a href="product-details.html">vicaragua Coffee Beans</a>
                                </h4>
                                <div className="pp__price mt-10 d-flex align-items-center justify-content-center">
                                    <h6 className="label">Price - </h6>
                                    <span className="price"> $325.00 / <span className="regular"><del>$348</del></span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 mt-30">
                        <div className="pp__item pp__item--3 text-center pt-30 pb-25">
                            <div className="pp__action d-flex align-items-center justify-content-center">
                                <div className="cart d-flex align-items-center justify-content-center">
                                    <a href="#0"><i className="fal fa-shopping-basket"></i></a>
                                </div>
                                <div className="wishlist d-flex align-items-center justify-content-center">
                                    <a href="#0"><i className="fal fa-heart"></i></a>
                                </div>
                                <div className="view d-flex align-items-center justify-content-center">
                                    <a href="#0"><i className="fal fa-eye"></i></a>
                                </div>
                            </div>
                            <div className="pp__thumb mt-30">
                                <img className="default" src="assets/images/products/pp-3.png" alt=""/>
                                <img className="on-hover" src="assets/images/products/pp-2.png" alt=""/>
                            </div>
                            <div className="pp__content mt-40">
                                <div className="pp__c-top d-flex align-items-center justify-content-center">
                                    <div className="pp__cat">
                                        <a href="#0">Coffee</a>
                                    </div>
                                    <div className="pp__rating d-flex align-items-center justify-content-center">
                                        <a href="#0"><i className="fas fa-star"></i></a>
                                        <a href="#0"><i className="fas fa-star"></i></a>
                                        <a href="#0"><i className="fas fa-star"></i></a>
                                        <a href="#0"><i className="fal fa-star"></i></a>
                                        <a href="#0"><i className="fal fa-star"></i></a>
                                    </div>
                                </div>
                                <h4 className="pp__title mt-10">
                                    <a href="product-details.html">AMERICANO COFFEE</a>
                                </h4>
                                <div className="pp__price mt-10 d-flex align-items-center justify-content-center">
                                    <h6 className="label">Price - </h6>
                                    <span className="price"> $325.00 / <span className="regular"><del>$348</del></span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* testimonail area start */}
            <div className="testimonial__area testimonial__area--2 pt-115 pb-115 position-relative">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 text-center">
                            <div className="section-heading mb-40">
                                <span className="sub-title">customer feedback</span>
                                <h2 className="title">Our customer review</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row g-0">
                        <div className="col-xl-12">
                            <div className="testimonial__active owl-carousel slider-nav">
                                <div className="testimonial__item text-center">
                                    <div className="row g-0 justify-content-center">
                                        <div className="col-xl-8">
                                            <span className="quote mb-20">
                                                <img src="assets/images/icons/t-quote.png" alt=""/>
                                            </span>
                                            <p>Very good quality of food and service. Vast menu with child friendly items as well as local seafood and even entrees for those who dont like seafood. Great place! Thanks. We absolutely love everything there!</p>
                                            <div className="author-info mt-35">
                                                <div className="thumb mb-25">
                                                    <img src="assets/images/author/tm-author.png" alt=""/>
                                                </div>
                                                <div className="content">
                                                    <h4 className="name">Rasalina De Willamson</h4>
                                                    <span className="designation">Founder & co</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial__item text-center">
                                    <div className="row g-0 justify-content-center">
                                        <div className="col-xl-8">
                                            <span className="quote mb-20">
                                                <img src="assets/images/icons/t-quote.png" alt=""/>
                                            </span>
                                            <p>Very good quality of food and service. Vast menu with child friendly items as well as local seafood and even entrees for those who dont like seafood. Great place! Thanks. We absolutely love everything there!</p>
                                            <div className="author-info mt-35">
                                                <div className="thumb mb-25">
                                                    <img src="assets/images/author/tm-author.png" alt=""/>
                                                </div>
                                                <div className="content">
                                                    <h4 className="name">Rasalina De Willamson</h4>
                                                    <span className="designation">Founder & co</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* testimonail area end */}
        </section>
        {/* populer product area end */}

        {/* product popup start */}
        <div className="product-popup product-popup-1">
            <div className="view-background">
                <div className="row">
                    <div className="col-md-4 align-self-center">
                        <div className="quickview d-flex align-items-center justify-content-center">
                            <div className="quickview__thumb">
                                <img src="assets/images/products/pp-1.png" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="viewcontent">
                            <div className="viewcontent__header">
                                <h2>VICARAGUA COFFEE BEANS</h2>
                                <a className="view_close product-p-close" href="/"><i className="fal fa-times"></i></a>
                            </div>
                            <div className="viewcontent__rating">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fal fa-star"></i>
                            </div>
                            <div className="viewcontent__price">
                                <h4><span>$</span>99.00</h4>
                            </div>
                            <div className="viewcontent__stock">
                                <h4>Available :<span> In stock</span></h4>
                            </div>
                            <div className="viewcontent__details">
                                <p>Anlor sit amet, consectetur adipiscing elit. Fusce condimentum est lacus, non pretium risus lacinia vel. Fusce eget turpis orci.</p>
                            </div>
                            <div className="viewcontent__action">
                                <span>Qty</span>
                                <input type="number" placeholder="1"/>
                                <a className="site-btn" href="#">add to cart</a>
                            </div>
                            <div className="viewcontent__footer">
                                <ul className="list-unstyled">
                                    <li>Category:</li>
                                    <li>SKU:</li>
                                    <li>Brand:</li>
                                </ul>
                                <ul className="list-unstyled">
                                    <li>Watches</li>
                                    <li>2584-MK63</li>
                                    <li>Brenda</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* product popup end */}

        {/* product popup start */}
        <div className="product-popup popup-coffe-mechine">
            <div className="view-background">
                <div className="row">
                    <div className="col-md-4 align-self-center">
                        <div className="quickview d-flex align-items-center justify-content-center">
                            <div className="quickview__thumb">
                                <img src="assets/images/products/product-big.png" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="viewcontent">
                            <div className="viewcontent__header">
                                <h2>VICARAGUA COFFEE BEANS</h2>
                                <a className="view_close product-p-close" href="/"><i className="fal fa-times"></i></a>
                            </div>
                            <div className="viewcontent__rating">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fal fa-star"></i>
                            </div>
                            <div className="viewcontent__price">
                                <h4><span>$</span>99.00</h4>
                            </div>
                            <div className="viewcontent__stock">
                                <h4>Available :<span> In stock</span></h4>
                            </div>
                            <div className="viewcontent__details">
                                <p>Anlor sit amet, consectetur adipiscing elit. Fusce condimentum est lacus, non pretium risus lacinia vel. Fusce eget turpis orci.</p>
                            </div>
                            <div className="viewcontent__action">
                                <span>Qty</span>
                                <input type="number" placeholder="1"/>
                                <a className="site-btn" href="#">add to cart</a>
                            </div>
                            <div className="viewcontent__footer">
                                <ul className="list-unstyled">
                                    <li>Category:</li>
                                    <li>SKU:</li>
                                    <li>Brand:</li>
                                </ul>
                                <ul className="list-unstyled">
                                    <li>Watches</li>
                                    <li>2584-MK63</li>
                                    <li>Brenda</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* product popup end */}

        {/* reservation area start */}
        <section className="reservation__area pt-120 pb-120 dark-bg">
            <div className="container-fluid custom-width">
                <div className="row g-0">
                    <div className="col-xl-6">
                        <div id="reservemap"></div>
                    </div>
                    <div className="col-xl-6">
                        <div className="reservation__wrapper">
                            <div className="section-heading text-center mb-50">
                                <span className="sub-title">Reservation</span>
                                <h2 className="title">booking a table</h2>
                            </div>
                            <div className="reservation__form mt-none-20 text-center">
                                <form action="index.html">
                                    <div className="from-group position-relative mt-20">
                                        <input type="text" name="name" placeholder="4 Person"/>
                                        <span className="icon"><i className="fal fa-user-alt"></i></span>
                                    </div>
                                    <div className="from-group position-relative mt-20">
                                        <input type="text" name="name" placeholder="12,2,2021"/>
                                        <span className="icon"><i className="fal fa-calendar-alt"></i></span>
                                    </div>
                                    <div className="from-group position-relative mt-20">
                                        <input type="text" name="name" placeholder="11:00 PM"/>
                                        <span className="icon"><i className="fal fa-clock"></i></span>
                                    </div>
                                    <button type="submit" className="site-btn mt-40">Book A Table</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* reservation area end */}
    </main>
      <script src="assets/js/jquery-2.2.4.min.js" />
      <script src="assets/js/bootstrap.bundle.min.js" />
      <script src="assets/js/jquery.meanmenu.min.js" />
      <script src="assets/js/jquery.nice-select.min.js" />
      <script src="assets/js/lightcase.js" />
      <script src="assets/js/owl.carousel.min.js" />
      <script src="assets/js/tilt.jquery.min.js" />
      <script src="assets/js/wow.min.js" />
      <script src="assets/js/jquery.easing.min.js" />
      <script src="assets/js/scrollwatch.js" />
      <script src="assets/js/sticky-header.js" />
      <script src="assets/js/imagesloaded.pkgd.min.js" />
      <script src="assets/js/isotope.pkgd.min.js" />
      <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDfpGBFn5yRPvJrvAKoGIdj1O1aO9QisgQ" />
      <script src="assets/js/jquery-ui-slider-range.js" />
      <script src="assets/js/main.js" />
    
    </>
    
  );
}
