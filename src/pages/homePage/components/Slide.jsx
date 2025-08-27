
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
const Slide = ({slides}) => {
  return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            {slides.map((item, index) => {
              return (
                <div key={item.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                  <img 
                    src={item.image} 
                    className="d-block w-100" 
                    style={{ height: "500px", objectFit: "", borderRadius: "15px" }}
                    alt={`Slide ${item.id}`} 
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Slide {item.id} label</h5>
                    <p>Some representative placeholder content for slide {item.id}.</p>
                  </div>
                </div>
              )
            })}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>    
    
  )
}

export default Slide