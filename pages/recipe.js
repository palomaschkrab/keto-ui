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
                    <div className="col-lg-5">
                        <img className="responsive" src={props.recipe.imageUrl}/>
                    </div>
                    <div className="col-lg-7">               
                        <div className="row text-dark">
                            <div className="col-lg-12">
                                <h1>{props.recipe.name} {props.recipe.id}</h1>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-lg-4">                               
                                <TimeAndPortionInformationLayout cookingTime = {props.recipe.cookingTime} prepTime={props.recipe.prepTime} portions={props.recipe.portions}/>
                                <MacronutrientsInformationLayout carbs={props.recipe.macronutrients.carbs} fat={props.recipe.macronutrients.fat} protein={props.recipe.macronutrients.protein}/>                        
                            </div>
                            <br/>
                            <div className="col-lg-8" >
                                <AdditionalInformationLayout additionalInformation = {props.recipe.additionalInfo}/>
                            </div>    
                        </div>       
                    </div>  
                    
                </div>
            </div>
            <br/>
            <h5>Ingredients</h5>
            <div className="bg-white text-dark rounded">
                <IngredientsLayout ingredients={props.recipe.ingredients}/>                
            </div>
            <br/>
            <h5>Instructions</h5>
            <div className="bg-white text-dark rounded">
                <InstructionsLayout instructions={props.recipe.instructions}/>
            </div>
        </div>
        <style jsx>{`
            .responsive {
                max-width: 100%;
                height: auto;
            }
            h1,h5 {
                color: #890000;
                font-size: 160%;
                font-style: italic;
                font-family: Arial, Helvetica, sans-serif;
              }         
        `}
        </style> 
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