import React from "react";
import Section from "./Section";
import Line from "./Line";

export default function FontSection ({}) {

    return (
        
     <Section title='TYPOGRAPHY - FONT FAMILY' titleColor='white' bgColor='#89213C'>

        <div className=''>

        <div className='flex gap-3 justify-between items-center'>

            <div className='flex flex-col gap-3 text-left' style={{color:'white'}}>
            <span className='font-normal'>Work Sans - Regular</span>
            <span className='font-semibold'>Work Sans - Semibold</span>
            <span className='font-bold'>Work Sans - Bold</span>
            </div>

            <div className='text[300px]' style={{color:'white', fontSize: '300px'}}>Aa</div>
            
            <div className='flex flex-col gap-3 text-left' style={{color:'white'}}>
            <span className='font-normal'>ABCDEFGHIJKLMNOPQRSTUVWXYZr</span>
            <span className='font-normal'>abcdefghijklmnopqrstuvwxyz</span>
            <span className='font-normal'>01234567890 !”#$%&’()*+,-./</span>
            </div>

        </div>
        
        <div className='flex justify-between items-center'>

            <span className='typo_desc'>HEADING</span> 
            <Line width='148px' color='#fff' />
            <span className='typo_desc'>PARAGRAPH</span>
            <Line width='148px' color='#fff' />
            <span className='typo_desc'>BUTTON TEXT</span>


        </div>
        
        <div className='flex justify-center mt-[80px]'>
            <a style={{ padding: '15px', color: '#242424', backgroundColor: '#fff' }} target='_blank' href='https://fonts.google.com/specimen/Work+Sans'>DOWNLOAD FONT FAMILY</a>
        </div>

        </div>
        

    </Section>
    )
}