import Layout from '../components/MyLayout.js'

let index = 1;
function addInstruction() {
  <div>
    index++;
    <label for="instruction-step">Step {index}:</label><input type="instruction-step" class="form-control" id="instructions-step" placeholder="Instruction step" name="instructions-step"/>
  </div>
}

const share2 = (props) => (
   
    <Layout>  
      <div className="container">
        <form action = "">    
          <div className="form-group">
            <input type="recipe-name" className="form-control" id="recipe-name" placeholder="Recipe Name" name="recipe-name"/>               
          </div>
          <div className="form-group">
            <input type="recipe-image-url" className="form-control" id="recipe-image-url" placeholder="Image url" name="recipe-image-url"/>               
          </div>
          <div className="form-group row">
              <label for="cooking-time" className="col-sm-2 col-form-label">Cooking Time: </label>
              <div class="col-sm-2">
                <input type="cooking-time" class="form-control" id="cooking-time" name="cooking-time"/> 
              </div>
              <label for="Carbs" className="col-sm-2 col-form-label">Carbs: </label>
              <div class="col-sm-2">
                <input type="Carbs" class="form-control" id="Carbs" name="Carbs"/> 
              </div>
          </div>  
          <div className="form-group row">                 
              <label for="prep-time" className="col-sm-2 col-form-label">Prep Time: </label>
              <div class="col-sm-2">
                <input type="prep-time" className="form-control" id="prep-time" name="prep-time"/>
              </div>
              <label for="fat" className="col-sm-2 col-form-label">Fat: </label>
              <div class="col-sm-2">
                <input type="fat" className="form-control" id="fat" name="fat"/>
              </div>  
          </div>
          <div className="form-group row">                            
              <label for="portions" className="col-sm-2 col-form-label">Portions: </label>
              <div class="col-sm-2">
                <input type="portions" className="form-control" id="portions" name="portions"/>
              </div>              
              <label for="protein" className="col-sm-2 col-form-label">Protein: </label> 
              <div class="col-sm-2">
              <input type="protein" className="form-control" id="protein" name="protein"/>
              </div> 
          </div>
          <div className="form-group">
              <label for="instructions">Instructions: </label><br/>             
              <label className="form-check-inline" for="instruction-step">Step {index}:</label><input type="instruction-step" class="form-control" id="instructions-step" placeholder="Instruction step" name="instructions-step"/>      
              <button type="button" onclick="addInstruction()">Add Instruction</button>
          </div>
          </form>
      </div>
    </Layout>   
)

export default share2
