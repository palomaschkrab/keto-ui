import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import RecipeCardsLayout from '../components/RecipeCardsLayout'
import BannerCarousel from '../components/BannerCarousel'
const Index = (props) => (
    <Layout>
      <div>
        <BannerCarousel/>
        <RecipeCardsLayout recipes={props.recipes} />
      </div>
    </Layout>   
)

Index.getInitialProps = async function() {
  const res = await fetch('http://localhost:8080/api/public/recipes')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    recipes: data
  }
}

export default Index