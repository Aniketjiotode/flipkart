import React, { useState, useEffect, useContext } from "react";
import Axios from "axios"
import './detailspage.css'
import { Link } from "react-router-dom";
import { CartContext } from "../../cartcontext";

const url = "http://localhost:2500/Alldata?Id="


// className Details extends Component {

//     constructor(props) {
//         super(props)

//         this.state = {

//             details: " ",
//             useritem: " ",

//         }


//     }
// addtocart=()=>{
//     let productSId = this.props.location.search.split('=')[1] 
//     sessionStorage.setItem('productId', productSId);
//     let prodId=sessionStorage.getItem("productId") 
//     this.setState({useritem:prodId})
//     let items=this.state.useritem
//     console.log(items)
// }

const Details = (props) => {
    const [Add,setAdd]=useState(false)
    const { cart ,setCart } = useContext(CartContext)
    const [Details, setdetails] = useState([]);

    useEffect(() => {
        let productId = props.location.search.split('=')[1]
        fetch(`${url}${productId}`, { method: 'GET' })
            .then((res) => res.json())
            .then((res) => {
                setdetails(res[0])
            })


    },[])


    const  addToCart = () => {
    
        let _cart = { ...cart };
        if (!_cart.items) {
            _cart.items = {}

        }
        if (_cart.items[Details.id]) {
            _cart.items[Details.id] += 1;

        } else {
            _cart.items[Details.id] = 1;

        }
        if(! _cart.totalItems){
            _cart.totalItems=0
        }
        _cart.totalItems += 1;
        setCart(_cart);
        setAdd(true)
        setTimeout(()=>{
            setAdd(false)
        },1000)

         
    }

    return (


        <div className="container-fluid detail mt-5">
            <div className="row">
                <div className="col-sm-5 text-center">
                    <div className="text-center mt-4">
                        <img src={Details.image} className="img-thumbnail" alt="" />
                        <div class="row buttons d-flex justify-content-center mt-3">
                            <button className={`${Add ?'col-sm-4 me-3 bttn1 bg-success':'col-sm-4 me-3 bttn1'}`} disabled={Add} onClick={() =>{ addToCart()} } ><i className="bi bi-cart-fill"></i>&nbsp;{`${Add? "ADDED":"ADD TO CART"}`}</button>
                            <button className=" col-sm-4 me-3 bttn2" ><i className="fa fa-bolt" style={{ fontsize: '1.2em' }}></i> BUY NOW</button>
                        </div>

                    </div>
                </div>

                <div className="col-sm-7 desc">

                    <div>


                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
                            <li className="breadcrumb-item"><a href="#">Library</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Data</li>
                        </ol>


                        <h3>
                            {Details.product_name}
                        </h3>

                        <div className="row">
                            <div className="col-sm-2">
                                <span className="badge bg-success"> {Details.rating} &nbsp; <i className="bi bi-star-fill"></i></span>
                            </div>

                            <div className="col-sm-5">
                                <strong>2,421 Ratings & Reviews</strong>
                            </div>

                        </div>

                        <div>
                            <h3>Rs  {Details.price}</h3>
                        </div>

                        <div>

                            <h5><i className="bi bi-calendar3" style={{ color: 'green' }}></i><strong> NO cost EMIs </strong> available <a href="">View Plans <i className="fa fa-chevron-right"></i></a></h5>

                            <h5><i className="bi bi-tag-fill" style={{ color: 'green' }}></i><strong> Bank Offer</strong> 5% Instant Discount on Visa Cards for First 3 Online Payments. <a href="">T&C</a></h5>

                            <h5><i className="bi bi-tag-fill" style={{ color: 'green' }}></i><strong> Bank Offer</strong> Extra 5% off* with Axis Bank Buzz Credit Card. <a href="">T&C</a></h5>

                        </div>

                        <br />
                        <div id="highlights">
                            <strong className="col-xs-3">Description</strong>
                            <p>{Details.description}</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

//     async componentDidMount() {
//         const {cart}=useContext(CartContext)
//         let productId = this.props.location.search.split('=')[1]
//         let response = await Axios.get(`${url}${productId}`, { method: 'GET' })
//         this.setState({ details: response.data[0] })
//     }
// }

export default Details