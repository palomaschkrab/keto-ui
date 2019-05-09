import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'

const Post = props => (
  <Layout>
    <h1>{props.recipe.name}</h1>
    {/* 
    <p>{props.recipe.summary.replace(/<[/]?p>/g, '')}</p>
    <img src={props.recipe.image.medium} />*/}
  </Layout>
)

Post.getInitialProps = async function(context) {
  const { id } = context.query
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const recipe = await res.json()

  console.log(`Fetched recipe: ${recipe.name}`)

  return { recipe }
}

export default Post