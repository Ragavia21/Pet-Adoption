import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Consult.css'; // For local styles

const Consult = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <>
    <div className="banner-area1">
        <div className="banner-text">
          <h1>
          Book Online Vet Consultation Consult </h1>
          <h2>
          Book Trusted Veterinary Consultation For Pets
          </h2>
          <a href="#">Book a vet Consultation</a>
          
        </div>
      </div>
      <div className="container">
        <div className="contentLeft">
          <div className="row">
            <div className="imgWrapper">
              <img 
                src="https://media.istockphoto.com/id/148198319/photo/veterinarian-petting-dog-in-office.jpg?s=612x612&w=0&k=20&c=4Xyfy2taHChnZHhesXH_Vp_4VFAb-cla9nprpmJIG-g=" 
                alt="Image 1"
              />
            </div>
            <div className="imgWrapper">
              <img 
                src="data:image/jpeg;base64,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" 
                alt="Image 2"
              />
            </div>
            <div className="imgWrapper">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvStZkkPlF9qoHRddvD9o1Pa6-gi6rm591RA&s" 
                alt="Image 3"
              />
            </div>
            <div className="imgWrapper">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoPzyVnQcis6SkQ752wjTqFpa74m68YF8tSw&s" 
                alt="Image 4"
              />
            </div>
          </div>
        </div>
        
        <div className="contentRight">
          <div className="content">
            <h1>How Online Veterinarian Service works?</h1>
           
            <p className='p1'>
            Ask a question</p>
            <p> Ask anything related to health, nutrition, behavior of your Pet
            </p>
            <p className='p1'>
            Tell us more about your pet and yourself</p>
            <p> You can even upload photos and medical documents if you desire
            </p>
            <p className='p1'>
            Receive a response from veterinarian
</p>
            <p> A real Veterinarian answers your questions and/or begins LIVE chat with you
            </p>
          </div>
        </div>
      </div>
      <div class="container1 mt-5">
    <div class="row">
        <div class="col-md-6 d-flex justify-content-center align-items-center">
            <div class="description-box">
                <h2>Curated by vets
                for your pet's unique needs</h2>
                <h4>
                24/7 advice from a India’s Qualified vet wherever you are.
                Avoid the Stress of Travel and Save Time.
                Available from any smartphone, or desktop device</h4>
            </div>
        </div>

        
        <div class="col-md-6 d-flex justify-content-center">
            <img src="https://dm6g3jbka53hp.cloudfront.net/static-images/dog-on-bed-30032020.png" alt="Boeket Alcudia" class="img-fluid main-image" />
        </div>
    </div>
</div>

    </>
  );
};

export default Consult;
