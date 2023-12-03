import React from "react";

export function Mockup4({ images=[]}) {

    return (
  

        <div className={`grid gap-1 grid-cols-1 md:grid-cols-4 mt-2`}>

        {
            images.map( (img, I) => (

                <div key={I} className={``}>

                    <img src={img} className={`mockup`} />

                </div>

            ))
        }

        </div>
    );
}

export function Mockup3({ images=[]}) {

    return (
  

        <div className={`grid gap-1 grid-cols-1 md:grid-cols-3 mt-2`}>

        {
            images.map( (img, I) => (

                <div key={I} className={``}>

                    <img src={img} className={`mockup`} />

                </div>

            ))
        }

        </div>
    );
}