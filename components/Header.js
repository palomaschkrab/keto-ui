import Link from 'next/link'
import Head from 'next/head'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
  <div>
    <Head>
      <title>How to Keto Cook</title>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />
    </Head>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
  </div>
)

export default Header