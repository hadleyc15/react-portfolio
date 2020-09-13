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
        Full time husband and father currently working in healthcare as a Dialysis Technician. Recently graduated from the University of Utah's Full Stack Web Development Bootcamp. My background is in healthcare. I have been working as a Dialysis Technician for four years.  Those four years in dialysis have taught me attention to detail as well as great communication skills.
        </p>
        <p>
         I love to solve puzzles and to push myself to understand not only the solution but the solving process as well.  I have a great desire to learn as well as to help others.  Coding has always interested me due to the problem solving nature and the fast paced environment that comes with it.
        </p>
      </div>
    </section>
  );
}

export default About;
