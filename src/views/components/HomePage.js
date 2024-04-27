import React from 'react';
import {useState} from 'react'

import gsap from "gsap";
import {useGSAP} from "@gsap/react";

function HomePage() {

  //GSAP EXAMPLE FOR CTA CLASS 
    // useGSAP(() => {
    //     gsap.fromTo(".CTA", {autoAlpha: 0}, {autoAlpha: 0.5, duration: 1, delay: 0.25});
    //     gsap.fromTo(".CTA", {opacity: 0}, {opacity: 100, duration: 400, delay: 0.25}); // <-- automatically reverted

    // });

   

    return (
        <div>
          <h1>Hello World</h1>
        </div>
    );
}

export default HomePage;
