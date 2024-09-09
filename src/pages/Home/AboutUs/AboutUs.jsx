import expert1 from '.././../../assets/images/exception.jpg'
import parts from '../../../assets/images/potter5.jpg'

const AboutUs = () => {
    return (
        <div className="hero bg-base-200 min-h-screen text-white">
        <div className="hero-content flex-col lg:flex-row">
        <div className='lg:w-1/2 relative'>
        <img
            src={expert1}
            className="w-3/4 rounded-lg shadow-2xl border-8 border-white " />
        <img
            src={parts}
            className="w-1/2 absolute right-5 top-3/4 border-8 border-white rounded-lg shadow-2xl " />
        </div>
          <div className='w-1/2'>
             <h3 className='text-3xl text-pink-300 font-bold'>Who We Are</h3>
            <h1 className="text-5xl font-bold">We are qualified of experienced Work</h1>
            <p className="py-6">
            At <span className='text-pink-300 font-bold'>Pottered</span>, we believe in the transformative power of pottery to connect people with creativity and tradition. Our journey began with a passion for working with clay, turning simple earth into beautiful, functional art that enhances everyday life. We are a community-focused studio dedicated to sharing the joy of pottery with both beginners and seasoned artists alike.
            </p>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ratione aspernatur ad, magnam deleniti excepturi facilis amet cum laboriosam laborum?
            </p>
            <button className="btn btn-error">Get More Info</button>
          </div>
        </div>
      </div>
    );
};

export default AboutUs;
