import React from 'react';
import ProfilePicture from '../../assets/cover/family-3.jpg';

function About() {
  return (
    <section className="my-5">
      <div className="my-2">
        <div className="profile-img my-5">
        <img src={ProfilePicture} alt="profile"></img>
        </div>
        <p>
        Full time husband and father currently working in healthcare as a Dialysis Technician. Recently graduated from the University of Utah's Full Stack Web Development Bootcamp.
        </p>
        <p>
        Looking for a job as a Junior Web Developer.
        </p>
      </div>
    </section>
  );
}

export default About;
