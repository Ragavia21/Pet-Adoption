import React from 'react';
import './Pettrain.css';  // Import your CSS file for styling
import { useNavigate } from 'react-router-dom';  // Importing navigation functionality

const Pettrain = () => {
  const navigate = useNavigate();  // Initialize navigate function

  // Navigation handler for going back to the homepage
  const handleBackClick = () => {
    navigate('/');  // Example: Navigate to home page on button click
  };

  return (
    <>
      <div className="banner-area">
        <div className="banner-text1">
          <p>
            Dog Training Service at Home
          </p>
          <h2>Dog-friendly, one-on-one dog training</h2>
          <a href="#">Book a Session</a>
          
         
        </div>
      </div>

      <figure class="snip1527">
  <div class="image"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPw4P6J73W9pwNwFds-JLtkH1eD5Ka_BunhA&s" alt="pr-sample23" /></div>
  <figcaption>
    <div class="date"><span class="day">28</span><span class="month">Oct</span></div>
    <h3>Management Techniques
    We give you the tools to be successful.</h3>
    
  </figcaption>
  <a href="#"></a>
</figure>
<figure class="snip1527 hover">
  <div class="image"><img src="https://www.shutterstock.com/image-photo/puppy-lying-on-artificial-grass-600nw-1982917676.jpg" alt="pr-sample24" /></div>
  <figcaption>
    <div class="date"><span class="day">17</span><span class="month">Nov</span></div>
    <h3>
    Strengthen Bond  gap between you and your dog.</h3>
   
  </figcaption>
  <a href="#"></a>
</figure>
<figure class="snip1527">
  <div class="image"><img src="https://media.licdn.com/dms/image/sync/D5627AQFEvxeDcbvqvg/articleshare-shrink_800/0/1711269844816?e=2147483647&v=beta&t=Ag5gzPXUyWDrqJHY-cFWO2knXJS85M_DxZg0t9glr0s" alt="pr-sample25" /></div>
  <figcaption>
    <div class="date"><span class="day">01</span><span class="month">Dec</span></div>
    <h3>
      your dog's confidence to explore surroundings.
</h3>
  </figcaption>
  <a href="#"></a>
</figure>
<figure class="snip1527 hover">
  <div class="image"><img src="https://www.shutterstock.com/image-photo/training-thoroughbred-cat-treat-room-600nw-2092413028.jpg" alt="pr-sample24" /></div>
  <figcaption>
    <div class="date"><span class="day">17</span><span class="month">Nov</span></div>
    <h3> Engaging your pet's mind is as important as physical exercise.</h3>
  
  </figcaption>
  </figure>

   </>
  );
}

export default Pettrain;
