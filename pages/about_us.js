import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import RecipeCardsLayout from '../components/RecipeCardsLayout'

const AboutUs = (props) => (
    <Layout>
      
          <div className="row pt-3">
            <div className="col-lg-6 col-md-6 col-xs-6">
                <img src="../static/images/me.jpg" alt="My Image" className="img-fluid"/>
            </div>
            <div className="col-lg-6  col-md-6 col-xs-6">
                <p className="pt-1">Hello keto friends,<br/><br/>
                    My name is Paloma and I created this website for two main reasons:
                </p>
                <ol>
                    <li>Add it to my portifolio as a developer</li>
                    <li>Have easy access to my favourite recipes</li>
                </ol>
                <p className="pt-1">I first started the diet in 2017 and I followed it for six months straight. The results?</p>
                <ul>
                    <li>Lost almost 20 pounds (9 kgs)</li>
                    <li>Ended migrane suffering</li>
                    <li>Felt more energetic</li>
                    <li>Improved self-esteem</li>
                </ul>
                <p className="pt-1">Once I had all the benefits I got too confident and started to have carbohydrates again and the cravings were back, followed by the weight.
                    <b> How to keto cook</b> is my ultimate tool to save all my favorite keto recipes and an easy way to share them with friends as well.<br/>
                    Truth is you can eat outside but the options are kind of repetitive because restaurants follow the "Carb Culture". 
                    Our options are usually limited to salads and "salad-wrapped burgers".<br/><br/>
                    If you are like me and cannot stand to have the same meal every day, join me on <b> How to keto cook</b> and feel free to send me your favorite recipes.
                </p>
            </div>
          </div>
           
    </Layout>   
)

export default AboutUs