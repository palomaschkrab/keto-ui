import Link from 'next/link'
import Head from 'next/head'

const Header = () => (
  <div>
      <div id="header">
      <Head>
        <title>How to Keto Cook</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />
      </Head>
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link href="/">
            <a>
              <img src="../static/images/logo.png" className='navbar-brand' alt='logo' width="150px" height="65px"/>
            </a>                
        </Link>
        {/* <a className="navbar-brand" href="#">How to Keto Cook</a> */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
          </ul>
        </div>
      </nav>
    </div>

    <style jsx>{`
      #header {
        background-color: #DDA0DD;
      } 
      li {
        font-size: 160%;
        font-style: italic;
        font-family: "Times New Roman", Times, serif;
      }

    `}</style>
  </div>
  
)

export default Header