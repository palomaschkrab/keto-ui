import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAmazon } from '@fortawesome/free-brands-svg-icons'
class IngredientsLayout extends React.Component {    
 
    render() {

      function displayShoppringCart(amazonUrl) {
        if(amazonUrl == null){
            return "";
        }
        return (
          <a href={`${amazonUrl}`} target="_blank">
            <FontAwesomeIcon icon={faAmazon} color="pink" width="16"/>
          </a>
        );
      }


      return (
      <div>
        {this.props.ingredients.map(ingredient=> {  
            return (
              <div key={ingredient.name}>    
                <div className="row">
                  <div className="col-sm">
                    <p>{ingredient.quantity} {ingredient.unit} {ingredient.name} {displayShoppringCart(ingredient.amazonUrl)}</p>
                  </div>
                </div>
              </div>      
            );
        })}
      </div>);
    }
}


export default IngredientsLayout