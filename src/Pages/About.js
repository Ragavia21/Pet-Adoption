import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about-header">
        <h1>About Us</h1><br/><br/>
        <p>At Pets kingdom, our mission is to rescue, rehabilitate, and rehome animals in need. <br/>We are committed to providing a safe and loving environment for every pet that comes through our doors,<br/> ensuring they find the forever homes they deserve.</p>
      </div>
      <div className="about-content">
        <div className="about-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFNr-DBZ7qvQ-QApjMQJDtoQRc6R_VBp9a0swB_9vwW4TSpcDUBMJv0VsW_PO70Y8wPIs&usqp=CAU" alt="Team Member" />
          <h2>Jenne</h2>
          <p>Doctor</p>
        </div>
        <div className="about-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsi85CtOCo2DmQtqtSjkR0Nh4Fv2eeK485cFDW4FKtlVyEDuQNGdE44PkXn2jw2oE5aus&usqp=CAU" alt="Team Member" />
          <h2>Pedigree</h2>
          <p>Foods</p>
        </div>
        <div className="about-card">
          <img src="https://bestfriendspetcare.com/wp-content/uploads/2023/05/pet-adoption-main-photo-resize-scaled-2.jpg" alt="Team Member" />
          <h2>Sam Wilson</h2>
          <p>Adoption</p>
        </div>
      </div>
    </div>
  );
};

export default About;
