import heroContent from "../content/hero.json";

function Hero() {
  return (
    <div className="hero-section">
      <div className="main-content">
        <h1 className="title">{heroContent.headerTitle}</h1>
        <p className="subtitle">{heroContent.headerSubtitleEn}</p>
      </div>
    </div>
  );
}

export default Hero;
