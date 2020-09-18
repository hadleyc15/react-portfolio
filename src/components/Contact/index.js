import React from 'react';
import MyPicture from '../../assets/cover/profile-picture.jpg';

function Contact() {
  

  return (
    <section className="my-5">
    
    <div className="contact-img my-5">
        <img className="contact-img" src={MyPicture} alt="contact-img"></img>
        </div>
        <div className="my-2">
      <li className="contact-li">
      <i className="fa fa-phone-square" aria-hidden="true"/>
                    (480) 625-5318
      </li><br></br>
      <li className="contact-li">
        <i className="fa fa-envelope" aria-hidden="true"/>
            christopherhadley92@gmail.com
      </li><br></br>
      <p>Or click the envelope below and send me an email!</p>
    </div>
    
    </section>
  );
}

export default Contact;
