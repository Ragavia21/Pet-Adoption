import React from 'react';
import './Breed.css';
import { useNavigate } from 'react-router-dom';

const Breed = () => {
  const navigate = useNavigate();

  const handleReadMoreClick = () => {
    navigate('/Pets');
  };

  const handleReadMoreClick1 = () => {
    navigate('/Cat');
  };
  const handleReadMoreClick2 = () => {
    navigate('/Bird');
  };

  return (
    <div>
      <section className="wrapper1">
        <div className="container-fostrap">
          <div className="content">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-4">
                  <div className="card">
                    <a className="img-card" href="#">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy8I4wELSUEh78KKmUufRi9Esd0PpjBPxL-A&s" alt="Dog"/>
                    </a>
                    <div className="card-content">
                      <h4 className="card-title">Dogs</h4>
                      <p className="content">
                        Domestic dogs are mostly kept as pets, though many breeds are capable of surviving on their own, whether it's in a forest or on city streets.
                      </p>
                    </div>
                    <div className="card-read-more">
                      <button onClick={handleReadMoreClick} className="btn btn-link btn-block">
                        BREEDS
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-4">
                  <div className="card">
                    <a className="img-card" href="#">
                      <img src="https://img.freepik.com/free-photo/close-up-kitten-indoors_23-2150782301.jpg?ga=GA1.1.994408943.1719805809&semt=sph" alt="Cat"/>
                    </a>
                    <div className="card-content">
                      <h4 className="card-title">Cats</h4>
                      <p className="content">
                        Cats conserve energy by sleeping for an average of 13 to14 hours a day. Cats have flexible bodies and teeth adapted for hunting small animals and rats.
                      </p>
                    </div>
                    <div className="card-read-more">
                      <button onClick={handleReadMoreClick1} className="btn btn-link btn-block">
                        BREEDS
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-4">
                  <div className="card">
                    <a className="img-card" href="#">
                      <img src="data:image/jpeg;base64,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" alt="Pet"/>
                    </a>
                    <div className="card-content">
                      <h4 className="card-title">Birds</h4>
                      <p className="content">
                      Birds are  group of warm-blooded constituting the class Aves characterised by feathers, toothless beaked jaws
                      </p>
                    </div>
                    <div className="card-read-more">
                      <button onClick={handleReadMoreClick2} className="btn btn-link btn-block">
                        BREEDS
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Breed;
