import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { MdAccessTime } from "react-icons/md";
import Marquee from "react-fast-marquee";
import { FaRegStar } from "react-icons/fa";
import { AiTwotoneTag } from "react-icons/ai";

const BookService = () => {
    const servicec = useLoaderData();
    const  {_id,itemName, subcategoryName, shortDescription, price, rating, customization, processingTime, stockStatus, photoUrl, userName, userEmail} = servicec;
   
    const {user} = useContext(AuthContext);  
const handleBookService = event =>{
    event.preventDefault();
    const form = event.target;
    const userName = form.name.value;
    const date = form.date.value;
    const userEmail = user?.email;
    const order = {
        userName,
        userEmail ,
        photoUrl,
        date,
        service:itemName,
        service_id: _id,
        price:price
    }
    console.log(order);
    fetch('https://potter-hub-server.onrender.com/bookings', {
        method: 'POST', 
        headers: {
            'content-type': 'application/json'
        }, 
        body: JSON.stringify(order)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.insertedId){
            alert('service book successfully')
        }
    })

}
    


    return (
      
      <div>
               <h2 className='text-center text-3xl'>Book Service: {itemName} </h2>
            <form onSubmit={handleBookService} >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} name="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name="email" defaultValue={user?.userEmail}  placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due amount</span>
                        </label>
                        <input type="text" name="30" defaultValue={ price} className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary btn-block" type="submit" value="Order Confirm" />
                </div>
            </form>
            <div className="card-body">
           
            


    <div>
  

   {/* card */}
   
     <div className="bg-[#d7edd8] p-8 lg:p-24 w-[95%] mx-auto mt-2">
     <Marquee>
       <div className=" flex gap-10 items-center">
       <img src="https://newhome.qodeinteractive.com/wp-content/uploads/2023/03/client-7.png" alt="" />
       <img src="https://mobirise.com/extensions/personam4/assets/images/1.png" alt="" />
       <img src="https://newhome.qodeinteractive.com/wp-content/uploads/2023/03/client-2.png" alt="" />
       <img src="https://newhome.qodeinteractive.com/wp-content/uploads/2023/03/client-3.png" alt="" />
       
       <img src="https://newhome.qodeinteractive.com/wp-content/uploads/2023/03/client-4.png" alt="" />
       <img src="https://mobirise.com/extensions/personam4/assets/images/2.png" alt="" />
       <img src="https://mobirise.com/extensions/personam4/assets/images/5.png" alt="" />
       <img src="https://mobirise.com/extensions/personam4/assets/images/3.png" alt="" />
      
       <img src="https://newhome.qodeinteractive.com/wp-content/uploads/2023/03/client-6.png" alt="" />
       </div>
       </Marquee>
     </div>
   <div className="my-10">
     <div className="bg-gray-100 py-8">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="flex flex-col md:flex-row -mx-4">
           <div className="md:flex-1 px-4">
             <div className="h-[460px] rounded-lg  mb-4">
               <img 
                 className="w-full h-full object-cover rounded-md"
                 src={photoUrl}
                 alt="Product Image"
               />
             </div>
           </div>
           <div className="md:flex-1 px-4">
             <h2  className="text-4xl lg:mt-6 font-bold mb-2">
              {itemName}
             </h2>
             <h3  className="flex items-center text-lg font-bold gap-2 text-[#13e5c0]"><AiTwotoneTag className="fill-[#13e5c0]"></AiTwotoneTag>{subcategoryName}</h3>
             <hr className="my-4"/>
             <p  className=" mb-4">
               {shortDescription}
             </p>
             <hr className="my-4"/>
             <div  className="flex mb-4">
               <div  className="mr-4">
                 <span className="font-bold mr-1 ">
                   Price:
                 </span>
                 <span className="text-[#fb8053] font-bold">
                 {price}
                 </span>
               </div>
               <div >
                 <span className="font-bold mr-1 ">
                   Customization:
                 </span>
                 <span className="text-[#fb8053] font-bold ">
                   {customization}
                 </span>
               </div>
             </div>
             <div className="flex gap-4 mt-4">
             <h3  className="flex items-center text-lg gap-1"><FaRegStar className="text-purple-400"></FaRegStar>{rating}</h3>
             <h4  className=" flex items-center text-lg gap-1"><MdAccessTime className="text-purple-400"></MdAccessTime>{processingTime}</h4>
         </div>
         <hr className="my-4"/>
              <div >
                 <span className="font-bold mr-1 ">
                   Stock Status :
                 </span>
                 <span className="text-[#fb8053] font-bold ">
                   {stockStatus}
                 </span>
               </div>
               <h3 className=" mt-4">User Name : <span className="font-bold">{userName}</span></h3>
               <h3 className=" mt-4">User Email: <span className="font-bold">{userEmail}</span></h3>
           </div>
         </div>
       </div>
     </div>
   </div>

            </div>
        </div>
        </div>
    );
}

export default BookService;