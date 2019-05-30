import Link from 'next/link'

const BannerCarousel = props => (    

<div id="carousel" className="carousel slide carousel-fade container" data-ride="carousel">

  <ol className="carousel-indicators">
    <li data-target="#carousel" data-slide-to="0" className="active"></li>
    <li data-target="#carousel" data-slide-to="1"></li>
    <li data-target="#carousel" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner" role="listbox">
    <div className="carousel-item active">
      <div className="view">
        <a href="http://keto.renatomolina.com">
          <img className="d-block w-100 h-70" src="../static/images/ways_to_ketosis.png"
            alt="First slide"/>
        </a>        
        <div className="mask rgba-black-light"></div>
      </div>
    </div>
    <div className="carousel-item border-pink">
      <div className="view">
        <a href="https://www.netflix.com/watch/80238655?trackId=13752289&tctx=0%2C0%2C920952f765d0b1ae4a0ab710bcf15421298503ff%3A68ed08ce11913cec140f0a5d55dd2d10d5122c32%2C%2C">
          <img className="d-block w-100 h-70" src="../static/images/magic_pill.png"
            alt="Second slide"/>
        </a>
        <div className="mask rgba-black-strong"></div>
      </div>
    </div>
    <div className="carousel-item">
      <div className="view">
        <Link href="share">
          <img className="d-block w-100 h-70" src="../static/images/share.png"
            alt="Third slide"/>
        </Link>
        <div className="mask rgba-black-slight"></div>
      </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>

  <style jsx>{`
            .carousel-control-next-icon, .carousel-control-prev-icon, li {
                background-color: #fb8d8d;
            }
        
        `}</style>
</div>

)
export default BannerCarousel