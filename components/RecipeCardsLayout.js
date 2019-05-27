import RecipeCard from './RecipeCard'

class RecipeCardsLayout extends React.Component {    
 
    render() {
      let cols = [];
      this.props.recipes.map(recipe => {
      
        let col =
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 ml-0 mb-3" key={recipe.id}>
                <RecipeCard id={recipe.id} name={recipe.name} url={recipe.imageUrl} />  
            </div>
          cols.push(col);
      })
      let rows = <div className="row">{cols}</div>
        return (
          <div className="p-5">
            <h3>All Recipes</h3>
            {rows}
          </div>      
        );
   }

}

export default RecipeCardsLayout