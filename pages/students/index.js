import React from 'react'
import Head from 'next/head'
import Banner from '../../components/Student/Banner'
import SearchSection from '../../components/Student/SearchSection'
import {Hidden} from "@material-ui/core";
import UserSection from '../../components/Student/UserSection'
import Mockup from '../../components/Student/Mockup'
import MockUpBanner from '../../components/Student/Banner/MockUpBanner'
import CompanyBg from '../../components/Student/Banner/CompanyBg'
import Locationbg from '../../components/Student/Banner/Locationbg'
import Jobbg from '../../components/Student/Banner/Jobbg'
import Footer from '../../components/Student/Footer'
import SecondBg from '../../components/Student/Banner/SecondBg'
import BlogSlider from '../../components/Student/BlogSection/BlogSlider'
import UserSlider from '../../components/Student/UserSection/UserSlider'
import MobileMockup from '../../components/Student/Mockup/MobileMockup'
import Categoriesbg from '../../components/Student/Banner/Categoriesbg'

function index() {

    return (
       <>
        <Head>
        <title>GetWork</title>
        <link rel="icon" href="/img/getwork-logo.png"/>
        <meta name="Students" content="Development " />
        </Head>
       <Banner/>
       <SearchSection/>
       <SecondBg/>
       <CompanyBg/>
       <Locationbg/>
       <Categoriesbg/>
       <Hidden smDown>
       <MockUpBanner/>
       <Mockup/>
       </Hidden>
       <Hidden smUp>
       <MobileMockup/>
       </Hidden>
       <Jobbg/>
       <Hidden smUp>
       <UserSlider/>
       </Hidden>
       <Hidden smDown>
       <UserSection/>
       </Hidden>
       <BlogSlider/>
       <Footer/>
       </>
    )
}

export default index
