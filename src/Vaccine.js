import React from "react";

function Vaccine() {
    return (
        <section class="section section-primary is-medium is-relative hey2">
        <h1>Vaccine Info.</h1>
        <div class="columns is-vcentered">

                <div class="column is-5 is-offset-1">
                    <div class="flex-card media-card media-card-left light-bordered light-raised">
                        <div class="columns is-gapless is-desktop">
                            <div class="column is-4 media-stretch">
                                <div class="media-card-image" data-background="assets/img/demo/woman-glasses.jpeg" data-demo-background="assets/img/demo/woman-glasses.jpeg" ></div>
                            </div>
                            <div class="column content-column">
                                <div class="mcard-content">
                                    <h3 class="mcard-title"><a href="#">COVISHIELD</a></h3>
                                    <p class="mcard-description is-hidden-touch"><strong>NO OF DOSES:</strong>  2 </p>
                                    <p class="mcard-description is-hidden-touch"><strong>DOSAGE GAP:</strong>   12-16 WEEKS</p>
                                    <p class="mcard-description is-hidden-touch"><strong>COMMON SIDE EFFECTS:</strong>
                                    <ul>
                                    <li>tenderness, pain, warmth, or itching at Injection Site</li>
                                    <li>Headache</li>
                                    <li>generally feeling unwell</li>
                                    <li>Fatigue</li>
                                    </ul></p>
                                </div>
                               <div class="mcard-controls">
                                  <div class="mcard-avatar">
                                        <img src="assets/img/avatars/covishield.jpg" alt="" data-demo-src="assets/img/avatars/covishield.jpg" />
                                    </div>
                                    <div class="mcard-info">
                                        <span><a href="#">Henry Rogers</a></span>
                                        <div><span>13 Oct</span> <i class="fa fa-circle"></i> <span>8 min read</span></div>
                                    </div>
                                    <div class="mcard-actions ml-auto">
                                        <span><i class="material-icons">bookmark_border</i> </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column is-5">
                    <div class="flex-card media-card media-card-left light-bordered light-raised">
                        <div class="columns is-gapless is-desktop">
                            <div class="column is-4 media-stretch">
                                <div class="media-card-image" data-background="assets/cowin/covaxin.jpg" data-demo-background="assets/cowin/covaxin.jpg" ></div>
                            </div>
                            <div class="column content-column">
                                <div class="mcard-content">
                                    <h3 class="mcard-title"><a href="#">COVAXIN</a></h3>
                                    <p class="mcard-description is-hidden-touch"><strong>NO OF DOSES:</strong>  2</p>
                                    <p><strong>DOSAGE GAP:</strong>   12-16 WEEKS</p>
                                    <p class="mcard-description is-hidden-touch"><strong></strong><ul>
                                    <li>Injection site pain/Swelling/Redness/Itching</li>
                                    <li>Headache</li>
                                    <li>Fever</li>
                                    <li>Nausea/Vomiting</li>
                                    </ul>  </p>
                                </div>
                                <div class="mcard-controls">
                                    <div class="mcard-avatar">
                                        <img src="assets/img/avatars/bharat-biotech-covaxin-packshot.jpg" alt="" data-demo-src="assets/img/avatars/bharat-biotech-covaxin-packshot.jpg" />
                                    </div>
                                    <div class="mcard-info">
                                        <span><a href="#">Janet Biggs</a></span>
                                        <div><span>06 Oct</span> <i class="fa fa-circle"></i> <span>4 min read</span></div>
                                    </div>
                                    <div class="mcard-actions ml-auto">
                                        <span><i class="material-icons">bookmark_border</i> </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    </section>
    )
}

export default Vaccine;
