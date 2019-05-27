import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faHourglass } from '@fortawesome/free-regular-svg-icons'
import { faConciergeBell } from '@fortawesome/free-solid-svg-icons'

class AdditionalInformationLayout extends React.Component {    
 
    render() {
      return (    
        <div className="col-lg-12 bg-white text-dark">
            <p className="text-left"> 
                {this.props.additionalInformation}
            </p>
        </div>
      );
    }
}


export default AdditionalInformationLayout