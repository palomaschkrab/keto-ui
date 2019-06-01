import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

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
                            <a className="fb-ic p-2" href="https://www.facebook.com/howtoketo.cook.9" target="_blank">
                                <FontAwesomeIcon icon={faFacebook} color="white" size="2x"/>
                            </a>                            
                            {/* <!-- Twitter --> */}                            
                            <a className="tw-ic p-2" href="https://twitter.com/HowKeto" target="_blank">
                                <FontAwesomeIcon icon={faTwitter} color="white" size="2x"/>
                            </a>                           
                            {/* <!--Linkedin --> */}
                            <a className="li-ic p-2" href="https://www.linkedin.com/in/paloma-schkrab/" target="_blank">
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
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-5">
                        {/* <!-- Content --> */}
                        <h6 className="text-uppercase font-weight-bold">How to Keto Cook</h6>
                        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                        <p>Find your favourite recipes here and help us grow our list by sharing yours and inviting friends to follow us!</p>
                    </div>
                    {/* <!-- Grid column --> */}

                    {/* <!-- Grid column --> */}
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        {/* <!-- Links --> */}
                        <h6 className="text-uppercase font-weight-bold">Info</h6>
                        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto pt-2" />
                        <Link href="about_us">
                            <a href="#!">About us</a>
                        </Link><br/>
                        <Link href="share">
                            <a href="#!">Share your favorites</a>
                        </Link>
                    </div>
                     {/* <!-- Grid column -->
                    
                    <!-- Grid column -->  */}
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                        {/* <!-- Links --> */}
                        <h6 className="text-uppercase font-weight-bold">Contact US</h6>
                        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                        <p>
                        <FontAwesomeIcon icon={faMapMarkerAlt} color="pink" size="1x"/> Vancouver, BC - CA</p>
                        <p>
                        <FontAwesomeIcon icon={faEnvelope} color="pink" size="1x"/> howtoketocook@gmail.com</p>

                    </div>
                    {/* <!-- Grid column --> */}

                </div>
                {/* <!-- Grid row --> */}

            </div>
            {/* <!-- Footer Links --> */}
        </footer>

        <style jsx>{`
            #outter {
                background-color: #fb8d8d;
            }

            .deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto {
                width: 60px;
            }

            a{
                color: #ec4c4c;
            }
        
        `}</style>

    </div>
)

export default Footer