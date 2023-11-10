import React from "react";

export default function Section ({ children, title=false, titleColor='black', bgColor="white", className="px-[135px] py-[85px]" }) {


    return (
        <section className={`${className} bg-[${bgColor}]`} style={{backgroundColor: bgColor}}>

            { title && <div className={`section-title`} style={{color: titleColor}}>{title}</div> } 

            { children }

        </section>
    );

}