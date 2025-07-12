import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-0 mt-0 sm:mt-0"
    >
      <img src='arjun.jpg' alt="" className="h-40 w-40 items-center rounded-full right-5 mb-5 " id="image"/>
      <div className="container max-w-5xl mx-auto text-center z-10">

        
        <div className="space-y-6">

          
          <h1 className="text-2xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Arjun
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Maurya
            </span>
          </h1>

          <p className="text-sm md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
           I'm a web developer and UI/UX designer.
            <span className=""> I create fast, responsive, and user-friendly websites that look great and work perfectly.</span>
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className=" absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground  mt-1 sm:mt-0"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
