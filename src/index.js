import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'




const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
<>
<header>header</header>
<section>
  <div className="row">
    <div className="col">
      <div className="card">
        <img src="./images/1.jpg" alt="" />
        <div className="card-body">
          <h5 className="card-title">shoes1</h5>
          <p className="card-text">Men's Sneakers Running Shoes Tennis Shoes Comfort Shoes Casual Outdoor Daily Walking Shoes PU Black / Red White Dark Blue Fall</p>
          <button className='add-to-card'>add to card</button>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card">
        <img src="./images/1.jpg" alt="" />
        <div className="card-body">
          <h5 className="card-title">shoes1</h5>
          <p className="card-text">Men's Sneakers Running Shoes Tennis Shoes Comfort Shoes Casual Outdoor Daily Walking Shoes PU Black / Red White Dark Blue Fall</p>
          <button className='add-to-card'>add to card</button>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card">
        <img src="./images/1.jpg" alt="" />
        <div className="card-body">
          <h5 className="card-title">shoes1</h5>
          <p className="card-text">Men's Sneakers Running Shoes Tennis Shoes Comfort Shoes Casual Outdoor Daily Walking Shoes PU Black / Red White Dark Blue Fall</p>
           <button className='add-to-card'>add to card</button>
        </div>
      </div>
    </div>
  </div>
</section>
<footer>footer
</footer>
</>
);


