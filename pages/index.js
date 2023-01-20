import React from 'react'
import BankChannels from '../components/BankChannels/BankChannels'
import Cards from '../components/BankCards/Cards'
import HelpCards from '../components/HelpCards/HelpCards'
import Navbar from '../components/Navbar/Navbar'
import Themes from '../components/Headers/Themes'
import Channels from '../components/YoutubeChannels/Channels'
import Header from '../components/Headers/Header'
import Downbar from '../components/Downbar/Downbar'
import Subjects from '../components/Subject/Subject'
import Line from '../components/Line/Line'
import RandomSaying from '../components/RandomSaying/RandomSaying'
import SocialMedia from '../components/SocialMedia/SocialMedia'
import Footer from '../components/Footer/Footer'
import 'firebase/database'
export default function Home() {
  return (
    <>
    <Navbar/>
    <Themes/>
    <Cards/>
    <BankChannels/>
    <Line/>
    <HelpCards/>

    </>
  )
}
/*    <div className='test'>
      <div className='blurs'></div>
      <p className='number'>6969</p>

    </div>*/