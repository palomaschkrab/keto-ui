import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

const SocialMedia = props => (
    <div>
        <div className="row">    
            <div className="col-sm-12">
                Get connected with us on social networks!
            </div>
        </div>
        <div className="row"> 
            <div className="col-sm-12 text-center">
                {/* <!-- Facebook --> */}                            
                <a className="fb-ic p-2" href="https://www.facebook.com/howtoketo.cook.9" target="_blank">
                    <FontAwesomeIcon icon={faFacebook} color="white" width="16"/>
                </a>                            
                {/* <!-- Twitter --> */}                            
                <a className="tw-ic p-2" href="https://twitter.com/HowKeto" target="_blank">
                    <FontAwesomeIcon icon={faTwitter} color="white" width="16"/>
                </a>    
                {/* <!-- Instagram --> */}                            
                <a className="tw-ic p-2" href="https://www.instagram.com/howtoketocook/" target="_blank">
                    <FontAwesomeIcon icon={faInstagram} color="white" width="16"/>
                </a>                       
                {/* <!--Linkedin --> */}
                <a className="li-ic p-2" href="https://www.linkedin.com/in/paloma-schkrab/" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} color="white" width="16"/>
                </a>        
            </div>
        </div>
    </div>
  )
  
  export default SocialMedia