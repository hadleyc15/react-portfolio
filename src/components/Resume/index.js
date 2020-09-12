import React from 'react';

function Resume() {
  return (
    <section className="my-5">
      <div className="my-2">
      <p>
        Download my <a href="https://docs.google.com/document/d/1GLgEpSxWVw4yJPXfSIAWKjf6dNuEb0-cj266wDl582c/edit?usp=sharing">resume</a>
        </p>
        <h3>Front-end Proficiencies</h3>
        <ul className="skills">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>Responsive design</li>
          <li>React</li>
        </ul>
        <h3>Back-end Proficiencies</h3>
        <ul className="skills">
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
