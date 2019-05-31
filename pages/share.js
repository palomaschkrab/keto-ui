import Layout from '../components/MyLayout.js'

const Share = (props) => (
    <Layout>      
          <div className="row container pt-3">
              <div className="col-lg-6 col-md-6 col-xs-6">
                  <img src="../static/images/raspberries.jpg" className="img-fluid"></img>
                  <figcaption>Image by <a href="https://pixabay.com/users/congerdesign-509903/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1561457">congerdesign</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1561457">Pixabay</a></figcaption>
              </div>
              <div className="col-lg-6 col-md-6 col-xs-6">
                <p> Hello keto friends,<br/>You are more than welcome to send your favorite recipe to howtoketocook@gmail.com.
                <br/>
                Hey, do not forget to include:</p>
                <ul>
                    <li> A beautiful picture</li>
                    <li> Prep time (time it takes to prepare the recipe)</li>
                    <li> Cooking time (time it takes to cook or bake it)</li>
                    <li> Macronutrients (carbs, protein and fat per recipe)</li>
                </ul> 
                <p>The recipe will shortly be published here.</p>
                <p> <b>Notice:</b> the Macronutrients are optional. It is ok if you do not have this information. We still want to try your recipes </p>
              </div>
            
          </div>
           
    </Layout>   
)

export default Share
