import  { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services,setServices]= useState([])
    ;
    useEffect( ()=>{
        fetch('https://potter-hub-server.onrender.com/arts')
        .then(res => res.json())
        .then(data =>setServices(data));

    }, [])
    return (
    <div className="mt-4">
            <div className='text-center'>
            <h1 className='text-3xl font-bold text-orangee-700'>Our Prestige</h1>
            <h2 className='text-6xl'>Our Arts Area</h2>
            <p className='align-center'>Every Piece hides a story beind it</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
           {
           services.map(service => <ServiceCard key={service._id} service={service} ></ServiceCard>)
           }


        </div>
    </div>
       
    );
};

export default Services;