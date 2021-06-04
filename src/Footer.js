import React from "react";

function Footer() {
    return (
         <footer class="footer-light-medium">
        <div class="container">
            <div class="footer-head">
                <div class="head-text">
                    <h3 class="dev1">Developed & coded by</h3>
                    <h3 class="dev"><a href="http://snehil34.herokuapp.com/" target="_blank">Snehil Jain & Arpit Kogta</a> </h3>
                </div>
                <div class="head-action">
                    <div class="buttons">
                        <a class="button primary-btn raised action-button is-bold" href="https://freelink-snehiljain.herokuapp.com/" target="_blank">Reach Us</a>
                        <a class="button chat-button">Give Feedback</a>
                    </div>
                </div>
            </div>

            <div class="footer-copyright has-text-centered">
                <p>© 2021 || All Rights Reserved.</p>
            </div>
        </div>

    </footer>
    );
}

export default Footer;