import React, { Component } from "react";
import axios from "axios";

const url = "http://localhost:2500/Alldata"

class ratingfilter extends Component {

    Ratingfilter = (event) => {
         let TypeId = this.props.TypeId;
         console.log(TypeId)
         let starrating= event.target.value;
         console.log(starrating)
         let starurl;
         if(starrating==" "){
            starurl=`${url}?TypeId=${TypeId}`
            console.log(starurl)
         }else{
             starurl=`${url}?ratingId=${TypeId}&starrating=${starrating}`
             console.log(starurl)
         }
           axios.get(starurl)
           .then((res)=>{this.props.starperrating(res.data)})

    }
    render() {
        return (
            <div class="cuisine" onChange={this.Ratingfilter}>
                <h4>Rating</h4>
                <ul>
                    <li> <input type="radio" name="star"   value=" "/> All</li>
                    <li> <input type="radio" name="star"   value="5"/> 5 star</li>
                    <li> <input type="radio" name="star" value="4.5"/> 4.5 star</li>
                    <li> <input type="radio"  name="star" value="4"/> 4 star</li>
                    <li> <input type="radio" name="star"  value="3.5"/> 3.5 star</li>
                    <li> <input type="radio" name="star" value="3"/> 3 star</li>
                </ul>
            </div>
        )
    }
}

 export default ratingfilter