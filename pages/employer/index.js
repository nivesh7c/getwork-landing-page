import React from 'react'
import { makeStyles } from '@material-ui/styles';
import Head from 'next/head'
import Banner from '../../components/Employer/Banner'
import {Hidden} from "@material-ui/core";
import UserSection from '../../components/Student/UserSection'
import Footer from '../../components/Student/Footer'
import BlogSlider from '../../components/Student/BlogSection/BlogSlider'
import UserSlider from '../../components/Student/UserSection/UserSlider'
import BannerCards from '../../components/Employer/BannerCards';
import Pay from '../../components/Employer/Pay';
import Laptop from '../../components/Employer/Laptop';
import ProvideBg from '../../components/Employer/Provide/ProvideBg';
import StepBg from '../../components/Employer/Step/StepBg';
import CompanyImageBg from '../../components/Common/CompanyImage/CompanyImageBg';
import FormBg from "../../components/Employer/Form/FormBg"
import Video from '../../components/Employer/Video';
import CategoryBg from '../../components/Employer/CategoryBg.js/CategoryBg';
import CollegeImageBg from '../../components/Common/CollegeImage/CollegeImageBg';

const useStyles = makeStyles((theme) => ({
 section:{
   backgroundColor:"#ffff",
   paddingBottom:"20px"
 }
}));

function index() {
  const classes = useStyles();

    return (
       <>
        <Head>
        <title>GetWork</title>
        <link rel="icon" href="/img/getwork-logo.png"/>
        <meta name="Students" content="Development " />
        </Head>
       <Banner/>
       <BannerCards/>
       <ProvideBg/>
       <StepBg/>
       <Video/>
       <Laptop/>
       <CompanyImageBg/>
       <CategoryBg/>
       <CollegeImageBg/> 
       <div className={classes.section} >
       <Hidden smUp>
       <UserSlider/>
       </Hidden>
       <Hidden smDown>
       <UserSection/>
       </Hidden> 
       </div>
       <Pay/>
       <FormBg/>
       <div className={classes.section} >
       <BlogSlider/>
      </div>
     <Footer/>
       </>
    )
}

export default index
