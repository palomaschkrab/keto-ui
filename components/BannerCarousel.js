import Link from 'next/link'

const BannerCarousel = props => (    

<div id="carousel-example-2" className="carousel slide carousel-fade" data-ride="carousel">

  <ol className="carousel-indicators">
    <li data-target="#carousel-example-2" data-slide-to="0" className="active"></li>
    <li data-target="#carousel-example-2" data-slide-to="1"></li>
    <li data-target="#carousel-example-2" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner" role="listbox">
    <div className="carousel-item active">
      <div className="view">
        <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
          alt="First slide"/>
        <div className="mask rgba-black-light"></div>
      </div>
      <div className="carousel-caption">
        <h3 className="h3-responsive">Light mask</h3>
        <p>First text</p>
      </div>
    </div>
    <div className="carousel-item">
      <div className="view">
        <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg"
          alt="Second slide"/>
        <div className="mask rgba-black-strong"></div>
      </div>
      <div className="carousel-caption">
        <h3 className="h3-responsive">Strong mask</h3>
        <p>Secondary text</p>
      </div>
    </div>
    <div className="carousel-item">
      <div className="view">
        <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg"
          alt="Third slide"/>
        <div className="mask rgba-black-slight"></div>
      </div>
      <div className="carousel-caption">
        <h3 className="h3-responsive">Slight mask</h3>
        <p>Third text</p>
      </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carousel-example-2" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carousel-example-2" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>


    
)
export default BannerCarousel