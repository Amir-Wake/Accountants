import React from "react"
import './Footer.css'
import { SocialIcon } from 'react-social-icons';

const FooterBottom = () => <footer className="page-footer font-small  blue pt-4">
   <div className="footerprop">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-5 mt-md-0 mt-3">
                <h5 className="text-uppercase">A.M.H</h5>
                <p>© 2023 AMH Accountancy Services Ltd.</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-2"/>

            <div className="col-md-4 mb-md-0 mb-3">
                <h5 className="text-uppercase">Information</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Privacy Policy</a></li>
                    <li><a href="#!">Data Protection Policy</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-2 mb-3">
                <h5 className="text-uppercase">Connect With Us</h5>
                <ul className="list-unstyled">
                <div className="socialicons"><SocialIcon network="facebook" url="https://facebook.com" bgColor="blue" style={{ height: 50, width: 50 }}/></div>  
                <div className="socialicons"><SocialIcon network="whatsapp" url="https://whatsapp.com" bgColor="" style={{ height: 50, width: 50 }}/></div>  
                <div className="socialicons"><SocialIcon network="twitter"  url="https://twitter.com" bgColor="" style={{ height: 50, width: 50 }}/>  </div>              
               </ul>
            </div>
        </div>
    </div>
    <hr/>
    <div className="footer-copyright text-center py-3">© 2023 Copyright: All rights reserved.
This website was created by:
        <a href="tel:07853654026"> Amir</a> 
    </div>
    </div>
</footer>

export default FooterBottom