import Header from './Header'
import Footer from './Footer'

const Layout = props => (
  <div>
    <Header/>
    {props.children} {/* important so Layout children will be rended */}
    <Footer/>
    
  </div>  
)

export default Layout