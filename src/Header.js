import React from "react";

function Header() {
  return (
    <nav class="navbar navbar-wrapper navbar-default navbar-fade is-transparent">
    <div class="container">
    <div class="navbarMobile">
        <a class="navbar-item is-slide" href="/extensions">Extensions for auto-booking</a>
        <a class="navbar-item is-slide" href="/vaccine">Vaccines Info.</a>
    </div>
    
        <div class="navbar-menu">
            <div class="navbar-start">
                <a class="navbar-item is-slide" href="/extensions">
                    Extensions for auto-booking
                </a>
                <a class="navbar-item is-slide" href="/vaccine">
                    Vaccines Info.
                </a>
            </div>

            
            <div class="navbar-end">
                
                <div class="navbar-item">
                    <a href="/"><h1 class="heading">Vaccine Finder</h1></a>
                </div>
               
            </div>
        </div>
    </div>
</nav>
  );
}

export default Header;
