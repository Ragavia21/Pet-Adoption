import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Petgroom.css'; // For local styles

const Petgroom = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/Petgroomappont');
  };

  return (
    <>
    <div className="banner-area3">
        <div className="banner-text3">
          <h1>
          Pet Grooming service that comes to your home</h1>
          <h2>
          Book a Professional Pet Groomer Online, Whenever you need.
          </h2>
          <a href="#">Book a Professional Groomer</a>
          
        </div>
      </div>
      
      <div className='f1'>   
<figure class="snip1527">
  <div class="image"><img src="https://s3-media0.fl.yelpcdn.com/bphoto/tIAa5U8E_7_HVMD31Tl32A/348s.jpg" alt="pr-sample23" /></div>
  <figcaption>
    <div class="date"><span class="day">28</span><span class="month">Oct</span></div>
    <h3>Nail Clipping
Green Tick Icon
Ear Cleaning</h3>
    
  </figcaption>
  <a href="#"></a>
</figure>
<figure class="snip1527 hover">
  <div class="image"><img src="https://media.istockphoto.com/id/1421577226/photo/pretty-westhighland-terrier-puppy-and-hands-with-groomer-tools-isolated-on-white.jpg?s=612x612&w=0&k=20&c=Hf4hMRRMtyvuCw6cErEinMfBLFpUfRjaJd4m3svmfds=" alt="pr-sample24" /></div>
  <figcaption>
    <div class="date"><span class="day">17</span><span class="month">Nov</span></div>
    <h3>
    Professional pet groomer comes to your doorstep</h3>
   
  </figcaption>
  <a href="#"></a>
</figure>
<figure class="snip1527">
  <div class="image"><img src="https://m.media-amazon.com/images/I/51SMnWvUJRL._AC_UF350,350_QL50_.jpg" alt="pr-sample25" /></div>
  <figcaption>
    <div class="date"><span class="day">01</span><span class="month">Dec</span></div>
    <h3>Bath With Shampoo & Conditioner
Green Tick Icon
</h3>
  </figcaption>
  <a href="#"></a>
</figure>
<figure class="snip1527 hover">
  <div class="image"><img src="https://imgmedia.lbb.in/media/2021/03/60537983beb9b338b78eac5e_1616083331993.jpeg" alt="pr-sample24" /></div>
  <figcaption>
    <div class="date"><span class="day">17</span><span class="month">Nov</span></div>
    <h3> Professional pet groomer comes to your doorstep</h3>
  
  </figcaption>
  </figure>
  </div>
  <div class="container1 mt-5">
    <div class="row">
        <div class="col-md-6 d-flex justify-content-center align-items-center">
            <div class="description-box">
                <h2>How Pet Grooming works at your home?</h2>
                <h4>
                Pet Groomer brings the equipment
                Professional pet groomer comes to your doorstep
                
                Groomer cleans up
                You're all set!</h4>
            </div>
        </div>

        
        <div class="col-md-6 d-flex justify-content-center">
            <img src="https://dm6g3jbka53hp.cloudfront.net/static-images/grooming-puppy-30122019.jpg" alt="Boeket Alcudia" class="img-fluid main-image3" />
        </div>
    </div>
    </div>
    </>
  );
};

export default Petgroom;
