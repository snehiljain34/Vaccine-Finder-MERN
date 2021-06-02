import React from "react";

function Header() {
  return (
    <nav class="navbar navbar-wrapper navbar-default navbar-fade is-transparent">
    <div class="container">
   
        <div class="navbar-menu">

            <div class="navbar-start">
                
                <a class="navbar-item is-slide" href="kit2-features.html">
                    Resources
                </a>
                
                <a class="navbar-item is-slide" href="kit2-pricing.html">
                    Extensions
                </a>
                
                <a class="navbar-item is-slide" href="kit2-login.html">
                    Vaccines
                </a>
            </div>

            
            <div class="navbar-end">
                
                <div class="navbar-item">
                    <h1 class="heading">Vaccine Finder</h1>
                </div>
                <div class="navbar-item">
                    <a id="#signup-btn" href="kit2-signup.html" class="button button-cta btn-outlined is-bold btn-align primary-btn raised">
                        Free Trial
                    </a>
                </div>
            </div>
        </div>
    </div>
</nav>
  );
}

export default Header;
