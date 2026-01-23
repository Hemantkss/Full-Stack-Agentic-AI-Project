import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-badge">
          ⚡ Autonomous Agent Platform
        </div>

        <h1 className="hero-title">
          Agentic AI <br />
          <span>That Thinks & Acts</span>
        </h1>

        <p className="hero-subtitle">
          Autonomous agents built with LangGraph,
          memory, tools, and reasoning.
        </p>

        <div className="hero-actions">
          <button className="btn primary" onClick={() => navigate("/chat")}>
            Launch Agent
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
