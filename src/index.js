import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'




const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <>
  <section>
    <div className="row">
      <div className="col">
        <div className="card">
          <img src="./images/1.jpg" alt="" />
          <div className="card-body">
            <h2 className="card-title">shoes1</h2>
            <p className="card-text">2020 New Trend Blade Running Mens
             Shoes Men Casual Male Sneakers Women Zapatos De Mujer 
             Hombre Plus Size 46 Zapatillas Sneaker</p>
             <button className='add-to-card'>add to card</button>
             
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src="./images/1.jpg" alt="" />
          <div className="card-body">
            <h2 className="card-title">shoes1</h2>
            <p className="card-text">2020 New Trend Blade Running Mens Shoes Men Casual Male Sneakers Women Zapatos
             De Mujer Hombre Plus Size 46 Zapatillas Sneaker</p>
             <button className='add-to-card'>add to card</button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src="./images/1.jpg" alt="" />
          <div className="card-body">
            <h2 className="card-title">shoes1</h2>
            <p className="card-text">2020 New Trend Blade Running Mens Shoes
             Men Casual Male Sneakers Women Zapatos De Mujer Hombre Plus Size 46 Zapatillas Sneaker</p>
            <button className='add-to-card'>add to card</button>
          </div>
        </div>
      </div>
    </div>
  </section>
  </>
 

);


