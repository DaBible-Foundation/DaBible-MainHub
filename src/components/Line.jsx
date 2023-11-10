import React from "react";

export default function Line ({ width="241px", color="#000" }) {

    
    return (
        <div 
            style={{
                width: width,
                height: '1px', 
                background: color 
            }}
        >

        </div>
    )
}