class IngredientsLayout extends React.Component {    
 
    render() {
      return (
      <div>
        <h4>Ingredients</h4>
        {this.props.ingredients.map(ingredient => {  
            return (
              <div>    
                <div className="row">
                  <div className="col-sm">
                    <p>{ingredient.quantity} {ingredient.name} ({ingredient.unit})</p>
                  </div>
                </div>
              </div>      
            );
        })}
      </div>);
    }
}


export default IngredientsLayout