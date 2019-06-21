import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import RecipeCardsLayout from '../components/RecipeCardsLayout'
import BannerCarousel from '../components/BannerCarousel'
const Index = (props) => (
    <Layout title="How to Keto Cook | Affordable, easy and cheap keto diet recipes" description="Find easy keto recipes that can be ready in even less than 5 minutes. Find also delicious and affordable keto diet recipes with ingredients you already have at home" image="https://s3.ca-central-1.amazonaws.com/how.to.keto.cook.recipes.images/how_to_keto_cook_logo.png">
      <div>
        <BannerCarousel/>
        <RecipeCardsLayout recipes={props.recipes} />
      </div>
    </Layout>   
)

Index.getInitialProps = async function() {
  // const res = await fetch('https://keto-api.herokuapp.com/api/public/recipes')
  const res = await fetch('http://localhost:8080/api/public/recipes')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    recipes: data
  }
}

export default Index