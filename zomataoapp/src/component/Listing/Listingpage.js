import React from "react";
import './Listing.css';
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Listingpage = (props) => {
  
    const Listmobile = ({mobileData}) => {
  
        if (mobileData) {
            return mobileData.map((item) => {
                return (
                    
                        <div class="col-md-4 mt-3">
                            <div class="card item">
                                <Link to={`/details?Id=${item.id}`}>
                                <img src={item.image} style={{ height:"200px",width:'140px'}}  alt="..." />
                                <div class="card-body">

                                    <h4 class="card-title">{item.product_name}</h4>
                                    <h6 class="card-subtitle mb-2">
                                        <div id="star">
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star" style={{color:'grey'}}></span>
                                            <span class="fa fa-star" style={{color:'grey'}}></span>
                                        </div>
                                    </h6>
                                    <span class="card-text text-secondary fs-5 fw-bold ">{item.Brand}</span><br/>
                                    <span className="text-success fs-4 fw-bold"> Rs.{item.price}</span><br/>
                                    <p className="flogo"><img src={item.logo} style={{ height:"25px",width:'100px'}}alt='fassured'/> </p>
                                </div>
                                </Link>
                            </div>
                        </div>
                
                )
            })
        }
    }
    return (

             
                <div class="main col-md-8">
                    <div class="container text-center mt-2">
                        <div class="row">
                            {Listmobile(props)}              
                        </div>
                    </div>
                </div>
            
        
    )
}

export default Listingpage