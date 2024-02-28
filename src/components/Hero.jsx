import { logo } from "../assets/index";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz logo" />
        <button
          className="black_btn"
          type="button"
          onClick={() =>
            window.open("https://github.com/Ahmad-Maartmesrini", "_blank")
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
        Simplify your reading with <span className="orange_gradient">Sumz</span>
        , an open-source article summarizer that transforms lengthy articles
        into <span className="orange_gradient">clear</span> and{" "}
        <span className="orange_gradient">concise</span> summaries
      </h2>
    </header>
  );
};

export default Hero;
