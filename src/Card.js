import Button from './Button'
import './Card.css'
function Card(){
    return(
        <div className="col">
        <div className="card">
          <img className='card-img' src="./images/1.jpg" alt="" />
          <div className="card-body">
            <h2 className="card-title">shoes1</h2>
            <p className="card-text">2020 New Trend Blade Running Mens
             Shoes Men Casual Male Sneakers Women Zapatos De Mujer 
             Hombre Plus Size 46 Zapatillas Sneaker</p>
            <Button />
             
          </div>
        </div>
      </div>
    )
}
export default Card