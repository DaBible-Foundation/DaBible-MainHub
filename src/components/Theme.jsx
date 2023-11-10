import React from "react";
import Line from "./Line";
import { DarkLogo, WhiteLogo } from "./Logo";

export default function Theme ({ isLight = true, title }) {

    const images = isLight ? ['/images/yoruba_white.png', '/images/pidgin_white.png', '/images/hausa_white.png'] : ['/images/yoruba_black.png', '/images/pidgin_black.png', '/images/hausa_black.png']

    return (
        <div className='flex flex-wrap gap-2 justify-between items-center'>

              <div className='theme-title'>{title}</div>

              <Line />

              <div className='flex flex-wrap gap-2'>

                {
                  images.map((img, i) => isLight ? <WhiteLogo key={i} img={img} /> : <DarkLogo key={i} img={img} /> )
                }

              </div>

        </div>
    );
}