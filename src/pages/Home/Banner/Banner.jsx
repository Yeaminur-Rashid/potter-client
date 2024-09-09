
import Potter1 from '../../../assets/images/potter1.jpg'
import Potter2 from '../../../assets/images/potter2.jpg'
import Potter3 from '../../../assets/images/potter3.jpg'
import Potter4 from '../../../assets/images/potter4.jpg'

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[600px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src={Potter1}
      className="w-full rounded-xl" />
    <div className="absolute  flex items-center rounded-xl  h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,00)] bottom-0">
      
      <div className='text-white font-bold space-y-7 w-1/2 pl-12'>
        <h2 className="text-6xl text-white ">Embrace the Art of Pottery</h2>
       
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Dolores <br />consequuntur consectetur sapiente nobis amet blanditiis est inventore asperiores hic alias?</p>
        <div>
        <button className="btn mr-5 btn-error">Secondary</button>
        <button className="btn btn-outline btn-warning">Primary</button>
        </div>
      </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
  <img
      src={Potter2}
      className="w-full rounded-xl" />
    <div className="absolute  flex items-center rounded-xl  h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,00)] bottom-0">
      
      <div className='text-white font-bold space-y-7 w-1/2 pl-12'>
        <h2 className="text-6xl ">Affordable Price for Car Servicing</h2>
       
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Dolores <br />consequuntur consectetur sapiente nobis amet blanditiis est inventore asperiores hic alias?</p>
        <div>
        <button className="btn mr-5 btn-error">Secondary</button>
        <button className="btn btn-outline btn-warning">Primary</button>
        </div>
      </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
  <img
      src={Potter3}
      className="w-full rounded-xl" />
    <div className="absolute  flex items-center rounded-xl  h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,00)] bottom-0">
      
      <div className='text-white font-bold space-y-7 w-1/2 pl-12'>
        <h2 className="text-6xl ">Affordable Price for Artistic Potter</h2>
       
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Dolores <br />consequuntur consectetur sapiente nobis amet blanditiis est inventore asperiores hic alias?</p>
        <div>
          <button className="btn mr-5 btn-error">Secondary</button>
          <button className="btn btn-outline btn-warning">Primary</button>
       
  
        </div>
      </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
  <img
      src={Potter4}
      className="w-full rounded-xl" />
    <div className="absolute  flex items-center rounded-xl  h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,00)] bottom-0">
      
      <div className='text-white font-bold space-y-7 w-1/2 pl-12'>
        <h2 className="text-6xl ">Affordable Price for Car Servicing</h2>
       
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Dolores <br />consequuntur consectetur sapiente nobis amet blanditiis est inventore asperiores hic alias?</p>
        <div>
        <button className="btn mr-5 btn-error">Secondary</button>
        <button className="btn btn-outline btn-warning">Primary</button>
        </div>
      </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;