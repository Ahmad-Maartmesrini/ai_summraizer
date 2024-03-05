import { logo } from "../assets/index";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <a href="https://ai-summraizer.vercel.app">
          <img src={logo} alt="Sumz logo" />
        </a>
        <button
          className="black_btn"
          type="button"
          onClick={() =>
            window.open(
              "https://github.com/Ahmad-Maartmesrini/ai_summraizer",
              "_blank"
            )
          }
        >
          GitHub
        </button>
      </nav>
      <h1 className="head_text">
        Summarize Articles with <br className="  max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        <span className="orange_gradient">Enhance</span> your reading experience
        with <span className="orange_gradient">Sumz</span>, an open-source
        article summarizer that simplifies lengthy articles into{" "}
        <span className="orange_gradient">clear</span> and{" "}
        <span className="orange_gradient">concise</span> summaries.{" "}
        <span className="orange_gradient">Explore</span> the option to translate
        these summaries into <span className="orange_gradient">10</span>{" "}
        different languages for a truly global perspective.
      </h2>
    </header>
  );
};

export default Hero;
