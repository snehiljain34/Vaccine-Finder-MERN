import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./Header";
import Note from "./Note";
import Clients from "./Clients";
import Footer from "./Footer";
import Extension from "./Extension";
import Vaccine from "./Vaccine";
import { Controller, useForm } from "react-hook-form";
import { Box, Button, Label, Flex, jsx, Heading } from "theme-ui";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import axios from "axios";
const COWINAPI = () => {
  const [data, setData] = useState({ sessions: [] });
  var dateObj = new Date();
  var month = dateObj.getUTCMonth() + 1;
  var day = dateObj.getUTCDate();
  var year = dateObj.getUTCFullYear();
  var newdate = day + "-0" + month + "-" + year;
  const [url, setUrl] = useState(
    "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=560100&date="+newdate
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
  const [query, setQuery] = useState("560100");
  const [{ data, isLoading, isError }, doFetch] = COWINAPI();
  const [eighteenplus,setEighteenPlus]=useState(false);
  const [fortyfiveplus,setFortyFivePlus]=useState(false);
  const [free,setFree]=useState(false);
  const [paid,setPaid]=useState(false);
  const [color18,setColor18]=useState('#00ead3');
  const [textColor18,setTextColor18]=useState('white');
  const [color45,setColor45]=useState('#00ead3');
  const [textColor45,setTextColor45]=useState('white');
  const [colorfree,setColorfree]=useState('#00ead3');
  const [textColorfree,setTextColorfree]=useState('white');
  const [colorpaid,setColorpaid]=useState('#00ead3');
  const [textColorpaid,setTextColorpaid]=useState('white');

  const change18=()=>{
    if(color18==='#00ead3'){
      setColor18('#2471A3');
      setTextColor18('black');
    }
    else{
      setColor18('#00ead3');
      setTextColor18('white');
    }
    setEighteenPlus(!eighteenplus);
  };
  const change45=()=>{
    if(color45==='#00ead3'){
      setColor45('#2471A3');
      setTextColor45('black');
    }
    else{
      setColor45('#00ead3');
      setTextColor45('white');
    }
    setFortyFivePlus(!fortyfiveplus);
  };
  const changefree=()=>{
    if(colorfree==='#00ead3'){
      setColorfree('#2471A3');
      setTextColorfree('black');
    }
    else{
      setColorfree('#00ead3');
      setTextColorfree('white');
    }
    setFree(!free);
  };
  const changepaid=()=>{
    if(colorpaid==='#00ead3'){
      setColorpaid('#2471A3');
      setTextColorpaid('black');
    }
    else{
      setColorpaid('#00ead3');
      setTextColorpaid('white');
    }
    setPaid(!paid);
  };
  var dateObj = new Date();
  var month = dateObj.getUTCMonth() + 1;
  var day = dateObj.getUTCDate();
  var year = dateObj.getUTCFullYear();
  var newdate = day + "-0" + month + "-" + year;
  var [date,setDate]=useState(newdate);
  return (
  <div>



      <Switch>
        {/* If the current URL is /about, this route is rendered
            while the rest are ignored */}
        <Route path="/extensions">
        <div class="hero product-hero is-app-grey has-shape-layer-1">
          <Header />
        </div>
          <Extension />
          <Footer/>
        </Route>

        {/* Note how these two routes are ordered. The more specific
            path="/contact/:id" comes before path="/contact" so that
            route will render when viewing an individual contact */}
        <Route path="/vaccine">
        <div class="hero product-hero is-app-grey has-shape-layer-1">
          <Header />
        </div>
          <Vaccine />
          <Footer />
        </Route>

        {/* If none of the previous routes render anything,
            this route acts as a fallback.

            Important: A route with path="/" will *always* match
            the URL because all URLs begin with a /. So that's
            why we put this one last of all */}
        <Route path="/">
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
                              `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${query}&date=`+newdate
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
                        <button style={{background:color18,color:textColor18}}     type="submit" class="btn-align button hey primary-btn raised" onClick={change18}>18-45</button>
                        <button style={{background:color45,color:textColor45}}     type="submit" class="btn-align button hey primary-btn raised" onClick={change45}>45 above</button>
                        <button style={{background:colorfree,color:textColorfree}} type="submit" class="btn-align button hey primary-btn raised" onClick={changefree}>Free</button>
                        <button style={{background:colorpaid,color:textColorpaid}} type="submit" class="btn-align button hey primary-btn raised" onClick={changepaid}>Paid</button>
                    </div>
                    <div class="column is-7 is-offset-1">

                        <figure class="image">
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
         {data.sessions
           .filter((item)=>{
           if(eighteenplus^fortyfiveplus){
             if(eighteenplus){
               if(free^paid){
                 if(free){
                 return item.min_age_limit===18&&item.fee_type==='Free';
               }
               else{
                 return item.min_age_limit===18&&item.fee_type==='Paid';
               }
             }
             else{
               return item.min_age_limit===18;
             }
           }
             else{
               if(free^paid){
                 if(free){
                 return item.min_age_limit===45&&item.fee_type==='Free';
               }
               else{
                 return item.min_age_limit===45&&item.fee_type==='Paid';
               }
             }
             else{
               return item.min_age_limit===45;
             }
           }
         }
               else{
                 if(free^paid){
                   if(free){
                   return item.fee_type==='Free';
                 }
                 else{
                   return item.fee_type==='Paid';
                 }
               }
               else{
                 return true;
               }
             }
         })
         .map((item) => (

              <Note
                name={item.name}
                address={item.address}
                from={item.from}
                to={item.to}
                available_capacity_dose1={item.available_capacity_dose1}
                available_capacity_dose2={item.available_capacity_dose2}
                vaccine={item.vaccine}
                age={item.min_age_limit}
              />

          ))}
        </div>
      )}

      <Footer />
        </Route>
      </Switch>
    </div>

  );
}

export default App;
