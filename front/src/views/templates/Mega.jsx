import React from "react"

const MegaStore = () => {
    return (
        // <div className="headerMegaStore">
        //     <div className="preheaderMegaStoreMegaStore">
        //         <div className="container">
        //             <div className="row align-items-center">
        //                 <div className="col-md-6">
        //                     <div className="preheaderMegaStoreMegaStore-message">
        //                         Despacho gratis por compras mayores a $20.000
        //                     </div>
        //                 </div>
        //                 <div className="col-md-6">
        //                     <div className="preheaderMegaStoreMegaStore-menu">
        //                         {/* Customers links */}
        //                         <div className="preheaderMegaStoreMegaStore-menu-items">
        //                             <a href="/customer/login" className="trsn" >
        //                                 <span className="customer-name">
        //                                     Login/Register
        //                                 </span>
        //                             </a>
        //                             <span> | </span>
        //                             <div className="preheaderMegaStoreMegaStore-menu-item dropdown">
        //                                 <a
        //                                     href="#"
        //                                     role="button"
        //                                     id="currency-menu"
        //                                     data-toggle="dropdown"
        //                                     aria-haspopup="true"
        //                                     aria-expanded="false"
        //                                 >
        //                                     <span id="current_currency"> USD </span>
        //                                 </a>
        //                                 <div id="dropdown-menu-right" class="dropdown-menu dropdown-menu-right" aria-labelledby="currency-menu" x-placement="bottom-end" >
        //                                     <a href="#" onclick="Jumpseller.setCurrency('USD');" class="trsn dropdown-item" title="USD">USD</a>
        //                                     <a href="#" onclick="Jumpseller.setCurrency('EUR');" class="trsn dropdown-item" title="EUR">EUR</a>
        //                                     <a href="#" onclick="Jumpseller.setCurrency('CLP');" class="trsn dropdown-item" title="CLP">CLP</a>
        //                                 </div>

        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <div className="headerMegaStore">
            <div class="preheaderMegaStore">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-md-6">
                            <div class="preheaderMegaStore-message">
                                Free shipping for purchases over $100
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="preheaderMegaStore-menu">
                                {/* Customers links */}

                                <div class="preheaderMegaStore-menu-item ">
                                    <a href="/es/customer/login" class="trsn" title="Ingreso/Registro Mega Store">
                                        <span class="customer-name">
                                            Ingreso/Registro
                                        </span>
                                    </a>
                                </div>

                                <span>|</span>

                                <div class="preheaderMegaStore-menu-item dropdown">
                                    <a href="#" role="button" id="currency-menu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span id="current_currency">USD</span>
                                        <i class="linear-icon icon-0827-chevron-down"></i>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="currency-menu" x-placement="bottom-end" >
                                        <a href="#" onclick="Jumpseller.setCurrency('USD');" class="trsn dropdown-item" title="USD">USD</a>
                                        <a href="#" onclick="Jumpseller.setCurrency('EUR');" class="trsn dropdown-item" title="EUR">EUR</a>
                                        <a href="#" onclick="Jumpseller.setCurrency('CLP');" class="trsn dropdown-item" title="CLP">CLP</a>
                                    </div>
                                </div>

                                <span>|</span>

                                <div class="preheaderMegaStore-menu-item dropdown">
                                    <a href="#" role="button" id="language-menu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span>Español</span>
                                        <i class="linear-icon icon-0827-chevron-down"></i></a>
                                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="language-menu">
                                        <a href="https://megastore12.jumpseller.com/es/" class="trsn dropdown-item" title="Español">Español</a>
                                        <a href="https://megastore12.jumpseller.com/" class="trsn dropdown-item" title="English">English</a>
                                        <a href="https://megastore12.jumpseller.com/pt/" class="trsn dropdown-item" title="Português (Portugal)">Português (Portugal)</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="logo-area">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-12 d-lg-none text-center mb-3">
                            <a href="/es/" title="Mega Store" class="navbar-brand">
                                <img src="https://images.jumpseller.com/store/megastore12/store/logo/logo.png?0" class="store-image" alt="Mega Store" />
                            </a>
                        </div>
                        <div class="col-2 d-lg-none">
                            <button class="btn primary mobile-menu-trigger">
                                <div class="nav-icon">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </button>
                        </div>
                        <div class="col-lg-4 col-md-4 d-none d-lg-block">
                            <a href="/es/" title="Mega Store" class="navbar-brand">
                                <img src="https://images.jumpseller.com/store/megastore12/store/logo/logo.png?0" class="store-image" alt="Mega Store" />
                            </a>
                        </div>

                        <div class="col-lg-4 col-8">
                            <form id="search_mini_form" class="form-group" method="get" action="/es/search">
                                <input type="text" value="" name="q" class="form-control form-control-sm" onfocus="javascript:this.value=''" placeholder="Buscar productos" />
                                <button type="submit" class="btn primary">
                                    <i class="linear-icon icon-0803-magnifier"></i>
                                </button>
                                <input type="hidden" value="J+7S2+8n23GZ1LrztEUy97QjnkHv8NlkqD3dmGBEtvs=" name="authenticity_token" />
                            </form>
                        </div>

                        <div class="col-lg-4 col-2 text-right">
                            <div class="header-cart dropdown">
                                <span class="cart-size">0</span>
                                <button class="btn secondary" type="button" id="header-cart-menu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="linear-icon icon-0333-bag2"></i>
                                </button>
                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="header-cart-menu" x-placement="bottom-end">
                                    <div id="header-cart-wrapper">
                                        <div class="header-cart__content header-cart__empty">
                                            <p class="header-car__text">Tu carro de compras está vacío.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation  */}
            <div class="menu-area">
                <nav id="mobile-menu" aria-labelledby="menu-trigger" class="trsn d-lg-none">
                    <ul>
                        <li class="  mobile">
                            <a href="/es/" title="Home">Home</a>
                        </li>
                        <li class="has-dropdown  mobile">
                            <a title="Blog" class="level-1  first-trigger">
                                Blog
                            <i class="fas fa-angle-right" aria-hidden="true"></i>
                            </a>

                            <ul class="level-1 dropdown">
                                <li>
                                    <a title="Volver" class="back-level-1">
                                        <i class="fas fa-angle-double-left" aria-hidden="true">
                                        </i>
                                 Volver
                                 </a>
                                </li>
                                <li>
                                    <a title="Blog" class="top-category">
                                        Blog
                                    </a>
                                </li>

                                <li class="  mobile">
                                    <a href="/es/blog-post" title="Blog Post">Blog Post</a>
                                </li>

                                <li><a href="/es/blog" title="Blog" class="goto">Ir a
                                <span>Blog</span></a>
                                </li>
                            </ul>

                        </li>

                        <li class="has-dropdown  mobile">
                            <a title="About Us" class="level-1  first-trigger">About Us <i class="fas fa-angle-right" aria-hidden="true"></i></a>
                            <ul class="level-1 dropdown">
                                <li><a title="Volver" class="back-level-1">
                                    <i class="fas fa-angle-double-left" aria-hidden="true"></i>
                                    Volver</a></li>
                                <li><a title="About Us" class="top-category">About Us</a></li>

                                <li class="has-dropdown  mobile">
                                    <a title="Returns" class="level-2  last-trigger">Returns <i class="fas fa-angle-right" aria-hidden="true"></i></a>
                                    <ul class="level-2 dropdown">
                                        <li><a title="Volver" class="back-level-2"><i class="fas fa-angle-double-left" aria-hidden="true"></i> Volver</a></li>
                                        <li><a title="Returns" class="top-category">Returns</a></li>
                                        <li class="  mobile">
                                            <a href="/es/privacy-policy" title="Privacy Policy">Privacy Policy</a>
                                        </li>
                                        <li><a href="/es/returns" title="Returns" class="goto">Ir a <span>Returns</span></a></li>
                                    </ul>
                                </li>

                                <li class="  mobile">
                                    <a href="/es/terms-conditions" title="Terms &amp; Conditions">Terms &amp; Conditions</a>
                                </li>
                                <li><a href="/es/about-us" title="About Us" class="goto">Ir a <span>About Us</span></a></li>
                            </ul>
                        </li>

                        <li class="has-dropdown  mobile">
                            <a title="Contact Us" class="level-1  first-trigger">
                                Contact Us
                             <i class="fas fa-angle-right" aria-hidden="true"></i></a>
                            <ul class="level-1 dropdown">
                                <li><a title="Volver" class="back-level-1">
                                    <i class="fas fa-angle-double-left" aria-hidden="true"></i>
                                    Volver
                                    </a></li>
                                <li><a title="Contact Us" class="top-category">
                                    Contact Us
                                    </a></li>

                                <li class="has-dropdown  mobile">
                                    <a title="FAQ" class="level-2  last-trigger">
                                        FAQ
                                        <i class="fas fa-angle-right" aria-hidden="true"></i>
                                    </a>
                                    <ul class="level-2 dropdown">
                                        <li><a title="Volver" class="back-level-2">
                                            <i class="fas fa-angle-double-left" aria-hidden="true"></i>
                                            Volver
                                            </a></li>
                                        <li><a title="FAQ" class="top-category">FAQ</a></li>

                                        <li class="  mobile">
                                            <a href="/es/photography" title="Photography">Photography</a>
                                        </li>

                                        <li><a href="/es/faq" title="FAQ" class="goto">
                                            Ir a
                                            <span>FAQ</span>
                                        </a></li>
                                    </ul>

                                </li>

                                <li><a href="/es/contact" title="Contact Us" class="goto">
                                    Ir a
                                    <span>Contact Us</span>
                                </a></li>
                            </ul>

                        </li>

                    </ul>
                </nav>
                <div class="container">
                    <div class="row no-gutters">

                        <div class="category-menu-wrapper col-lg-3">
                            <span class="category-menu-trigger" href="#" role="button">
                                Categorías
            <div class="nav-icon">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </span>
                            <div class="container-mobile">
                                <nav id="category-menu" aria-labelledby="menu-trigger" class="trsn">
                                    <ul>
                                        <li class="nav-item has-children d-none d-lg-block">
                                            <a href="/es/technology" title="Technology" class="has-children level-1 trsn nav-link">Technology</a>
                                            <ul class="multi-level">
                                                <li class="nav-item  d-none d-lg-block">
                                                    <a href="/es/photography" title="Photography" class="level-1 trsn nav-link">Photography</a>
                                                </li>
                                                <li class=" mobile d-lg-none">
                                                    <a href="/es/photography" title="Photography">Photography</a>
                                                </li>
                                                <li class="nav-item  d-none d-lg-block">
                                                    <a href="/es/audio" title="Audio" class="level-1 trsn nav-link">Audio</a>
                                                </li>
                                                <li class=" mobile d-lg-none">
                                                    <a href="/es/audio" title="Audio">Audio</a>
                                                </li>
                                                <li class="nav-item  d-none d-lg-block">
                                                    <a href="/es/games" title="Games" class="level-1 trsn nav-link">Games</a>
                                                </li>
                                                <li class=" mobile d-lg-none">
                                                    <a href="/es/games" title="Games">Games</a>
                                                </li>
                                                <li class="nav-item  d-none d-lg-block">
                                                    <a href="/es/laptops" title="Laptops" class="level-1 trsn nav-link">Laptops</a>
                                                </li>
                                                <li class=" mobile d-lg-none">
                                                    <a href="/es/laptops" title="Laptops">Laptops</a>
                                                </li>
                                            </ul>

                                            <i class="linear-icon icon-0829-chevron-right"></i></li>

                                        <li class="has-dropdown mobile d-lg-none">
                                            <a title="Technology" class="level-1  first-trigger">
                                                Technology
                                                <i class="fas fa-angle-right" aria-hidden="true">
                                                </i>
                                            </a>

                                            <ul class="level-1 dropdown">
                                                <li>
                                                    <a title="Volver" class="back-level-1">
                                                        <i class="fas fa-angle-double-left" aria-hidden="true"></i>
                                                    Volver
                                                    </a>
                                                </li>
                                                <li>
                                                    <a title="Technology" class="top-category">
                                                        Technology
                                                    </a>
                                                </li>

                                                <li class="nav-item  d-none d-lg-block">
                                                    <a href="/es/photography" title="Photography" class="level-1 trsn nav-link">Photography</a>
                                                </li>

                                                <li class=" mobile d-lg-none">
                                                    <a href="/es/photography" title="Photography">Photography</a>
                                                </li>
                                                <li class="nav-item  d-none d-lg-block">
                                                    <a href="/es/audio" title="Audio" class="level-1 trsn nav-link">Audio</a>
                                                </li>
                                                <li class=" mobile d-lg-none">
                                                    <a href="/es/audio" title="Audio">Audio</a>
                                                </li>
                                                <li class="nav-item  d-none d-lg-block">
                                                    <a href="/es/games" title="Games" class="level-1 trsn nav-link">Games</a>
                                                </li>
                                                <li class=" mobile d-lg-none">
                                                    <a href="/es/games" title="Games">Games</a>
                                                </li>
                                                <li class="nav-item  d-none d-lg-block">
                                                    <a href="/es/laptops" title="Laptops" class="level-1 trsn nav-link">Laptops</a>
                                                </li>
                                                <li class=" mobile d-lg-none">
                                                    <a href="/es/laptops" title="Laptops">Laptops</a>
                                                </li>
                                                <li><a href="/es/technology" title="Technology" class="goto">Ir a <span>Technology</span></a></li>
                                            </ul>

                                        </li>

                                        <li class="nav-item has-children d-none d-lg-block">
                                            <a href="/es/home" title="Home" class="has-children level-1 trsn nav-link">Home</a>
                                            <ul class="multi-level">
                                                <li class="nav-item  d-none d-lg-block">
                                                    <a href="/es/kitchen" title="Kitchen" class="level-1 trsn nav-link">Kitchen</a>
                                                </li>
                                                <li class=" mobile d-lg-none">
                                                    <a href="/es/kitchen" title="Kitchen">Kitchen</a>
                                                </li>
                                                <li class="nav-item  d-none d-lg-block">
                                                    <a href="/es/home/lamps" title="Lamps" class="level-1 trsn nav-link">Lamps</a>
                                                </li>
                                                <li class=" mobile d-lg-none">
                                                    <a href="/es/home/lamps" title="Lamps">Lamps</a>
                                                </li>
                                                <li class="nav-item  d-none d-lg-block">
                                                    <a href="/es/living-rom" title="Living Rom" class="level-1 trsn nav-link">Living Rom</a>
                                                </li>
                                                <li class=" mobile d-lg-none">
                                                    <a href="/es/living-rom" title="Living Rom">Living Rom</a>
                                                </li>
                                            </ul>

                                            <i class="linear-icon icon-0829-chevron-right"></i>
                                        </li>

                                        <li class="has-dropdown mobile d-lg-none">
                                            <a title="Home" class="level-1  first-trigger">
                                                Home
                                                 <i class="fas fa-angle-right" aria-hidden="true">
                                                </i>
                                            </a>
                                            <ul class="level-1 dropdown">
                                                <li><a title="Volver" class="back-level-1"><i class="fas fa-angle-double-left" aria-hidden="true">
                                                </i>
                                                    Volver
                                                    </a>
                                                </li>
                                                <li><a title="Home" class="top-category">Home</a></li>
                                                <li class="nav-item  d-none d-lg-block">
                                                    <a href="/es/kitchen" title="Kitchen" class="level-1 trsn nav-link">Kitchen</a>
                                                </li>
                                                <li class=" mobile d-lg-none">
                                                    <a href="/es/kitchen" title="Kitchen">Kitchen</a>
                                                </li>
                                                <li class="nav-item  d-none d-lg-block">
                                                    <a href="/es/home/lamps" title="Lamps" class="level-1 trsn nav-link">Lamps</a>
                                                </li>
                                                <li class=" mobile d-lg-none">
                                                    <a href="/es/home/lamps" title="Lamps">Lamps</a>
                                                </li>
                                                <li class="nav-item  d-none d-lg-block">
                                                    <a href="/es/living-rom" title="Living Rom" class="level-1 trsn nav-link">Living Rom</a>
                                                </li>
                                                <li class=" mobile d-lg-none">
                                                    <a href="/es/living-rom" title="Living Rom">Living Rom</a>
                                                </li>
                                                <li>
                                                    <a href="/es/home" title="Home" class="goto">
                                                        Ir a
                                                        <span>Home</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>


                                        <li class="nav-item has-children d-none d-lg-block">
                                            <a href="/es/fashion" title="Fashion" class="has-children level-1 trsn nav-link">Fashion</a>
                                            <ul class="multi-level">
                                                <li class="nav-item has-children d-none d-lg-block">
                                                    <a href="/es/men" title="Men" class="has-children level-1 trsn nav-link">Men</a>
                                                    <ul class="multi-level">
                                                        <li class="nav-item  d-none d-lg-block">
                                                            <a href="/es/apparel" title="Apparel" class="level-1 trsn nav-link">Apparel</a>
                                                        </li>
                                                        <li class=" mobile d-lg-none">
                                                            <a href="/es/apparel" title="Apparel">Apparel</a>
                                                        </li>
                                                        <li class="nav-item  d-none d-lg-block">
                                                            <a href="/es/accesories" title="Accesories" class="level-1 trsn nav-link">Accesories</a>
                                                        </li>
                                                        <li class=" mobile d-lg-none">
                                                            <a href="/es/accesories" title="Accesories">Accesories</a>
                                                        </li>
                                                    </ul>
                                                    <i class="linear-icon icon-0829-chevron-right"></i>
                                                </li>

                                                <li class="has-dropdown mobile d-lg-none">
                                                    <a title="Men" class="level-2  last-trigger">Men <i class="fas fa-angle-right" aria-hidden="true"></i></a>
                                                    <ul class="level-2 dropdown">
                                                        <li><a title="Volver" class="back-level-2"><i class="fas fa-angle-double-left" aria-hidden="true"></i> Volver</a></li>
                                                        <li><a title="Men" class="top-category">Men</a></li>
                                                        <li class="nav-item  d-none d-lg-block">
                                                            <a href="/es/apparel" title="Apparel" class="level-1 trsn nav-link">Apparel</a>
                                                        </li>
                                                        <li class=" mobile d-lg-none">
                                                            <a href="/es/apparel" title="Apparel">Apparel</a>
                                                        </li>
                                                        <li class="nav-item  d-none d-lg-block">
                                                            <a href="/es/accesories" title="Accesories" class="level-1 trsn nav-link">Accesories</a>
                                                        </li>
                                                        <li class=" mobile d-lg-none">
                                                            <a href="/es/accesories" title="Accesories">Accesories</a>
                                                        </li>

                                                        <li>
                                                            <a href="/es/men" title="Men" class="goto">
                                                                Ir a
                                                             <span>Men</span>
                                                            </a>
                                                        </li>
                                                    </ul>

                                                </li>

                                                <li class="nav-item has-children d-none d-lg-block">
                                                    <a href="/es/women" title="Women" class="has-children level-1 trsn nav-link">Women</a>
                                                    <ul class="multi-level">
                                                        <li class="nav-item  d-none d-lg-block">
                                                            <a href="/es/accesories-1" title="Accesories" class="level-1 trsn nav-link">Accesories</a>
                                                        </li>
                                                        <li class=" mobile d-lg-none">
                                                            <a href="/es/accesories-1" title="Accesories">Accesories</a>
                                                        </li>
                                                    </ul>

                                                    <i class="linear-icon icon-0829-chevron-right"></i>
                                                </li>

                                                <li class="has-dropdown mobile d-lg-none">
                                                    <a title="Women" class="level-2  last-trigger">Women <i class="fas fa-angle-right" aria-hidden="true"></i></a>
                                                    <ul class="level-2 dropdown">
                                                        <li><a title="Volver" class="back-level-2"><i class="fas fa-angle-double-left" aria-hidden="true"></i> Volver</a></li>
                                                        <li><a title="Women" class="top-category">Women</a></li>
                                                        <li class="nav-item  d-none d-lg-block">
                                                            <a href="/es/accesories-1" title="Accesories" class="level-1 trsn nav-link">Accesories</a>
                                                        </li>

                                                        <li class=" mobile d-lg-none">
                                                            <a href="/es/accesories-1" title="Accesories">Accesories</a>
                                                        </li>

                                                        <li>
                                                            <a href="/es/women" title="Women" class="goto">
                                                                Ir a
                                                            <span>Women</span>
                                                            </a>
                                                        </li>
                                                    </ul>

                                                </li>

                                            </ul>

                                            <i class="linear-icon icon-0829-chevron-right"></i>
                                        </li>

                                        <li class="has-dropdown mobile d-lg-none">
                                            <a title="Fashion" class="level-1  first-trigger">Fashion <i class="fas fa-angle-right" aria-hidden="true"></i></a>
                                            <ul class="level-1 dropdown">
                                                <li><a title="Volver" class="back-level-1"><i class="fas fa-angle-double-left" aria-hidden="true"></i> Volver</a></li>
                                                <li><a title="Fashion" class="top-category">Fashion</a></li>
                                                <li class="nav-item has-children d-none d-lg-block">
                                                    <a href="/es/men" title="Men" class="has-children level-1 trsn nav-link">Men</a>
                                                    <ul class="multi-level">
                                                        <li class="nav-item  d-none d-lg-block">
                                                            <a href="/es/apparel" title="Apparel" class="level-1 trsn nav-link">Apparel</a>
                                                        </li>
                                                        <li class=" mobile d-lg-none">
                                                            <a href="/es/apparel" title="Apparel">Apparel</a>
                                                        </li>
                                                        <li class="nav-item  d-none d-lg-block">
                                                            <a href="/es/accesories" title="Accesories" class="level-1 trsn nav-link">Accesories</a>
                                                        </li>

                                                        <li class=" mobile d-lg-none">
                                                            <a href="/es/accesories" title="Accesories">Accesories</a>
                                                        </li>

                                                    </ul>

                                                    <i class="linear-icon icon-0829-chevron-right"></i>
                                                </li>

                                                <li class="has-dropdown mobile d-lg-none">
                                                    <a title="Men" class="level-2  last-trigger">Men <i class="fas fa-angle-right" aria-hidden="true"></i></a>
                                                    <ul class="level-2 dropdown">
                                                        <li><a title="Volver" class="back-level-2"><i class="fas fa-angle-double-left" aria-hidden="true"></i> Volver</a></li>
                                                        <li><a title="Men" class="top-category">Men</a></li>
                                                        <li class="nav-item  d-none d-lg-block">
                                                            <a href="/es/apparel" title="Apparel" class="level-1 trsn nav-link">Apparel</a>
                                                        </li>

                                                        <li class=" mobile d-lg-none">
                                                            <a href="/es/apparel" title="Apparel">Apparel</a>
                                                        </li>

                                                        <li class="nav-item  d-none d-lg-block">
                                                            <a href="/es/accesories" title="Accesories" class="level-1 trsn nav-link">Accesories</a>
                                                        </li>

                                                        <li class=" mobile d-lg-none">
                                                            <a href="/es/accesories" title="Accesories">Accesories</a>
                                                        </li>

                                                        <li>
                                                            <a href="/es/men" title="Men" class="goto">
                                                                Ir a
                                                             <span>Men</span>
                                                            </a>
                                                        </li>
                                                    </ul>

                                                </li>


                                                <li class="nav-item has-children d-none d-lg-block">
                                                    <a href="/es/women" title="Women" class="has-children level-1 trsn nav-link">Women</a>

                                                    <ul class="multi-level">
                                                        <li class="nav-item  d-none d-lg-block">
                                                            <a href="/es/accesories-1" title="Accesories" class="level-1 trsn nav-link">Accesories</a>
                                                        </li>
                                                        <li class=" mobile d-lg-none">
                                                            <a href="/es/accesories-1" title="Accesories">Accesories</a>
                                                        </li>
                                                    </ul>
                                                    <i class="linear-icon icon-0829-chevron-right"></i>
                                                </li>

                                                <li class="has-dropdown mobile d-lg-none">
                                                    <a title="Women" class="level-2  last-trigger">Women <i class="fas fa-angle-right" aria-hidden="true"></i></a>

                                                    <ul class="level-2 dropdown">
                                                        <li><a title="Volver" class="back-level-2"><i class="fas fa-angle-double-left" aria-hidden="true"></i> Volver</a></li>
                                                        <li><a title="Women" class="top-category">Women</a></li>
                                                        <li class="nav-item  d-none d-lg-block">
                                                            <a href="/es/accesories-1" title="Accesories" class="level-1 trsn nav-link">Accesories</a>
                                                        </li>
                                                        <li class=" mobile d-lg-none">
                                                            <a href="/es/accesories-1" title="Accesories">Accesories</a>
                                                        </li>
                                                        <li>
                                                            <a href="/es/women" title="Women" class="goto">
                                                                Ir a
                                                                 <span>Women</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>

                                                <li>
                                                    <a href="/es/fashion" title="Fashion" class="goto">
                                                        Ir a
                                                        <span>Fashion</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>


                                        <li class="nav-item  d-none d-lg-block">
                                            <a href="/es/sports" title="Sports" class="level-1 trsn nav-link">Sports</a>
                                        </li>

                                        <li class=" mobile d-lg-none">
                                            <a href="/es/sports" title="Sports">Sports</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>

                        <div class="col-md-9">
                            <div class="navbar navbar-expand-lg">
                                <div id="main-menu" class="collapse navbar-collapse">
                                    <ul class="navbar-nav mr-auto list-group-horizontal d-table">
                                        <li class="nav-item d-table-cell">
                                            <a href="/es/" title="Home" class=" trsn nav-link d-table-cell align-middle">Home</a>
                                        </li>

                                        <li class="nav-item dropdown d-table-cell">
                                            <a href="/es/blog" title="Blog" class="dropdown-toggle trsn nav-link d-table-cell align-middle">Blog</a>
                                            <ul class="dropdown-menu multi-level">
                                                <li class="nav-item ">
                                                    <a href="/es/blog-post" title="Blog Post" class=" trsn nav-link ">Blog Post</a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li class="nav-item dropdown d-table-cell">
                                            <a href="/es/about-us" title="About Us" class="dropdown-toggle trsn nav-link d-table-cell align-middle">About Us</a>
                                            <ul class="dropdown-menu multi-level">
                                                <li class="nav-item dropdown ">
                                                    <a href="/es/returns" title="Returns" class="dropdown-toggle trsn nav-link ">Returns</a>
                                                    <ul class="dropdown-menu multi-level">
                                                        <li class="nav-item ">
                                                            <a href="/es/privacy-policy" title="Privacy Policy" class=" trsn nav-link ">Privacy Policy</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="nav-item ">
                                                    <a href="/es/terms-conditions" title="Terms &amp; Conditions" class=" trsn nav-link ">Terms &amp; Conditions</a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li class="nav-item dropdown d-table-cell">
                                            <a href="/es/contact" title="Contact Us" class="dropdown-toggle trsn nav-link d-table-cell align-middle">Contact Us</a>
                                            <ul class="dropdown-menu multi-level">
                                                <li class="nav-item dropdown">
                                                    <a href="/es/faq" title="FAQ" class="dropdown-toggle trsn nav-link ">FAQ</a>
                                                    <ul class="dropdown-menu multi-level">
                                                        <li class="nav-item ">
                                                            <a href="/es/photography" title="Photography" class=" trsn nav-link ">Photography</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>

                                    <ul class="social navbar-toggler-right list-inline d-none d-xl-block">
                                        <li class="list-inline-item">
                                            <a href="https://www.facebook.com/facebook" class="trsn" title="Ir a Facebook" target="_blank">
                                                <i class="fab fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a href="https://www.twitter.com/twitter" class="trsn" title="Ir a Twitter" target="_blank">
                                                <i class="fab fa-twitter-square"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a href="https://www.pinterest.com/pinterest" class="trsn" title="Ir a Pinterest" target="_blank">
                                                <i class="fab fa-pinterest-square"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a href="https://www.instagram.com/jumpseller" class="trsn" title="Ir a Instagram" target="_blank">
                                                <i class="fab fa-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MegaStore;