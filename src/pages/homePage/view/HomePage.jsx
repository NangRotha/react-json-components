import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Slide from "../components/Slide"
import Brand from "../components/Brand"
import Product from "../components/Product"


const slide = [
  {
    "id": 1,
    "title": "Slide 1",
    // Replace with a high quality image URL if available
    "image": "https://i.pinimg.com/736x/0c/c0/05/0cc0057a4289e33be1acc005d14c3ae7.jpg",
    "description": "This is the first slide"
  },
  {
    "id": 2,
    "title": "Slide 2",
    "image": "https://i.pinimg.com/736x/f5/a3/94/f5a394ec92e5e36116139dac2dd90dfd.jpg",
    "description": "This is the second slide"
  },
  {
    "id": 3,
    "title": "Slide 3",
    "image": "https://i.pinimg.com/1200x/b3/74/0d/b3740d32a2e52db738187be50c422509.jpg",
    "description": "This is the third slide"
  }
]

const brands = [
  {
    "id": 1,
    "name": "Huawei",
    "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8JCf-YEXyzzzKL9SEWzWNxHJbp80kNbHnEA&s"
  },
  {
    "id": 2,
    "name": "vivo",
    "logo": "https://i.pinimg.com/736x/46/17/3b/46173b6dd05fb0295da1f1434e275fb5.jpg"
  },
  {
    "id": 3,
    "name": "xiaomi",
    "logo": "https://i.pinimg.com/1200x/7f/7f/be/7f7fbeb8b2b3afa7fd35c5a5ac7f6acc.jpg"
  },
  {
    "id": 4,
    "name": "oneplus",
    "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwF8vV44AONr2YlAW-qswiGCmgc0PpxhPhGQ&s"
  },
  {
    "id": 5,
    "name": "apple",
    "logo": "https://i.pinimg.com/736x/1b/56/fd/1b56fd706cdbaa4646fd0472193d5005.jpg"
  },
  {
    "id": 6,
    "name": "oppo",
    "logo": "https://i.pinimg.com/736x/33/bb/8c/33bb8ce16eee8700514c057f546299d0.jpg"
  },
  {
    "id": 7,
    "name": "samsung",
    "logo": "https://i.pinimg.com/736x/a6/e7/cd/a6e7cde1b08a71ccb6fd8aa6eaa19c88.jpg"
  },
  {
    "id": 8,
    "name": "realme",
    "logo": "https://i.pinimg.com/736x/f8/0d/f5/f80df5feb4b350e2eb86fc179b432f66.jpg"
  }
]
const products = [
  {
    "id": 1,
    "name": "Iphone X",
    "image": "https://i.pinimg.com/736x/48/0e/11/480e1167df2c4a244710ff75212780fc.jpg",
    "description": "This is the Iphone X",
    "price": "$999"
  },
  {
    "id": 2,
    "name": "Samsung Galaxy S20",
    "image": "https://i.pinimg.com/736x/5b/d8/93/5bd893c5ec4277bc4cff54fbb3e79afb.jpg",
    "description": "This is the Samsung Galaxy S20",
    "price": "$1099"
  },
  {
    "id": 3,
    "name": "Iphone 12",
    "image": "https://i.pinimg.com/736x/48/0e/11/480e1167df2c4a244710ff75212780fc.jpg",
    "description": "This is the Iphone 12", 
    "price": "$1199"
  },
  {
    "id": 4,
    "name": "Iphone 13",
    "image": "https://i.pinimg.com/736x/48/0e/11/480e1167df2c4a244710ff75212780fc.jpg",
    "description": "This is the Iphone 13",
    "price": "$1299"
  },
  {
    "id": 5,
    "name": "Iphone 14",
    "image": "https://i.pinimg.com/736x/48/0e/11/480e1167df2c4a244710ff75212780fc.jpg",
    "description": "This is the Iphone 14",
    "price": "$1399"
  },
  {
    "id": 6,
    "name": "Iphone 15",
    "image": "https://i.pinimg.com/736x/48/0e/11/480e1167df2c4a244710ff75212780fc.jpg",
    "description": "This is the Iphone 15",
    "price": "$1499"
  },
  {
    "id": 7,
    "name": "Iphone 16",
    "image": "https://i.pinimg.com/736x/48/0e/11/480e1167df2c4a244710ff75212780fc.jpg",
    "description": "This is the Iphone 16",
    "price": "$1599"
  },
  {
    "id": 8,
    "name": "Iphone 17",
    "image": "https://i.pinimg.com/736x/48/0e/11/480e1167df2c4a244710ff75212780fc.jpg",
    "description": "This is the Iphone 17",
    "price": "$1699"
  }
]

const HomePage = () => {
  return (
    <>
      <section className='container mt-5'>
        {/* Slide */}
        <Slide slides={slide} />
      </section>
      {/* Brand Section */}
      <section>
        <Brand brands={brands} />
      </section>
      {/* product */}
      <section className="container mt-5 mb-5">
        <Product products={products} />
      </section>
      {/* product */}
      <section className="container mt-5 mb-5">
        <Product products={products} />
      </section>
    </>
  )
}

export default HomePage