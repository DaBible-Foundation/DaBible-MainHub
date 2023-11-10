import React from 'react'
import './App.css'
import Section from './components/Section'


import big_logo from "./assets/images/big_logo.png";
import AppLogoSection from './components/AppLogoSection'
import LogoSection from './components/LogoSection'
import FontSection from './components/FontSection'
import ColorSection from './components/ColorSection';

import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <>
    <Toaster position="bottom-center" />
    <Section className="flex justify-center items-center h-[500px] bg-[url('/bg_logo.png')] bg-no-repeat bg-center bg-contain">

      <img src={big_logo} width={630} height={180} />

    </Section>

    <ColorSection />


     <FontSection />

     <LogoSection />

     <AppLogoSection />

    </>
  )
}

export default App
