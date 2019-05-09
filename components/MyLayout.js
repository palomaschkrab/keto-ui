import Header from './Header'

const Layout = props => (
  <div>
    <Header />
    {props.children} {/* important so Layout children will be rended */}
  </div>
)

export default Layout