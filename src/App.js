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
                        <br></br>
                        <button type="submit" class="btn-align button hey primary-btn raised">18-45</button>
                        <button type="submit" class="btn-align button hey primary-btn raised">45 above</button>
                        <button type="submit" class="btn-align button hey primary-btn raised">Free</button>
                        <button type="submit" class="btn-align button hey primary-btn raised">Search</button>
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
      

    



      <Footer />
    </div>
  );
}

export default App;
