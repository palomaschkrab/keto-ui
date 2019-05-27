import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'
import IngredientsLayout from '../components/IngredientsLayout.js'
import InstructionsLayout from '../components/InstructionsLayout.js'
import TimeAndPortionInformationLayout from '../components/TimeAndPortionInformationLayout.js'
import MacronutrientsInformationLayout from '../components/MacronutrientsInformationLayout.js'
import AdditionalInformationLayout from '../components/AdditionalInformationLayout.js'

const Recipe = props => (
    <Layout>
        <div className="p-5">
            <div >
                <div className="row">
                    <div className="col-lg-3">
                        <img width="300px" height="400px" src={props.recipe.imageUrl}/>
                    </div>
                    <div className="col-lg-9">               
                        <div className="row bg-white text-dark">
                            <div className="col-lg-12">
                                <h2>{props.recipe.name} {props.recipe.id}</h2>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-lg-4">
                                <TimeAndPortionInformationLayout cookingTime = {props.recipe.cookingTime} prepTime={props.recipe.prepTime} portions={props.recipe.portions}/>
                                <MacronutrientsInformationLayout carbs={props.recipe.macronutrients.carbs} fat={props.recipe.macronutrients.fat} protein={props.recipe.macronutrients.protein}/>                        
                            </div>
                            <br/>
                            <div className="col-lg-8">
                                <AdditionalInformationLayout additionalInformation = {props.recipe.additionalInfo}/>
                            </div>    
                        </div>       
                    </div>  
                    
                </div>
            </div>
            <br/>
            <div className="ingredients bg-white text-dark">
                <IngredientsLayout ingredients={props.recipe.ingredients}/>                
            </div>
            <br/>
            <div className="container-instructions bg-white text-dark">
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