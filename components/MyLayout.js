import Header from './Header'
import Footer from './Footer'

const Layout = props => (
  <div>
    <div >
      <Header/>
      {props.children} {/* important so Layout children will be rended */}
      <Footer/>
    </div>   
  </div>  
)

export default Layout