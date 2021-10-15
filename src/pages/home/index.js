import * as React from 'react'
import Banner from '../../components/banner'
import Features from '../../components/features'
import Tags from '../../components/tags'
import Partners from '../../components/partners'
import Contact from '../../components/contact'
const Home = () =>{
        return (
            <React.Fragment>
            <Banner/>
            <Tags />
            <Features />
            <Partners />
            <Contact />
            </React.Fragment>
        )
    }

export default Home;