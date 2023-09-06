import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";
import { Button } from "../styles/Button";


const Product2 = (curElem) => {
    const { id, name, image, price, description } = curElem;
    return (
                    <div className="card grid grid-two-column">
                      <figure>
                        <img src={image} alt={name} />
                      </figure>
        
                      <div className="card-data">
                        <h3>{name}</h3>
                        <p>
                          <FormatPrice price={price} />
                        </p>
                        <p>{description.slice(0, 90)}...</p>
        
                        <NavLink to={`/singleproduct/${id}`} className="btn-main">
                          <Button className="btn">Read More</Button>
                        </NavLink>
                      </div>
                    </div>
                  );
  };
  
  export default Product2;