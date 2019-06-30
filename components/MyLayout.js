import Header from './Header'
import Footer from './Footer'

const Layout = props => (
  <div>
    <div >
      <Header title={props.title} description={props.description} image={props.image} ogUrl={props.ogUrl}/>
      {props.children} {/* important so Layout children will be rended */}
      <Footer/>
    </div>   
  </div>  
)

export default Layout