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
                                <img src="https://bsmedia.business-standard.com/_media/bs/img/article/2021-01/03/full/1609654664-338.jpg"/>
                            </div>
                            <div class="column content-column">
                                <div class="mcard-content">
                                    <h3 class="mcard-title"><a href="#">COVISHIELD</a></h3>
                                    <p class="mcard-description is-hidden-touch"><strong>NO OF DOSES:  </strong>  2 </p>
                                    <p class="mcard-description is-hidden-touch"><strong>DOSAGE GAP:  </strong>   12-16 WEEKS</p>
                                    <p class="mcard-description is-hidden-touch"><strong>COMMON SIDE EFFECTS:</strong>
                                    <ul>
                                    <li>Tenderness, pain, warmth, or itching at Injection Site</li>
                                    <li>Headache</li>
                                    <li>generally feeling unwell</li>
                                    <li>Fatigue</li>
                                    </ul></p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="column is-5">
                    <div class="flex-card media-card media-card-left light-bordered light-raised">
                        <div class="columns is-gapless is-desktop">
                            <div class="column is-4 media-stretch">

                                <img src="https://www.bharatbiotech.com/images/covaxin/bharat-biotech-covaxin-packshot.jpg"/>
                            </div>
                            <div class="column content-column">
                                <div class="mcard-content">
                                    <h3 class="mcard-title"><a href="#">COVAXIN</a></h3>
                                    <p class="mcard-description is-hidden-touch"><strong>NO OF DOSES:  </strong>  2</p>
                                    <p><strong>DOSAGE GAP:</strong>4-6 WEEKS </p>
                                    <p class="mcard-description is-hidden-touch"><strong>COMMON SIDE EFFECTS</strong><ul>
                                    <li>Injection site pain/Swelling/Redness</li>
                                    <li>Headache</li>
                                    <li>Fever</li>
                                    <li>Nausea/Vomiting</li>
                                    </ul>  </p>
                                </div>
                                <div class="mcard-controls">
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
