import React from "react";
import './Footer.css';

const Footer = () => {
   return (
      //     <footer class="bg-white" id="foot">
      //     <div class="container">
      //         <div class="row">

      //             <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
      //                 <h6 class="text-uppercase font-weight-bold mb-4 mt-3">About</h6>
      //                 <ul class="list-unstyled mb-0">
      //                     <li class="mb-2"><a href="#" class="text-muted">Contact Us</a></li>
      //                     <li class="mb-2"><a href="#" class="text-muted">About Us</a></li>
      //                     <li class="mb-2"><a href="#" class="text-muted">Stories</a></li>
      //                     <li class="mb-2"><a href="#" class="text-muted">Press</a></li>
      //                 </ul>
      //             </div>

      //             <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
      //                 <h6 class="text-uppercase font-weight-bold mb-4 mt-3">Help</h6>
      //                 <ul class="list-unstyled mb-0">
      //                     <li class="mb-2"><a href="#" class="text-muted">Payments</a></li>
      //                     <li class="mb-2"><a href="#" class="text-muted">Shipping</a></li>
      //                     <li class="mb-2"><a href="#" class="text-muted">Cancellation</a></li>
      //                     <li class="mb-2"><a href="#" class="text-muted">Returns</a></li>
      //                 </ul>
      //             </div>

      //             <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
      //                 <h6 class="text-uppercase font-weight-bold mb-4 mt-3">Policy</h6>
      //                 <ul class="list-unstyled mb-0">
      //                     <li class="mb-2"><a href="#" class="text-muted">Return Policy</a></li>
      //                     <li class="mb-2"><a href="#" class="text-muted">Terms Of Use</a></li>
      //                     <li class="mb-2"><a href="#" class="text-muted">Security</a></li>
      //                     <li class="mb-2"><a href="#" class="text-muted">Privacy</a></li>
      //                 </ul>
      //             </div>
      //             <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
      //                 <h6 class="text-uppercase font-weight-bold mb-4 mt-3">Company</h6>
      //                 <ul class="list-unstyled mb-0">
      //                     <li class="mb-2"><a href="#" class="text-muted">Login</a></li>
      //                     <li class="mb-2"><a href="#" class="text-muted">Register</a></li>
      //                     <li class="mb-2"><a href="#" class="text-muted">Sitemap</a></li>
      //                     <li class="mb-2"><a href="#" class="text-muted">Our Products</a></li>
      //                 </ul>
      //             </div>
      //             <div class="col-lg-4 col-md-6 mb-lg-0">
      //                 <h6 class="text-uppercase font-weight-bold mb-4 mt-3">Registered Office Address</h6>
      //                 <p class="text-muted mb-4" style={{color:'white !important'}}>Here , write the complete address of
      //                     the
      //                     Registered office address along with telephone number.</p>
      //                 <ul class="mt-4 d-flex" id="social">
      //                     <li><i class="bi bi-facebook me-3"></i></a></li>
      //                     <li><a href="#"><i class="bi bi-twitter me-3"></i></a></li>
      //                     <li><a href="#"><i class="bi bi-instagram me-3"></i></a></li>
      //                     <li><a href="#"><i class="bi bi-youtube me-3"></i></a></li>
      //                     <li><a href="#"><i class="bi bi-google me-3"></i></a></li>
      //                 </ul>
      //             </div>
      //         </div>
      //     </div>
      //     <div class="bg-light py-2">
      //         <div class="container text-center">
      //             <p class="text-muted mb-0 py-2"><strong>&copy; 2007-08 Flipkart All risghts reserved.</strong></p>

      //         </div>
      //     </div>

      // </footer>
      <footer class="container-fluid col-sm-12">
         <hr />
         <div class="container d-flex heading">
            <div class="col-sm-4">
               <h4>Help</h4>
               <ul class="list-unstyled quick-links">
                  <li><a href="">Payments</a></li>

                  <li><a href="">Shipping</a></li>

                  <li><a href="">Cancellations & Return</a></li>

                  <li><a href="">FAQ</a></li>

               </ul>
            </div>

            <div class="col-sm-4">
               <h4>Flipkart Store</h4>
               <ul class="list-unstyled quick-links">
                  <li><a href="">Contact Us</a></li>

                  <li><a href="">About Us</a></li>
                  <li><a href="">Careers</a></li>
                  <li><a href="">Stories</a></li>
                  <li><a href="">Sell With Us</a></li>
               </ul>
            </div>

            <div class="col-sm-4">
               <h4>MISC</h4>
               <ul class="list-unstyled quick-links">
                  <li><a href="">Online Shopping</a></li>
                  <li><a href="">Gift Card</a></li>
                  <li><a href=""></a></li>Sitemap
               </ul>
            </div>

         </div>

         <div class="container-fluid col-lg-10 col-lg-offset-1 facility">
            <div class="row">
               <hr />
               <div class="col-sm-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                     <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg>
                  <h3 class="text-center">TRACK YOUR ORDER</h3>
               </div>

               <div class="col-sm-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                     <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
                     <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                  </svg>
                  <h3 class="text-center ">FREE & EASY RETURNS</h3>

               </div>

               <div class="col-sm-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                     <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                     <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                  <h3 class="text-center">  &nbsp; ONLINE &nbsp;&nbsp;CANCELLATIONS</h3>
               </div>
            </div>
         </div>

         <div class="container-fluid d-flex" style={{ position: 'relative', top: '6em', marginbottom: '20px' }}>

            <div class="col-sm-5 mt-2">

               <h5 style={{ fontsize: '0.95em' }}>Policies: <a href="" style={{ textdecoration: "none" }}> Return Policy </a>|<a href="" style={{ textdecoration: "none" }}> Terms of use </a>|<a href="" style={{ textdecoration: 'none' }}> Security </a>|<a href="" style={{ textdecoration: 'none' }}> Privacy </a></h5>

            </div>

            <div class="col-sm-3">
               <h4 style={{ fontsize:'0.95em' }}>&copy;Flipkart</h4>
            </div>

            <div className="col-sm-4 row contact">
               <h5 className="col-sm-5 mt-2" style={{ fontsize: '0.95em' }}>Keep in touch</h5>
               <div className="col-sm-7" >
                  <div className="d-flex " id="social">
                     <button className="iconss me-2"><i class="bi bi-facebook  "></i></button>
                     <button className="iconss me-2"><i class="bi bi-twitter "></i></button>
                     <button className="iconss me-2"><i class="bi bi-instagram"></i></button>
                     <button className="iconss me-2"><i class="bi bi-youtube "></i></button>
                     <button className="iconss me-2"><i class="bi bi-google "></i></button>
                  </div>
               </div>
            </div>

         </div>
         <hr />
      </footer>
   )
}

export default Footer
