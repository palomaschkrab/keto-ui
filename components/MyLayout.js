import Header from './Header'
import Footer from './Footer'

const Layout = props => (
  <div>
    <div className="pinkbg">
      <Header/>
      {props.children} {/* important so Layout children will be rended */}
      <Footer/>
    </div>   
    <style jsx>{`
            .pinkbg {
              background-color: #FFF7FF;
            }
        `}
    </style> 
  </div>  
)

export default Layout