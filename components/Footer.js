import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

import ColumnInfo from './ColumnInfo'
import SocialMedia from './SocialMedia';

const Footer = () => (
    <div>
        <footer className="page-footer font-small unique-color-dark">
            <div id="outter">
                <div className="container py-2">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-8 col-lg-8 text-center text-md-left mb-4 mb-md-0">                            
                            <ColumnInfo column1="Boost your energy" column2="Increase mental clarity" column3="Less meals, more free time"/>
                        </div>
                        <div className="col-md-4 col-lg-4 text-center">   
                            <SocialMedia/>
                        </div>
                    </div>
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
                        <p><Link href="about_us">
                            <a href="#!">About us</a>
                        </Link></p>
                        <p><Link href="share">
                            <a href="#!">Share your favorites</a>
                        </Link></p>
                    </div>
                     {/* <!-- Grid column -->
                    
                    <!-- Grid column -->  */}
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                        {/* <!-- Links --> */}
                        <h6 className="text-uppercase font-weight-bold">Contact US</h6>
                        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                        <p>
                        <FontAwesomeIcon icon={faMapMarkerAlt} color="pink" width="16"/> Vancouver, BC - CA</p>
                        <p>
                        <FontAwesomeIcon icon={faEnvelope} color="pink" width="16"/> howtoketocook@gmail.com</p>

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