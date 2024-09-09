import { Link } from "react-router-dom";


const ServiceCard = ( {service} ) => {
    const {_id,itemName,photoUrl,price } = service;
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={photoUrl}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{itemName}</h2>
    <p>Price :  {price}</p>
    <div className="card-actions">
      <Link to={`/books/${_id}`} >
      <button className="btn btn-primary">Book Now</button>
      </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default ServiceCard;