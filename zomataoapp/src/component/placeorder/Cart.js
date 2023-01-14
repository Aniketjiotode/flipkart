import React from "react";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../cartcontext";

const Iurl = "http://localhost:2500/cartitem"
const Cart = () => {

    const [sproduct, setsproduct] = useState([])
    const { cart } = useContext(CartContext);

    useEffect(() => {
        if (!cart.items) {
            return;
        }

        //     fetch(`${Iurl}`,{  
        //         method:'POST',
        //         headers:{"accept":'application/json',"content-Type":'application/json'},
        //         body:JSON.stringify(Object.keys(cart.items))
        //     }).then((res) => {res.json()})
        //       .then((data) =>{console.log(data)})
        //
        fetch(`${Iurl}`, {
            method: "post",
            headers: { "accept": 'application/json', "content-Type": "application/json" },
            body: JSON.stringify(Object.keys(cart.items))
        }).then((res) => res.json())
            .then((data) => console.log(data))
    }, [cart])
    return (

        <div className=" mx-auto">
            <h1 className="my-2 fs-4  ">cart items</h1>
            <ul>
                <li className="mb-2">
                    <div className="d-flex justify-content-between">
                        <div>
                            <img className="h-50 w-50 border border-2" src="#" alt="item" />
                            <span className="ms-4 fs-5">itemname</span>
                        </div>
                        <div>
                            <button className="bg-primary me-2">-</button>
                            <b>2</b>
                            <button className="bg-primary ms-2">+</button>
                        </div>
                        <span>Rs.5000</span>
                        <button className="bg-danger">Delete</button>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Cart  