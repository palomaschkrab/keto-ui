import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFacebook } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
const Footer = () => (
    <div>
        {/* <!-- Footer --> */}
        <footer className="page-footer font-small unique-color-dark">
            <div id="outter">
                <div className="container">
                    {/* <!-- Grid row--> */}
                    <div className="row py-4 d-flex align-items-center">

                        {/* <!-- Grid column --> */}
                        <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                            <h6 className="mb-0">Get connected with us on social networks!</h6>
                        </div>
                        {/* <!-- Grid column --> */}

                        {/* <!-- Grid column --> */}
                        <div className="col-md-6 col-lg-7 text-center text-md-right">    
                            {/* <!-- Facebook --> */}
                            <a className="fb-ic">
                                <FontAwesomeIcon icon={faFacebook} color="white" size="2x"/>
                            </a>
                            {/* <!-- Twitter --> */}
                            <a className="tw-ic">
                                <FontAwesomeIcon icon={faTwitter} color="white" size="2x"/>
                            </a>
                            {/* <!-- Instagram +--> */}
                            <a className="gplus-ic">
                                <FontAwesomeIcon icon={faInstagram} color="white" size="2x"/>
                            </a>
                            {/* <!--Linkedin --> */}
                            <a className="li-ic">
                                <FontAwesomeIcon icon={faLinkedin} color="white" size="2x"/>
                            </a>
                        </div>
                        {/* <!-- Grid column --> */}
                    </div>
                    {/* <!-- Grid row--> */}
                </div>
            </div>

            {/* <!-- Footer Links --> */}
            <div className="container text-center text-md-left mt-5">
                {/* <!-- Grid row --> */}
                <div className="row mt-3">

                    {/* <!-- Grid column --> */}
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        {/* <!-- Content --> */}
                        <h6 className="text-uppercase font-weight-bold">Company name</h6>
                        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                        <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                        consectetur
                        adipisicing elit.</p>
                    </div>
                    {/* <!-- Grid column --> */}

                    {/* <!-- Grid column --> */}
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        {/* <!-- Links --> */}
                        <h6 className="text-uppercase font-weight-bold">Products</h6>
                        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                        <p>
                        <a href="#!">MDBootstrap</a>
                        </p>
                        <p>
                        <a href="#!">MDWordPress</a>
                        </p>
                        <p>
                        <a href="#!">BrandFlow</a>
                        </p>
                        <p>
                        <a href="#!">Bootstrap Angular</a>
                        </p>
                    </div>
                    {/* <!-- Grid column -->

                    <!-- Grid column --> */}
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                        {/* <!-- Links --> */}
                        <h6 className="text-uppercase font-weight-bold">Useful links</h6>
                        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                        <p>
                        <a href="#!">Your Account</a>
                        </p>
                        <p>
                        <a href="#!">Become an Affiliate</a>
                        </p>
                        <p>
                        <a href="#!">Shipping Rates</a>
                        </p>
                        <p>
                        <a href="#!">Help</a>
                        </p>

                    </div>
                    {/* <!-- Grid column -->

                    <!-- Grid column --> */}
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                        {/* <!-- Links --> */}
                        <h6 className="text-uppercase font-weight-bold">Contact</h6>
                        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                        <p>
                        <i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                        <p>
                        <i className="fas fa-envelope mr-3"></i> info@example.com</p>
                        <p>
                        <i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                        <p>
                        <i className="fas fa-print mr-3"></i> + 01 234 567 89</p>

                    </div>
                    {/* <!-- Grid column --> */}

                </div>
                {/* <!-- Grid row --> */}

            </div>
            {/* <!-- Footer Links -->

            <!-- Copyright --> */}
            <div className="footer-copyright text-center py-3">© 2018 Copyright:
                <a href="https://mdbootstrap.com/education/bootstrap/"> MDBootstrap.com</a>
            </div>
            {/* <!-- Copyright --> */}

        </footer>

        <style jsx>{`
            #outter {
            background-color: #DDA0DD;
            }

            .deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto {
                width: 60px;
            }
        
        `}</style>

    </div>
)

export default Footer