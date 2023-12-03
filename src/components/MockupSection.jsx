import React from "react";
import Section from "./Section";
import { Mockup3, Mockup4 } from "./Mockup";


import mockup_1 from "../assets/images/mockups/mockup-1.png";
import mockup_2 from "../assets/images/mockups/mockup-2.png";
import mockup_3 from "../assets/images/mockups/mockup-3.png";
import mockup_4 from "../assets/images/mockups/mockup-4.png";
import mockup_5 from "../assets/images/mockups/mockup-5.png";
import mockup_6 from "../assets/images/mockups/mockup-6.png";
import mockup_7 from "../assets/images/mockups/mockup-7.png";
import mockup_8 from "../assets/images/mockups/mockup-8.png";
import mockup_9 from "../assets/images/mockups/mockup-9.png";
import mockup_10 from "../assets/images/mockups/mockup-10.png";
import mockup_11 from "../assets/images/mockups/mockup-11.png";
import mockup_12 from "../assets/images/mockups/mockup-12.png";
import mockup_13 from "../assets/images/mockups/mockup-13.png";
import mockup_14 from "../assets/images/mockups/mockup-14.png";
import mockup_15 from "../assets/images/mockups/mockup-15.png";

export default function MockupSection ({  }) {

    return (
        <Section title='Mockups' titleColor='#89213C' bgColor='white'>
            <div  className="mt-[60px]"></div>
  
           <Mockup4  images={[mockup_1, mockup_2, mockup_3, mockup_4]} />
           <Mockup4  images={[mockup_5, mockup_6, mockup_7, mockup_8]} />
           <Mockup3  images={[mockup_9, mockup_10, mockup_11]} />
           <Mockup4  images={[mockup_12, mockup_13, mockup_14, mockup_15]} />
  
       </Section>
    );
}