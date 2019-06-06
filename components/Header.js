import Link from 'next/link'
import Head from 'next/head'

const Header = () => (
  <div>
      <div id="header">
      <Head>
        {/* Global site tag (gtag.js) - Google Analytics  */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-141670136-1"></script>
        <script>{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-141670136-1');
          `}          
        </script>
        <title>How to Keto Cook</title>
        <link rel="shortcut icon" type="image/x-icon" href="/static/images/favicon_greyBG.ico" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
       
      
      </Head>
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link href="/">
            <a>
              <img src="../static/images/red_logo.png" className='navbar-brand' alt='logo' width="150px" height="65px"/>
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
        background-color: #fb8d8d;
      } 
      li {
        color: #890000;
        font-size: 160%;
        font-style: italic;
        font-family: Arial, Helvetica, sans-serif;
      }

    `}</style>
  </div>
  
)

export default Header