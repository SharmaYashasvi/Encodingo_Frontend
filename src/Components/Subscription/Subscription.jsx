import React,{useState} from 'react'
import Header from '../Header'
import Footer from '../Footer';
import StateSection from '../StateSection/StateSection';
import SubscriptionPlan from '../SubscriptionPlan/SubscriptionPlan';

const Subscription = () => {
    
  return (<>
  
    <Header/>
    <SubscriptionPlan/>
    <StateSection/>
    <Footer/>
    </>
  )
}

export default Subscription