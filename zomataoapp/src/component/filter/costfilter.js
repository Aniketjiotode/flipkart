import React, { Component } from "react";
import axios from "axios";

const url = "http://localhost:2500/Alldata"

class costfilter extends Component {

    filtercost = (event) => {
         let TypeId = this.props.TypeId;
         let cost= event.target.value.split('-');
         let hcost = cost[1]
           console.log(hcost)
         let lcost = cost[0]
         console.log(lcost)
         let costurl;
         if(event.target.value==" "){
            costurl=`${url}?TypeId=${TypeId}`
            console.log(costurl)

         }else{
             costurl=`${url}?categoryId=${TypeId}&lprice=${lcost}&hprice=${hcost}`
             console.log(costurl)
             
         }
           axios.get(costurl)
           .then((res)=>{this.props.costperfilter(res.data)})

    }
    render() {
        return (
            <div class="cost" onChange={this.filtercost}>
            <h4>Price</h4>
            <ul>
                <li> <input type="radio" name="h" value=" "/>All</li>
                <li> <input type="radio" name="h" value="0-10000"/> less than 10000</li>
                <li> <input type="radio" name="h" value="10000-20000"/> 10000 to 20000</li>
                <li> <input type="radio" name="h" value="2000-30000"/> 20000 to 30000</li>
                <li> <input type="radio" name="h" value="30000-50000"/> 30000 to 50000</li>
                <li> <input type="radio" name="h" value="50000-100000"/> 50000 to 100000</li>
            </ul>
        </div>
        )
    }
}

 export default costfilter