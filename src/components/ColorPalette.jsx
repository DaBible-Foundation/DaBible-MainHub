import React from "react";
import toast from 'react-hot-toast';

export default function ColorPalette ({ bgColor="#89213C", name=false }) {

    name = bgColor == "#BD2F54" ? "GRADIENT" : false;

    function copyColorCode (e) {
        navigator.clipboard.writeText(bgColor);
        toast('Copied to clipboard!')
    }

    return (
        <div className="flex flex-col gap-2">

            <div 
                onClick={copyColorCode}
                className={`h-[235px] w-[235px] cursor-pointer relative`}
                style={{backgroundColor: bgColor, borderRadius: '100px 0px 0px 0px', border: `2px solid #E2E2E2`}}
            >

                
                {

                    name && (

                        <div className="absolute w-full h-full z-2 top-0 left-0 flex justify-center items-center" style={{backgroundColor: 'transparent'}}>

                            <span className="gradient text-center">{name}</span>
                            
                        </div>

                    )

                }

               

            </div>
            
            <span className="text-black text-[28px] font-black leading-normal text-right">{bgColor}</span>

        </div>
        

    );
}