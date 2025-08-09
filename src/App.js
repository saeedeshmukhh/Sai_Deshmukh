import projects from './data/projects';
import './App.css';
import myImg from './assets/me.jpeg';


function App() {
  return (
    <><div className="navbar">
      <a href="#hero">Home</a>
      <a href="#projects">Projects</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </div><div className="container">
        <div id="hero" className="hero">
          <img src={myImg} alt="Sai Deshmukh" className="profile-pic" />
          <h1>Hi, I'm Sai Deshmukh 👋</h1>
          <p>Aspiring Software Engineer | Web & AI Enthusiast</p>
          <div className="links">
            <a href="https://github.com/saeedeshmukhh" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/saideshmukhh16" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="mailto:saideshmukhh@gmail.com">Email</a>
            <a href="/Sai_Deshmukh_Resume.pdf" target="_blank" rel="noreferrer">Resume</a>
          </div>
        </div>
        <div id="projects" className="projects-section">
          <h2>Projects</h2>
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.github} target="_blank" rel="noreferrer">View on GitHub</a>
            </div>
          ))}
        </div>
        <div id="about" className="about-section">
          <h2>About Me</h2>
          <p>
            I'm Sai Deshmukh, a passionate software engineer with a love for full-stack development,
            AI, and building tools that make people's lives easier. I enjoy creating scalable apps,
            automating tasks, and continuously learning new technologies.
          </p>
        </div>
        <div id="contact" className="contact-section">
          <h2>Contact</h2>
          <p>You can reach me at:</p>
          <p><strong>Email:</strong> <a href="mailto:saideshmukh2206@gmail.com">saideshmukh2206@gmail.com</a></p>
          <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/saideshmukh16" target="_blank" rel="noreferrer">/saideshmukh16</a></p>
        </div>
      </div></>
  );
}

export default App;