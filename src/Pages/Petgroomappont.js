import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
 // For local styles

const Petgroomappont = () => {
  const navigate = useNavigate();

  const [appointments, setAppointments] = useState([]); // State to store previous appointments
  const [appointmentDate, setAppointmentDate] = useState(''); // State for selected date
  const [appointmentTime, setAppointmentTime] = useState(''); // State for selected time

  // Function to handle booking an appointment
  const handleBookAppointment = (e) => {
    e.preventDefault();

    if (!appointmentDate || !appointmentTime) {
      alert("Please select both date and time");
      return;
    }

    const newAppointment = {
      date: appointmentDate,
      time: appointmentTime,
    };

    setAppointments([...appointments, newAppointment]); // Add new appointment to the list
    setAppointmentDate(''); // Clear form after submission
    setAppointmentTime('');
  };

  const handleBackClick = () => {
    navigate('/Petgroomappont');
  };

  return (
    <>
     
      {/* New Appointment Booking Section */}
      <div className="appointment-section">
        <h2>Book an Appointment</h2>
        <form onSubmit={handleBookAppointment}>
          <label>
            Select Date:
            <input
              type="date"
              value={appointmentDate}
              onChange={(e) => setAppointmentDate(e.target.value)}
              required
            />
          </label>
          <label>
            Select Time:
            <input
              type="time"
              value={appointmentTime}
              onChange={(e) => setAppointmentTime(e.target.value)}
              required
            />
          </label>
          <button type="submit">Book Appointment</button>
        </form>
      </div>

      {/* List of Previous Appointments */}
      <div className="appointment-list">
        <h2>Previous Appointments</h2>
        {appointments.length === 0 ? (
          <p>No previous appointments.</p>
        ) : (
          <ul>
            {appointments.map((appointment, index) => (
              <li key={index}>
                {appointment.date} at {appointment.time}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Pet Grooming Information Section */}
      <div className='f1'>   
        <figure className="snip1527">
          <div className="image">
            <img 
              src="https://s3-media0.fl.yelpcdn.com/bphoto/tIAa5U8E_7_HVMD31Tl32A/348s.jpg" 
              alt="pr-sample23" 
            />
          </div>
          <figcaption>
            <div className="date">
              <span className="day">28</span>
              <span className="month">Oct</span>
            </div>
            <h3>Nail Clipping <br /> Ear Cleaning</h3>
          </figcaption>
          <a href="#"></a>
        </figure>
        <figure className="snip1527 hover">
          <div className="image">
            <img 
              src="https://media.istockphoto.com/id/1421577226/photo/pretty-westhighland-terrier-puppy-and-hands-with-groomer-tools-isolated-on-white.jpg" 
              alt="pr-sample24" 
            />
          </div>
          <figcaption>
            <div className="date">
              <span className="day">17</span>
              <span className="month">Nov</span>
            </div>
            <h3>Professional pet groomer comes to your doorstep</h3>
          </figcaption>
          <a href="#"></a>
        </figure>
        <figure className="snip1527">
          <div className="image">
            <img 
              src="https://m.media-amazon.com/images/I/51SMnWvUJRL._AC_UF350,350_QL50_.jpg" 
              alt="pr-sample25" 
            />
          </div>
          <figcaption>
            <div className="date">
              <span className="day">01</span>
              <span className="month">Dec</span>
            </div>
            <h3>Bath With Shampoo & Conditioner</h3>
          </figcaption>
          <a href="#"></a>
        </figure>
        <figure className="snip1527 hover">
          <div className="image">
            <img 
              src="https://imgmedia.lbb.in/media/2021/03/60537983beb9b338b78eac5e_1616083331993.jpeg" 
              alt="pr-sample24" 
            />
          </div>
          <figcaption>
            <div className="date">
              <span className="day">17</span>
              <span className="month">Nov</span>
            </div>
            <h3>Professional pet groomer comes to your doorstep</h3>
          </figcaption>
        </figure>
      </div>

      <div className="container1 mt-5">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div className="description-box">
              <h2>How Pet Grooming works at your home?</h2>
              <h4>
                Pet Groomer brings the equipment <br />
                Professional pet groomer comes to your doorstep <br />
                Groomer cleans up <br />
                You're all set!
              </h4>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img 
              src="https://dm6g3jbka53hp.cloudfront.net/static-images/grooming-puppy-30122019.jpg" 
              alt="Boeket Alcudia" 
              className="img-fluid main-image3" 
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Petgroomappont;
