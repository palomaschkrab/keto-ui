import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'
import IngredientsLayout from '../components/IngredientsLayout.js'
import InstructionsLayout from '../components/InstructionsLayout.js'
import TimeAndPortionInformationLayout from '../components/TimeAndPortionInformationLayout.js'
import MacronutrientsInformationLayout from '../components/MacronutrientsInformationLayout.js'
import AdditionalInformationLayout from '../components/AdditionalInformationLayout.js'
  
const Recipe = props => (
<Layout title={`How to keto cook | ${props.recipe.name}`} description={`${props.recipe.additionalInfo}`} image={`${props.recipe.imageUrl}`} ogUrl={`www.howtoketocook.com/recipes/${props.recipe.urlId}`}>
        <div className="container pt-4">
            <div >
                <div className="row">
                    <div className="col-lg-5">
                        <img className="responsive" src={props.recipe.imageUrl}/>
                    </div>
                    <div className="col-lg-7">               
                        <div className="row text-dark">
                            <div className="col-lg-12">
                                <h1>{props.recipe.name}</h1>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-lg-6">                               
                                <TimeAndPortionInformationLayout cookingTime = {props.recipe.cookingTime} prepTime={props.recipe.prepTime} portions={props.recipe.portions}/>                                                
                            </div>
                            <br/>
                            <div className="col-lg-6" >
                                <MacronutrientsInformationLayout carbs={props.recipe.macronutrients.carbs} fat={props.recipe.macronutrients.fat} protein={props.recipe.macronutrients.protein}/>        
                             </div>    
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <AdditionalInformationLayout additionalInformation = {props.recipe.additionalInfo}/>
                            </div>
                        </div>      
                    </div>  
                    
                </div>
            </div>
            <br/>
            <h5>Ingredients</h5>
            <div className="text-dark rounded">
                <IngredientsLayout ingredients={props.recipe.ingredients}/>                
            </div>
            <br/>
            <h5>Instructions</h5>
            <div className="text-dark rounded ">
                <InstructionsLayout instructions={props.recipe.instructions} note={props.recipe.note} />                
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
    const { urlId } = context.query
    // const res = await fetch(`https://keto-api.herokuapp.com/api/public/recipes/${urlId}`)    
    const res = await fetch(`http://localhost:8080/api/public/recipes/${urlId}`)  
    const recipe = await res.json()
    
    return { recipe }
  }
  
  export default Recipe