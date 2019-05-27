import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBreadSlice } from '@fortawesome/free-solid-svg-icons'
import { faBacon } from '@fortawesome/free-solid-svg-icons'
import { faDrumstickBite } from '@fortawesome/free-solid-svg-icons'

class MacronutrientsInformationLayout extends React.Component {    
 
    render() {
      return (    
        <div className="col-lg-12 bg-white text-dark">
            <p className="text-left"> 
                <FontAwesomeIcon icon={faBreadSlice} color="black" size="1x"/> Carbs: {this.props.carbs}
            </p>
            <p className="text-left"> 
                <FontAwesomeIcon icon={faBacon} color="black" size="1x"/> Fat: {this.props.fat}
            </p>
            <p className="text-left"> 
                <FontAwesomeIcon icon={faDrumstickBite} color="black" size="1x"/> Protein: {this.props.protein}
            </p>
        </div>
      );
    }
}


export default MacronutrientsInformationLayout