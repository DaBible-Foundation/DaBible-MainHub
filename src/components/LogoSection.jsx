import React from "react";
import Section from "./Section";
import { DarkRectangleLogo, WhiteRectangleLogo } from "./Logo";

export default function LogoSection ({}) {

    return (
        <Section className='py-[85px] px-[50px]' title='LOGO - DABIBLE' titleColor='#89213C' bgColor='white'>

            <div className='flex gap-x-3 gap-y-4 flex-wrap justify-between mt-[80px]'>

                <div className='flex flex-col gap-3 items-center'>
                
                    <WhiteRectangleLogo img={'/images/old_logo_white.png'} isDownloadable={false} />
                    <DarkRectangleLogo img={'/images/old_logo_black.png'} isDownloadable={false} />

                    {/* <div className="flex flex-col gap">
                        <span className="old_logo">OLD LOGO</span>
                        <small>DO NOT USE</small>
                    </div> */}

                    

                </div>

                <div className='flex flex-col gap-3'>
                
                    <WhiteRectangleLogo img={'/images/logo_white_rec.png'} imgClass='max-w-[200px]' />
                    <WhiteRectangleLogo img={'/images/logo_white_sq.png'} imgClass='max-w-[200px]' />

                </div>

                <div className='flex flex-col gap-3'>
                
                    <DarkRectangleLogo img={'/images/logo_black_rec.png'} imgClass='max-w-[200px]' />
                    <DarkRectangleLogo img={'/images/logo_black_sq.png'} imgClass='max-w-[200px]' />

                </div>


            </div>
        

     </Section>
    )
}