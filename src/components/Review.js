import React from "react";
import { review } from "../Data";
import qouteImg from "../assets/images/quote-img.png";
const Review = () => {
  return (
    <>
      <section className="review" id="review">
        <h1 className="heading">
          customer's <span>review</span>
        </h1>

        <div className="box-container">
          {review.map((item, index) => (
            <div className="box" key={index * Math.random()}>
              <img src={qouteImg} alt="" className="quote" />
              <p>
              I recently ordered from BiteBliss(a Resturant by Prince Kumar), and it was an 
              absolute delight. The food was not only incredibly delicious but also made with the 
              utmost care and attention to detail. Every bite was bursting with flavor, and the
               quality of ingredients was evident. The delivery was prompt, and the entire experience 
               left me thoroughly satisfied. Highly recommended!
              </p>
              <img src={item.img} className="user" alt="" />
              <h3>Ashwell Prince</h3>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Review;
