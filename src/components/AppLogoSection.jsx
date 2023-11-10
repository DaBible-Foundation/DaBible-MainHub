import React from "react";
import Section from "./Section";
import Theme from "./Theme";

export default function AppLogoSection ({  }) {

    return (
        <Section title='APPLICATION LOGO' titleColor='#89213C' bgColor='white'>
  
          <div className='flex gap-x-3 gap-y-4 flex-wrap justify-center mt-[80px]'>
  
            <div className='flex flex-col justify-between' style={{ rowGap: '40px' }}>
  
              <Theme isLight={ true } title={'LIGHT THEME'} />
              <Theme isLight={ false } title={'DARK  THEME'} />
  
            </div>
  
          </div>
  
       </Section>
    );
}