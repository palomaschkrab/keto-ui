import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const Index = (props) => (
  <Layout>
    <h1>How to Keto Cook</h1>
    <ul>
      {props.recipes.map(recipe => (
        <li key={recipe.id}>
          <Link as={`/p/${recipe.id}`} href={`/post?id=${recipe.id}`}>
            <a>{recipe.id}
            {recipe.name}
            <img src={recipe.image.url} /></a>
          </Link>
      </li>
      ))}
    </ul>
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