import React, { useState, useEffect } from "react";
import Header from "./Header";
import Note from "./Note";
import Clients from "./Clients";
import Footer from "./Footer";


import axios from "axios";
const COWINAPI = () => {
  const [data, setData] = useState({ sessions: [] });
  const [url, setUrl] = useState(
    "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=110001&date=01-06-2021"
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios(url);
        console.log(result.data);
        setData(result.data);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return [{ data, isLoading, isError }, setUrl];
};

function App() {
  const [query, setQuery] = useState("110001");
  const [{ data, isLoading, isError }, doFetch] = COWINAPI();
  return (
    <div>
    <div class="hero product-hero is-app-grey has-shape-layer-1">
      <Header />
      
         
          <div id="main-hero" class="hero-body">
            <div class="container has-text-centered">
                <div class="columns is-vcentered mt-60">
                    <div class="column is-5 signup-column has-text-left">
                        <h1 class="title main-title text-bold is-2">
                            Enter your Pincode
                        </h1>
                        
                        <div class="signup-block">
                        <form
                          onSubmit={(event) => {
                            doFetch(
                              `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${query}&date=01-06-2021`
                            );
                            event.preventDefault();
                          }}>
                                <div class="control">
                                    <input type="email" class="input" placeholder="Your pincode" type="text"
                                      value={query}
                                      onChange={(event) => setQuery(event.target.value)} />
                                    <button type="submit" class="button btn-align primary-btn raised">Search</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="column is-7 is-offset-1">
                        
                        <figure class="image is-hidden-mobile">
                            <img class="VaccineIMG" src="assets/cowin/vaccine.png" data-extension=".png" alt="" />
                        </figure>
                    </div>
                </div>
            </div>
        </div>
        <Clients />
        </div>

      {isError && <div>Something went wrong ...</div>}

      {isLoading && <div>Loading ...</div>}
      {!isError && !isLoading && (
        <div class="CardsDiv">
          {data.sessions.map((item) => (
            
              <Note
                name={item.name}
                address={item.address}
                from={item.from}
                to={item.to}
                available_capacity_dose1={item.available_capacity_dose1}
                available_capacity_dose2={item.available_capacity_dose2}
                vaccine={item.vaccine}
              />
            
          ))}
        </div>
      )}
      <section class="section section-primary is-medium is-skewed-sm is-relative">
        <div class="container slanted-container is-reverse-skewed-sm">
            <div class="columns is-vcentered">
                
                <div class="column is-5 ">
                    <div class="side-feature-text">
                        <h2 class="title is-3 clean-text light-text">Get started in a breeze</h2>
                        <p class="light-text">Lorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte. Vis mutat altera percipit ad, ipsum prompta ius eu. Sanctus appellantur vim ea. Dolorem delicata vis te, aperiam nostrum ut per.</p>
                        <div class="button-wrap">
                            <a href="kit2-signup.html" class="button button-cta light-btn btn-outlined is-bold">
                                Get started
                            </a>
                        </div>
                    </div>
                </div>
                
                <div class="column is-6 is-offset-1">
                    <img class="featured-svg" src="assets/img/graphics/widgets/mini-widget-4-core.png" data-base-url="assets/img/graphics/widgets/mini-widget-4" data-extension=".png" alt=""/>
                </div>
            </div>
        </div>
    </section>


    <section id="values" class="section section-feature-grey is-medium is-skewed-sm">
        <div class="container is-reverse-skewed-sm">
         
            <div class="section-title-wrapper has-text-centered">
                <div class="bg-number">4</div>
                <h2 class="section-title-landing">
                    Grow your Business
                </h2>
                <h4>And start to forecast for the next 6 months</h4>
            </div>

            <div class="content-wrapper floating-circles">
                <div class="columns is-vcentered">
                   
                    <div class="column is-4">
                        <div class="floating-circle levitate is-icon-reveal">
                            <img src="assets/img/graphics/icons/globe-core.svg" data-base-url="assets/img/graphics/icons/globe" data-extension=".svg" alt="" />
                        </div>
                        <div class="has-text-centered floating-text">
                            <span class="clean-text">Sell everywhere</span>
                        </div>
                    </div>
              
                    <div class="column is-4">
                        <div class="floating-circle levitate delay-2 is-icon-reveal">
                            <img src="assets/img/graphics/icons/cash-core.svg" data-base-url="assets/img/graphics/icons/cash" data-extension=".svg" alt="" />
                        </div>
                        <div class="has-text-centered floating-text">
                            <span class="clean-text">Smart pricing</span>
                        </div>
                    </div>
                   
                    <div class="column is-4">
                        <div class="floating-circle levitate delay-4 is-icon-reveal">
                            <img src="assets/img/graphics/icons/credit-card-core.svg" data-base-url="assets/img/graphics/icons/credit-card" data-extension=".svg" alt="" />
                        </div>
                        <div class="has-text-centered floating-text">
                            <span class="clean-text">Secured payments</span>
                        </div>
                    </div>
                </div>
             
                <div class="button-wrap has-text-centered is-title-reveal">
                    <a href="kit2-signup.html" class="button button-cta btn-align raised primary-btn">
                        Start your Free trial
                    </a>
                </div>
            </div>
        </div>
    </section>



    <section id="business-types" class="section is-medium is-skewed-sm">
        <div class="container is-reverse-skewed-sm">
        
            <div class="section-title-wrapper has-text-centered">
                <div class="bg-number">5</div>
                <h2 class="section-title-landing">
                    We got you covered
                </h2>
                <h4>Every business matters, learn how we handle it.</h4>
            </div>

      
            <div class="content-wrapper">
                <div class="columns is-vcentered">
                    <div class="column is-5 is-offset-1">
                        <div class="side-feature-text">
                            <h2 class="feature-headline is-clean">Every business matters. We give you tools to succeed.</h2>
                            <p>Lorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte. </p>
                            <p>Lorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte. Vis mutat altera percipit ad, ipsum prompta ius eu. Sanctus appellantur vim ea.
                            </p>
                            <div class="button-wrap">
                                <a href="kit2-signup.html" class="button button-cta btn-align raised primary-btn">
                                    Try it free
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="column is-4 is-offset-1">
                        <div class="flex-card company-types">
                            <div class="icon-group">
                                <img src="assets/img/graphics/icons/store-core.svg" data-base-url="assets/img/graphics/icons/store" data-extension=".svg" alt=""/>
                                <span>Online stores</span>
                            </div>
                            <div class="icon-group">
                                <img src="assets/img/graphics/icons/bank-core.svg" data-base-url="assets/img/graphics/icons/bank" data-extension=".svg" alt=""/>
                                <span>Finance services</span>
                            </div>
                            <div class="icon-group">
                                <img src="assets/img/graphics/icons/factory-core.svg" data-base-url="assets/img/graphics/icons/factory" data-extension=".svg" alt=""/>
                                <span>Industry</span>
                            </div>
                            <div class="icon-group">
                                <img src="assets/img/graphics/icons/church-core.svg" data-base-url="assets/img/graphics/icons/church" data-extension=".svg" alt="" />
                                <span>Churches</span>
                            </div>
                            <div class="icon-group">
                                <img src="assets/img/graphics/icons/warehouse-core.svg" data-base-url="assets/img/graphics/icons/warehouse" data-extension=".svg" alt="" />
                                <span>Logistics</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="card-testimonials" class="section section-feature-grey is-medium is-skewed-sm">
        <div class="container is-reverse-skewed-sm">
         
            <div class="section-title-wrapper has-text-centered">
                <div class="bg-number">6</div>
                <h2 class="section-title-landing">
                    We are Trusted
                </h2>
                <h4>Access integrations and new features in a matter of seconds</h4>
            </div>

            <div class="content-wrapper">
         
                <div class="columns">
                    <div class="column is-10 is-offset-1">
                        <div class="columns is-vcentered">
                            <div class="column is-6">
                          
                                <div class="flex-card testimonial-card light-raised light-bordered padding-20">
                                    <div class="testimonial-title">
                                        Amazed by the product
                                    </div>
                                    <div class="testimonial-text">
                                        Lorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte. Vis mutat altera percipit ad.
                                    </div>
                                    <div class="user-id">
                                        <img src="https://via.placeholder.com/250x250" alt="" data-demo-src="assets/img/avatars/dan.png" />
                                        <div class="info">
                                            <div class="name clean-text">Dan Shwartz</div>
                                            <div class="position">Software engineer</div>
                                        </div>
                                    </div>
                                </div>
                  
                                <div class="flex-card testimonial-card light-raised light-bordered padding-20">
                                    <div class="testimonial-title">
                                        My tasks are now painless
                                    </div>
                                    <div class="testimonial-text">
                                        Lorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte. Vis mutat altera percipit ad.
                                    </div>
                                    <div class="user-id">
                                        <img src="https://via.placeholder.com/250x250" alt="" data-demo-src="assets/img/avatars/janet.jpg" />
                                        <div class="info">
                                            <div class="name clean-text">Jane Guzmann</div>
                                            <div class="position">CFO</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="column is-6">
                   
                                <div class="flex-card testimonial-card light-raised light-bordered padding-20">
                                    <div class="testimonial-title">
                                        Very nice support
                                    </div>
                                    <div class="testimonial-text">
                                        Lorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte. Vis mutat altera percipit ad.
                                    </div>
                                    <div class="user-id">
                                        <img src="https://via.placeholder.com/250x250" alt="" data-demo-src="assets/img/avatars/helen.jpg" />
                                        <div class="info">
                                            <div class="name clean-text">Hellen Miller</div>
                                            <div class="position">Accountant</div>
                                        </div>
                                    </div>
                                </div>
                    
                                <div class="flex-card testimonial-card light-raised light-bordered padding-20">
                                    <div class="testimonial-title">
                                        My income has doubled
                                    </div>
                                    <div class="testimonial-text">
                                        Lorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte. Vis mutat altera percipit ad.
                                    </div>
                                    <div class="user-id">
                                        <img src="https://via.placeholder.com/250x250" alt="" data-demo-src="assets/img/avatars/anthony.jpg" />
                                        <div class="info">
                                            <div class="name clean-text">Anthony Leblanc</div>
                                            <div class="position">Founder at Hereby</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="grid-clients three-grid">
                    <div class="columns is-vcentered">
                        <div class="column"></div>
                        <div class="column">
                            <a><img class="client" src="assets/img/logos/custom/systek.svg" alt=""/></a>
                        </div>
                        <div class="column">
                            <a><img class="client" src="assets/img/logos/custom/phasekit.svg" alt=""/></a>
                        </div>
                        <div class="column">
                            <a><img class="client" src="assets/img/logos/custom/grubspot.svg" alt=""/></a>
                        </div>
                        <div class="column"></div>
                    </div>
                    <div class="columns is-vcentered is-separator">
                        <div class="column"></div>
                        <div class="column">
                            <a><img class="client" src="assets/img/logos/custom/tribe.svg" alt=""/></a>
                        </div>
                        <div class="column">
                            <a><img class="client" src="assets/img/logos/custom/kromo.svg" alt=""/></a>
                        </div>
                        <div class="column">
                            <a><img class="client" src="assets/img/logos/custom/covenant.svg" alt=""/></a>
                        </div>
                        <div class="column"></div>
                    </div>
                    <div class="columns is-vcentered is-separator">
                        <div class="column"></div>
                        <div class="column">
                            <a><img class="client" src="assets/img/logos/custom/infinite.svg" alt=""/></a>
                        </div>
                        <div class="column">
                            <a><img class="client" src="assets/img/logos/custom//gutwork.svg" alt=""/></a>
                        </div>
                        <div class="column">
                            <a><img class="client" src="assets/img/logos/custom/proactive.svg" alt=""/></a>
                        </div>
                        <div class="column"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    
    <section id="cta" class="section is-medium is-skewed-sm">
        <div class="container is-reverse-skewed-sm">
          
            <div class="section-title-wrapper has-text-centered">
                <div class="bg-number">7</div>
                <h2 class="section-title-landing">
                    Let's dive in
                </h2>
            </div>

            <div class="content">
                <h4 class="has-text-centered">Get started right away.</h4>
            </div>
            <div class="has-text-centered is-title-reveal pt-20 pb-20">
                <a href="kit2-signup.html" class="button button-cta btn-align raised primary-btn">
                    Start your Free trial
                </a>
            </div>
        </div>
        </section>
       



      <Footer />
    </div>
  );
}

export default App;
