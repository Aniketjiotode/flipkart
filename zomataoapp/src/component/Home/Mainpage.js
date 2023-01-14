import React from "react";
import './Mainpage.css'
import { Link } from "react-router-dom"

const Mainpage = () => {
    return (
        
        <div className="mainpage">
            {/* // category   */}
            <div class="icon">
                
               <Link to={`/mobile`}>
                <div class="icon1" >
                    <div class="icontext">Mobiles</div> <img src="https://i.ibb.co/tPh1n72/mobile.png" alt="mobile" border="0" />
                </div>
                </Link>

                   <Link to='/fashion'>
                <div class="icon1">
                    <div class="icontext">Fashion</div> <img src="https://i.ibb.co/bPg0QVb/fashion.png" alt="fashion" border="0" />
                </div>
                </Link>
                 
                 <Link to='/Electronic'>
                <div class="icon1">
                    <div class="icontext">Electronic</div> <img src="https://i.ibb.co/6NB7HhR/ELectronic.png" alt="ELectronic" border="0" />
                </div>
                </Link>
                 
                 <Link to='/beauty'>
                <div class="icon1">
                    <div class="icontext">Beauty</div> <img src="https://i.ibb.co/dksRgmT/beauty.png" alt="beauty" border="0" />
                </div>
                  </Link>

                <div class="icon1">
                    <div class="icontext">Large</div> <img src="https://i.ibb.co/KDPKQFM/large.png" alt="large" border="0" />
                </div>


                <div class="icon1">
                    <div class="icontext">Furtinure</div> <img src="https://i.ibb.co/XY0nhm8/furtinure.png" alt="furtinure" border="0" />
                </div>


                <div class="icon1">
                    <div class="icontext">Grocery</div> <img src="https://i.ibb.co/Th51SV6/grocery.png" alt="grocery" border="0" />
                </div>


                <div class="icon1">
                    <div class="icontext">Home</div> <img src="https://i.ibb.co/Gv1L01W/home.png" alt="home" border="0" />
                </div>

            </div>

            {/*advertisement carousel */}
            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="2000">
                        <img src="https://i.postimg.cc/wMRHCr24/p1.webp" alt="p1" border="0" class="d-block w-100" />
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src="https://i.postimg.cc/C1j9bVvg/p2.webp" alt="p2" border="0" class="d-block w-100" />
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src="https://i.postimg.cc/v8hNyhk3/p3.webp" alt="p3" border="0" class="d-block w-100" />
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src="https://i.postimg.cc/T2tCFw5s/p4.webp" alt="p4" border="0" class="d-block w-100" />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            {/* Bank name */}
            <div class="bank">
            </div>
            {/* deals */}
            <div class="deals mt-3 mb-3">
            <div class=" d-flex justify-content-between">
                <h3 class="m-2"> Deals of the day</h3>
                <div class="me-5">
                <button type="button" class="btn btn-outline-primary fw-bold">View all</button>
                </div>
            </div>
            <hr/>
            <div class=" d-flex justify-content-center">
                <div class="card me-4" style={{width:"14rem",border:"none"}}>
                    <a href="" style={{textdecoration:"none",color:"black"}}>
                        <img src="https://i.ibb.co/crZM7kK/laptop-collection.webp"  class="card-img-top" style={{height:"150px"}}/>
                        <div class="card-body text-center">
                            <p class="card-text"  style={{fontsize:"18px"}}><strong>HP, dell and more</strong> <br/>
                                <span class="card-text"  style={{color:'green'}}> under ₹ 49,999</span>
                                <br/><span class="card-text">Laptops & more</span>
                            </p>
                        </div>
                    </a>
                </div>
                <div class="card me-4" style={{width:"14rem",border:"none"}}>
                    <a href="" style={{textdecoration:"none",color:"black"}}>
                        <img src="https://i.ibb.co/WkhpPWs/bag.webp" alt="bag" border="0" class="card-img-top"
                            style={{height:"150px",width:"120px",position:'relative',left:"50px"}}/>
                        <div class="card-body text-center">
                            <p class="card-text"  style={{fontsize:"18px"}}><strong>safari,skybag and more</strong>
                                <br/>
                                <span class="card-text"  style={{color:'green'}}> under ₹ 999</span>
                                <br/><span class="card-text">Bags, luggages & more</span>
                            </p>
                        </div>
                    </a>
                </div>
                <div class="card me-4" style={{width:"14rem",border:"none"}}>
                    <a href="" style={{textdecoration:"none",color:"black"}}>
                        <img src="https://i.ibb.co/W5L9B0m/headphone.webp" alt="headphone" border="0" alt="bag" border="0" class="card-img-top"
                             style={{height:"150px",width:"150px",position:'relative',left:"50px"}}/>
                        <div class="card-body text-center">
                            <p class="card-text"  style={{fontsize:"18px"}}><strong>boat,JBL and more</strong> <br/>
                                <span class="card-text"  style={{color:'green'}}> under ₹1,999</span>
                                <br/><span class="card-text"> Headphones, earpods & more</span>
                            </p>
                        </div>
                    </a>
                </div>
                <div class="card me-4" style={{width:"14rem",border:"none"}}>
                    <a href="" style={{textdecoration:"none",color:"black"}}>
                        <img src="https://i.ibb.co/3zyff2C/mobile.webp" alt="mobile" border="0" class="card-img-top"
                            style={{height:"160px",width:"90px",position:'relative',left:"60px"}}/>
                        <div class="card-body text-center">
                            <p class="card-text"  style={{fontsize:"18px"}}><strong> realme ,poco and more</strong>
                                <br/>
                                <span class="card-text"  style={{color:'green'}}> under ₹9,999</span>
                                <br/><span class="card-text"> mobiles & more</span>
                            </p>
                        </div>
                    </a>
                </div>
                <div class="card me-4" style={{width:"14rem",border:"none"}}>
                    <a href="" style={{textdecoration:"none",color:"black"}}>
                        <img src="https://i.ibb.co/mGZqVGm/watch.webp" alt="watch" border="0" class="card-img-top"
                           style={{height:"160px",width:"100px",position:'relative',left:"55px"}}/>
                        <div class="card-body text-center">
                            <p class="card-text"  style={{fontsize:"18px"}}><strong> Titan ,rolex and more</strong>
                                <br/>
                                <span class="card-text"  style={{color:'green'}}> under ₹ 2,999</span>
                                <br/><span class="card-text"> wrist watch & more</span>
                            </p>
                        </div>
                    </a>
                </div>
                <div class="card me-4" style={{width:"14rem",border:"none"}}>
                    <a href="" style={{textdecoration:"none",color:"black"}}>
                        <img src="https://i.ibb.co/NWC3NDL/chair.webp" alt="chair" border="0" class="card-img-top"
                            style={{height:"150px",width:"150px",position:'relative',left:"20px"}}/>
                        <div class="card-body text-center">
                            <p class="card-text" style={{fontsize:"18px"}}><strong> Nice Furtinure and more</strong>
                                <br/>
                                <span class="card-text" style={{color:'green'}}> under ₹ 5,999</span>
                                <br/><span class="card-text"> Chairs,table& more</span>
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        {/* ad. */}
        <div class="pic">
            <img src="https://i.ibb.co/SJR0DjX/t1.webp" alt="t1" border="0"/>
            <img src="https://i.ibb.co/yktGZRD/t2.webp" alt="t2" border="0"/>
            <img src="https://i.ibb.co/BN65q28/t3.webp" alt="t3" border="0"/>
            <img src="https://i.ibb.co/V3Xs9Cw/t4.webp" alt="t4" border="0"/>
            <img src="https://i.ibb.co/pygp1mS/t5.webp" alt="t5" border="0"/>
            <img src="https://i.ibb.co/HTZnxrJ/t6.webp" alt="t6" border="0"/>
        </div>
        {/* offers */}
        <div class="deals mt-3 mb-3">
            <div class=" d-flex justify-content-between">
                <h3 class="m-2">Top Offers</h3>
                <div class="me-5">
                <button type="button" class="btn btn-outline-primary fw-bold">View all</button>
                </div>
            </div>
            <hr/>
            <div class=" d-flex justify-content-center">
                <div class="card me-4" style={{width:"14rem",border:"none"}}>
                    <a href="" style={{textdecoration:"none",color:"black"}}>
                        <img src="https://i.ibb.co/28vxn0y/tshirt-collection.webp" alt="tshirt-collection" border="0" class="card-img-top" style={{height:"150px"}}/>
                        <div class="card-body text-center">
                        <p class="card-text" style={{fontsize:"18px"}}><strong> Men's tshirts</strong> <br/> <span
                                    class="card-text" style={{color:"green"}}> Min. 50% off</span>
                           
                            </p>
                        </div>
                    </a>
                </div>
                <div class="card me-4" style={{width:"14rem",border:"none"}}>
                    <a href="" style={{textdecoration:"none",color:"black"}}>
                        <img src="https://i.ibb.co/fHL4yRj/college.webp" alt="college" border="0" class="card-img-top"
                            style={{height:"150px",width:"120px",position:'relative',left:"50px"}}/>
                        <div class="card-body text-center">
                        <p class="card-text"style={{fontsize:"18px"}}><strong> college life</strong> <br/> <span
                                    class="card-text" style={{color:"green"}}> Min. 50% off</span>
                                
                            </p>
                        </div>
                    </a>
                </div>
                <div class="card me-4" style={{width:"14rem",border:"none"}}>
                    <a href="" style={{textdecoration:"none",color:"black"}}>
                        <img src="https://i.ibb.co/4W8nfJy/Latop.webp" alt="Latop" border="0" class="card-img-top"
                             style={{height:"150px",width:"150px",position:'relative',left:"50px"}}/>
                        <div class="card-body text-center">
                        <p class="card-text"style={{fontsize:"18px"}}><strong>Laptops </strong> <br/> <span
                                    class="card-text" style={{color:"green"}}> Min. 40% off</span>
                            </p>
                        </div>
                    </a>
                </div>
                <div class="card me-4" style={{width:"14rem",border:"none"}}>
                    <a href="" style={{textdecoration:"none",color:"black"}}>
                        <img src="https://i.ibb.co/FVNJ587/shoe-collection.webp" alt="shoe-collection" border="0"class="card-img-top"
                            style={{height:"160px",width:"90px",position:'relative',left:"60px"}}/>
                        <div class="card-body text-center">
                        <p class="card-text"style={{fontsize:"18px"}}><strong> Footwears</strong> <br/> <span
                                    class="card-text" style={{color:"green"}}> Min. 70% off</span>
                            </p>
                        </div>
                    </a>
                </div>
                <div class="card me-4" style={{width:"14rem",border:"none"}}>
                    <a href="" style={{textdecoration:"none",color:"black"}}>
                        <img src="https://i.ibb.co/Z83Hq1k/power-bank.webp" alt="power-bank" border="0"class="card-img-top"
                           style={{height:"160px",width:"100px",position:'relative',left:"55px"}}/>
                        <div class="card-body text-center">
                        <p class="card-text"style={{fontsize:"18px"}}><strong>power banks</strong> <br/> <span
                                    class="card-text" style={{color:"green"}}> Min. 60% off</span>
                                
                            </p>
                        </div>
                    </a>
                </div>
                <div class="card me-4" style={{width:"14rem",border:"none"}}>
                    <a href="" style={{textdecoration:"none",color:"black"}}>
                        <img src="https://i.ibb.co/pw3GFfJ/ball-pen.webp" alt="ball-pen" border="0" class="card-img-top"
                            style={{height:"150px",width:"150px",position:'relative',left:"20px"}}/>
                        <div class="card-body text-center">
                        <p class="card-text"style={{fontsize:"18px"}}><strong> Ball pens</strong> <br/> <span
                                    class="card-text" style={{color:"green"}}> Min. 30% off</span>
                                
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Mainpage