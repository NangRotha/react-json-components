
const Brand = ({brands}) => {
  return (
     <div className="container my-5">
          <div className="row text-center">
            <div className="col">
              <h2>Our Brands</h2>
              <p>We work with the best brands in the industry</p>
            </div>
          </div>
          <div className="row text-center">
            {brands.map((brand) => (
              <div key={brand.id} className="col my-3">
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  className="img-fluid" 
                  style={{ 
                    height: "100px", 
                    objectFit: "contain", 
                    border: "1px solid #ccc", 
                    borderRadius: "10px",
                    padding: "5px"
                  }} 
                />
              </div>
            ))}
          </div>
        </div>
  )
}

export default Brand