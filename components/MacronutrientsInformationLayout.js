import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBreadSlice } from '@fortawesome/free-solid-svg-icons'
import { faBacon } from '@fortawesome/free-solid-svg-icons'
import { faDrumstickBite } from '@fortawesome/free-solid-svg-icons'

class MacronutrientsInformationLayout extends React.Component {    
 
    render() {
      return (    
        <div className="col-lg-12 bg-white text-dark rounded">
            <p className="text-left"> 
                <FontAwesomeIcon icon={faBreadSlice} color="#890000" width="16"/> Carbs: {this.props.carbs}
            </p>
            <p className="text-left"> 
                <FontAwesomeIcon icon={faBacon} color="#890000" width="16"/> Fat: {this.props.fat}
            </p>
            <p className="text-left"> 
                <FontAwesomeIcon icon={faDrumstickBite} color="#890000" width="16"/> Protein: {this.props.protein}
            </p>
        </div>
      );
    }
}


export default MacronutrientsInformationLayout