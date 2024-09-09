

import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from '../Services/Services';
import AboutUs from '../AboutUs/AboutUs';
// import { useEffect, useState } from 'react';

const Home = () => {
    // const [crafts, setCrafts] = useState(null)
    // // console.log(crafts);
    // useEffect(()=>{
    //     fetch('https://potter-hub-server.onrender.com')
    //     .then(res=>res.json())
    //     .then(data=>setCrafts(data))
    // },[])


    // if(!crafts){
    //        return (
    //         <div className="text-center z-10 ">
    //            <span className="loading loading-spinner loading-lg text-error mt-24"></span>
    //         </div>
    //     );
    // }
    return (
        <div>
            <Banner></Banner>
           
           <AboutUs></AboutUs>
            <Services></Services>
            
                  </div>
    );
};

export default Home;