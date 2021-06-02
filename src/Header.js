import React from "react";

function Header() {
  return (
    <nav class="navbar navbar-wrapper navbar-default navbar-fade is-transparent">
    <div class="container">
    <div class="custom-burger" id="custom-burger" onclick="showNavbar()">
                        <a id="" class="responsive-btn" href="javascript:void(0);">
                            <span class="menu-toggle">
                                <span class="icon-box-toggle">
                                    <span class="rotate">
                                        <i class="icon-line-top"></i>
                                        <i class="icon-line-center"></i>
                                        <i class="icon-line-bottom"></i>
                                    </span>
                            </span>
                            </span>
                        </a>
                    </div>
        <div class="navbar-menu">

            <div class="navbar-start">
                
                
                <a class="navbar-item is-slide" href="kit2-pricing.html">
                    Extensions for auto-booking
                </a>
                
                <a class="navbar-item is-slide" href="kit2-login.html">
                    Vaccines Info.
                </a>
            </div>

            
            <div class="navbar-end">
                
                <div class="navbar-item">
                    <h1 class="heading">Vaccine Finder</h1>
                </div>
               
            </div>
        </div>
    </div>
</nav>
  );
}

export default Header;
