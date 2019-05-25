import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'
import IngredientsLayout from '../components/IngredientsLayout.js'
import InstructionsLayout from '../components/InstructionsLayout.js'
import TimeAndPortionInformationLayout from '../components/TimeAndPortionInformationLayout.js'
import MacronutrientsInformationLayout from '../components/MacronutrientsInformationLayout.js'
import AdditionalInformationLayout from '../components/AdditionalInformationLayout.js'

const Recipe = props => (
    <Layout>
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <img width="300px" height="400px" src={props.recipe.imageUrl}/>
                    </div>
                    <div className="col-lg-9">               
                        <div className="row">
                            <div className="col-lg-12">
                                <h2>{props.recipe.name} {props.recipe.id}</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <TimeAndPortionInformationLayout cookingTime = {props.recipe.cookingTime} prepTime={props.recipe.prepTime} portions={props.recipe.portions}/>
                                <MacronutrientsInformationLayout carbs={props.recipe.macronutrients.carbs} fat={props.recipe.macronutrients.fat} protein={props.recipe.macronutrients.protein}/>                        
                            </div>
                            <div className="col-lg-8">
                                <AdditionalInformationLayout additionalInformation = {props.recipe.additionalInfo}/>
                            </div>    
                        </div>       
                    </div>  
                    
                </div>
            </div>
            <div className="container-ingredients">
                <IngredientsLayout ingredients={props.recipe.ingredients}/>                
            </div>
            <div className="container-instructions">
                <InstructionsLayout instructions={props.recipe.instructions}/>
            </div>
        </div>
    </Layout>    
)

Recipe.getInitialProps = async function(context) {
    const { id } = context.query
    const res = await fetch(`http://localhost:8080/api/public/recipes/${id}`)
    const recipe = await res.json()
  
    console.log(`Fetched show: ${recipe.name}`)
  
    return { recipe }
  }
  
  export default Recipe