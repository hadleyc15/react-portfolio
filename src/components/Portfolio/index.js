import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'What-2-Watch',
      description: 'Full Stack Project',
      link: "https://sleepy-lake-06641.herokuapp.com/",
      repo: "https://github.com/hadleyc15/what-2-watch"
    },
    {
      name: 'Campground-Finder',
      description: 'Front End API Project',
      link: "https://hadleyc15.github.io/campground-finder/",
      repo: "https://github.com/hadleyc15/campground-finder"
    },
    {
      name: 'Weather-Dashboard',
      description: 'Api Call HTML/CSS/JS',
      link: "https://hadleyc15.github.io/weather-dashboard/",
      repo: "https://github.com/hadleyc15/weather-dashboard"
    },
    {
      name: 'Coding-Quiz',
      description: 'HTML/CSS/JS',
      link: "https://hadleyc15.github.io/coding-quiz/",
      repo: "https://github.com/hadleyc15/coding-quiz"
    },
    {
      name: 'Budget-Tracker',
      description: 'Node/Express/Mongoose',
      link: "https://boiling-springs-33052.herokuapp.com/",
      repo: "https://github.com/hadleyc15/pwa-budget-tracker"
    },
    {
      name: 'Tech-Blog',
      description: 'MySQL/Sequelize',
      link: "https://radiant-spire-51227.herokuapp.com/",
      repo: "https://github.com/hadleyc15/tech-blog"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
