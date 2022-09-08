import "./Projects.css";
import FeaturedProjectCard from "./FeaturedProjectCard";
import ProjectCard from "./ProjectCard";

function ProjectRow(props) {
  let { projects } = props;
  return (
    <>
      <div className="row">{projects}</div>
      <br />
      <br />
    </>
  );
}

function Projects(props) {
  let { projectData } = props;
  if (projectData == null) {
    let featuredProjects = [];
    let projectRowsList = [];
    let projectRow = [];

    for (let index = 0; index < featuredProjects.length; index++) {
      let projectDetails = featuredProjects[index];
      let featuredProjectCard = (
        <FeaturedProjectCard
          key={projectDetails.projectTitle}
          {...projectDetails}
        />
      );
      projectRow.push(featuredProjectCard);
      if (index % 2 === 1) {
        let newProjectRow = (
          <ProjectRow key={index / 2 - 1} projects={projectRow} />
        );
        projectRow = [];
        projectRowsList.push(newProjectRow);
      }
    }
    if (projectRow.length !== 0) {
      let newProjectRow = (
        <ProjectRow key={featuredProjects.length - 1} projects={projectRow} />
      );
      projectRow = [];
      projectRowsList.push(newProjectRow);
    }
    let projects = [
      {
        projectTitle: "Memories",
        projectTagline:
          "A MERN stack based application that allow users to post various intersting events happened in their lives.",
        github: "",
        website: "",
      },
      {
        projectTitle: "The-Hours",
        projectTagline:
          "A ReactJS based news application that allows users to read news from various sources.",
        github: "",
        website: "",
      },
      {
        projectTitle: "Portfolio",
        projectTagline:
          "A ReactJS based portfolio website that allows users to view my projects and experience.",
        github: "",
        website: "",
      },
    ];
    let otherProjectRowsList = [];
    for (let index = 0; index < projects.length; index++) {
      const element = projects[index];
      let newProjectCard = <ProjectCard key={index} {...element} />;
      otherProjectRowsList.push(newProjectCard);
    }
    return (
      <div className="projects">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 text-center">
              <h1 className="projects-title">Projects</h1>
            </div>
          </div>
          <br />
          <br />
          <div className="row">
            <div className="col-md-10 col-md-offset-1 text-center">
              <p className="projects-text">
                Welcome to the tinker lab. I keep on building stuff, trying to
                solve any modern day life problem I feel can be solved using
                code.
              </p>
            </div>
          </div>
          <br />
          <br />
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center">
              <h3 className="projects-subtitle"></h3>
            </div>
          </div>
          <br />
          <br />
          {projectRowsList}
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center">
              <h3 className="projects-subtitle"></h3>
            </div>
          </div>
          <br />
          <br />
          <div className="row">{otherProjectRowsList}</div>
        </div>
      </div>
    );
  } else {
    let featuredProjects = projectData["featured-projects"];
    let projectRowsList = [];
    let projectRow = [];
    for (let index = 0; index < featuredProjects.length; index++) {
      let projectDetails = featuredProjects[index];
      let featuredProjectCard = (
        <FeaturedProjectCard
          key={projectDetails.projectTitle}
          {...projectDetails}
        />
      );
      projectRow.push(featuredProjectCard);
      if (index % 2 === 1) {
        let newProjectRow = (
          <ProjectRow key={index / 2 - 1} projects={projectRow} />
        );
        projectRow = [];
        projectRowsList.push(newProjectRow);
      }
    }
    if (projectRow.length !== 0) {
      let newProjectRow = (
        <ProjectRow key={featuredProjects.length - 1} projects={projectRow} />
      );
      projectRow = [];
      projectRowsList.push(newProjectRow);
    }
    let projects = projectData["projects"];
    let otherProjectRowsList = [];
    for (let index = 0; index < projects.length; index++) {
      const element = projects[index];
      let newProjectCard = <ProjectCard key={index} {...element} />;
      otherProjectRowsList.push(newProjectCard);
    }
    return (
      <div className="projects">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 text-center">
              <h1 className="projects-title">Projects</h1>
            </div>
          </div>
          <br />
          <br />
          <div className="row">
            <div className="col-md-10 col-md-offset-1 text-center">
              <p className="projects-text">
                Welcome to the tinker lab. I keep on building stuff, trying to
                solve any modern day life problem I feel can be solved using
                code.
              </p>
            </div>
          </div>
          <br />
          <br />
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center">
              <h3 className="projects-subtitle"></h3>
            </div>
          </div>
          <br />
          <br />
          {projectRowsList}
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center">
              <h3 className="projects-subtitle"></h3>
            </div>
          </div>
          <br />
          <br />
          <div className="row">{otherProjectRowsList}</div>
        </div>
      </div>
    );
  }
}

export default Projects;
