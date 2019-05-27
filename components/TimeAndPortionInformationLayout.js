import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faHourglass } from '@fortawesome/free-regular-svg-icons'
import { faConciergeBell } from '@fortawesome/free-solid-svg-icons'

class TimeAndPortionInformationLayout extends React.Component {    
 
    render() {
      return (    
        <div className="col-lg-12 bg-white text-dark">
            <p className="text-left"> 
                <FontAwesomeIcon icon={faHourglass} color="black" size="1x"/> Cooking Time: {this.props.cookingTime}
            </p>
            <p className="text-left"> 
                <FontAwesomeIcon icon={faClock} color="black" size="1x"/> Prep Time: {this.props.prepTime}
            </p>
            <p className="text-left"> 
                <FontAwesomeIcon icon={faConciergeBell} color="black" size="1x"/> Portions: {this.props.portions}
            </p>
        </div>
      );
    }
}


export default TimeAndPortionInformationLayout