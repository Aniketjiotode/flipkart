import React, { Component } from "react";
import  Cart from "./Cart.js";

let url = 'http://localhost:2500/placeorder'

class placeorder extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: Math.floor(Math.random() * 10000),
            product_name: this.props.match.params.restName,
            name: 'nippun',
            email: 'nippun2gmail.com',
            cost: 0,
            phone: 9845761645,
            address: 'ad25 ngp 1'
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    checkout = (event) => {

    }

    render() {
        return (
            <>
                <div className="container">
                    <div className="card">
                        <div className="card-header bg-primary text-white">
                            <h3>{this.state.product_name}placeholder</h3>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <input type="hidden" name="cost" vlaue={this.state.cost} />
                                <input type="hidden" name="id" vlaue={this.state.id} />
                                <input type="hidden" name="product_name" vlaue={this.state.product_name} />
                                <div className="form-group col-md-6">
                                    <label for="fname" className="control-label">firstname</label>
                                    <input className="form-control" name="name" value={this.state.name}
                                        onChange={this.handleChange} />
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="email" className="control-label">Email</label>
                                    <input className="form-control" name="email" value={this.state.email}
                                        onChange={this.handleChange} />
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="phone" className="control-label">phone</label>
                                    <input className="form-control" name="phone" value={this.state.phone}
                                        onChange={this.handleChange} />
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="address" className="control-label">address</label>
                                    <input className="form-control" name="address" value={this.state.address}
                                        onChange={this.handleChange} />
                                </div>
                            </div>
                            <div>
                           <Cart/>
                                
                            </div>
                             <hr/>
                                <div className="row">
                                    <div className="col-md-12">
                                        <h2>Total Price is Rs.</h2>
                                    </div>
                                </div>
                                <button className=" btn-success" onClick={this.checkout}>
                                    placeOrder
                                </button>
                            </div>
                        </div>
                    </div>

                </>
                )
    }
    // componentDidMount(){
                    //   let productId = sessionStorage.getItem('productId')  
                    //   let orderId =[];
                    //   productId.split(',').map((item)=>{
                    //     orderId.push(parseInt(item))
                    //     return 'ok'
                    //   })
                    //   fetch(url,{
                    //      method:'POST',
                    //      headers:{
                    //         'accept':'application/json',
                    //         'content-type':'application/json'
                    //      },
                    //      body:JSON.stringify(orderId)
                    //   })
                    //   .then((res)=>res.json())
                    //   .then((data)=>{
                    //      console.log(data)
                    //   })
                    // }
                }

                export default placeorder