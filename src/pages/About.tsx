import './About.css';

export function About() {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>About Me</h1>
      </div>

      <section className="about-section bio-section">
        <h2>Who I Am</h2>
        <p>
          I'm a full-stack web developer with a passion for building scalable, 
          user-centric applications. With experience across the entire development 
          stack, I create solutions that solve real problems and deliver measurable value. 
          I thrive in collaborative environments and am driven by the challenge of 
          turning complex requirements into elegant, maintainable code. Beyond coding, 
          I'm committed to continuous learning and staying current with emerging technologies 
          and best practices in web development.
        </p>
      </section>

      <section className="about-section role-section">
        <h2>The Role I'm Seeking</h2>
        <p>
          I'm looking for a <strong>Full-Stack Web Developer</strong> position where I can leverage 
          my expertise in both frontend and backend development. I want to work on impactful projects 
          with a team that values code quality, user experience, and innovation. I'm particularly 
          interested in roles that involve building scalable systems, mentoring junior developers, 
          and having a say in architectural decisions.
        </p>
      </section>

      <section className="about-section strengths-section">
        <h2>My Strengths</h2>
        <div className="strengths-grid">
          <div className="strength-item">
            <h3>End-to-End Development</h3>
            <p>
              I can design, build, and deploy complete applications from database 
              to user interface, making me a true full-stack developer who understands 
              the entire product lifecycle.
            </p>
          </div>
          <div className="strength-item">
            <h3>Collaboration & Communication</h3>
            <p>
              I work effectively with cross-functional teams including designers, 
              product managers, and other developers. I'm committed to clear 
              communication and knowledge sharing.
            </p>
          </div>
          <div className="strength-item">
            <h3>Problem Solving</h3>
            <p>
              I approach technical challenges systematically, breaking down complex 
              problems into manageable solutions and always considering the user's perspective.
            </p>
          </div>
          <div className="strength-item">
            <h3>Code Quality & Best Practices</h3>
            <p>
              I'm passionate about writing clean, maintainable code, documenting my work, 
              and following industry best practices. I believe in the long-term impact 
              of good code architecture.
            </p>
          </div>
          <div className="strength-item">
            <h3>Continuous Learning</h3>
            <p>
              The tech landscape evolves constantly, and I stay ahead by actively learning 
              new technologies, frameworks, and methodologies to deliver modern solutions.
            </p>
          </div>
          <div className="strength-item">
            <h3>User-Centric Thinking</h3>
            <p>
              I don't just build features; I understand the why behind them. Every decision 
              I make is filtered through the lens of how it impacts the user experience.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
