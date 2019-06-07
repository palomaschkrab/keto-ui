class IngredientsLayout extends React.Component {    
 
    render() {
      return (
      <div>
        {this.props.ingredients.map(ingredient=> {  
            return (
              <div key={ingredient.name}>    
                <div className="row">
                  <div className="col-sm">
                    <p>{ingredient.quantity} {ingredient.unit} {ingredient.name} </p>
                  </div>
                </div>
              </div>      
            );
        })}
      </div>);
    }
}


export default IngredientsLayout