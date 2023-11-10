import React from "react";
import ColorPalette from "./ColorPalette";
import Section from "./Section";

export default function ColorSection ({}){

    const colors = ['#89213C', '#BD2F54', '#242424', '#FFFFFF', '#E9E9E9', '#FFE4EB'];
    
    return (
        

     <Section title='BRAND COLOR PALETTE' titleColor='black'>

        <div className='flex gap-x-3 gap-y-4 flex-wrap justify-center mt-[80px]'>

        {
            colors.map(c => <ColorPalette key={c} bgColor={c} />)
        }

        </div>
        

    </Section>
    );
}