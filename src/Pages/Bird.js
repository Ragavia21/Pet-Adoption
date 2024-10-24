// Pets.jsx
import React from 'react';
import './Bird.css';
const Bird = () => {
  return (
    <div class="container4">
  <div class="card-deck2">
    <div class="card">
    <img class="card-img-top" src="https://www.coopsandcages.com.au/wp-content/uploads/2014/01/7-Bird-Bridled-Titmouse1.jpg" alt="Card image cap"/>
    <div class="card-body">
        <h5 class="card-title">Bridled Titmouse</h5>
        <p class="card-text">Life span
		10 – 15 years</p>
		
    <br/><button>ADOPT</button>
      </div>
    </div>
    <div class="card">
      <img class="card-img-top" src="https://www.coopsandcages.com.au/wp-content/uploads/2014/01/8-Bird-Budgerigar1.jpg" alt="Card image cap"/>
      <div class="card-body">
        <h5 class="card-title">Budgerigars</h5>
        <p class="card-text">Life span
		
		10 years
		</p>
		<br/><button>ADOPT</button>
      </div>
    </div>
    <div class="card">
      <img class="card-img-top" src="https://www.coopsandcages.com.au/wp-content/uploads/2014/01/6-Bird-Border-Canary1.jpg" alt="Card image cap"/>
      <div class="card-body">
        <h5 class="card-title">Border Canary</h5>
        <p class="card-text">Life span
		
		10 – 12 years</p>
		<br/><button>ADOPT</button>
      </div>
    </div>
    <div class="card">
      <img class="card-img-top" src="https://www.coopsandcages.com.au/wp-content/uploads/2014/01/4-Australian-King-Parrot1.jpg" alt="Card image cap"/>
      <div class="card-body">
        <h5 class="card-title">Australian King Parrot</h5>
		<p class="card-text">Life Span
			10 – 14 years</p>

      <br/><button>ADOPT</button>
      </div>
    </div>
  </div>
</div>
  );
}

export default Bird;