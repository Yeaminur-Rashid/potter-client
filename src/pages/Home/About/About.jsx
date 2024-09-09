import  { useEffect, useState } from 'react';
import AboutCard from './AboutCard';

const About = () => {
    const [servicess,setServicess]= useState([])
    ;
    useEffect( ()=>{
        fetch('https://potter-hub-server.onrender.com/alldata')
        .then(res => res.json())
        .then(data =>setServicess(data));

    }, [])
    return (
    <div className="mt-4">
            <div className='text-center'>
                <h1 className='text-7xl text-center font-bold mb-4'>About Us</h1>
            <h2 className="text-2xl font-bold">Welcome to <span className="font-bold text-pink-300">Pottered</span>, where creativity meets clay! We are a passionate team of potters dedicated to creating beautiful, functional, and unique ceramic pieces that bring warmth and personality to your home.

Our Story
Founded in 2024, <span className="font-bold text-pink-300">Pottered</span> began as a humble studio where our love for pottery blossomed into a vibrant community of artisans and enthusiasts. What started as a simple hobby has grown into a full-fledged pottery studio that brings together traditional techniques and modern designs. Our journey is shaped by a commitment to quality craftsmanship, artistic expression, and sustainability.

Our Craft
Every piece we create is handcrafted with care, attention to detail, and a touch of individuality. From elegant dinnerware to one-of-a-kind decorative pieces, our pottery is made to be cherished and enjoyed for years to come. We source our clay and glazes responsibly, ensuring that every item is as environmentally friendly as it is beautiful.

Our Mission
At <span className="font-bold text-pink-300">Pottered</span>, we believe that pottery is more than just art — it's an experience. Our mission is to inspire creativity, foster a love for handmade artistry, and bring people together through the shared joy of making and appreciating ceramics.

Join Us
We invite you to explore our collection, take a pottery class, or simply drop by for a chat and a cup of tea. Whether you’re a seasoned potter or a curious beginner, there’s always a place for you in our studio.

Thank you for being a part of our journey. We can’t wait to share our passion for pottery with you!

Feel free to adjust this based on your specific studio’s story, offerings, and values. Adding personal touches, such as your inspiration for starting the studio or your unique techniques, will make it more authentic and engaging.










</h2>
            <h1 className='text-3xl font-bold text-orangee-700 mt-4'>Our Prestige</h1>
            <h2 className='text-6xl'>Our Arts Area</h2>
            <p className='align-center text-3xl text-pink-300 font-bold'>Every Piece hides a story beind it</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
           {
           servicess.map(servicec => <AboutCard key={servicec._id} servicec={servicec} ></AboutCard>)
           }


        </div>
    </div>
       
    );
};

export default About;