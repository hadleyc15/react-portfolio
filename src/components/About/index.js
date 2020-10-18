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
        I recently graduated from the University of Utah's Full Stack Web Development Bootcamp. I have been working as a Dialysis Technician for four years. Those four years have taught me attention to detail as well as great communication skills.
        </p>
        <p>
        I love to solve the puzzles I encounter when coding. I find fulfillment in pushing myself to understand not only the answer but the process as well. I have a great desire to learn.
        </p>
      </div>
    </section>
  );
}

export default About;
