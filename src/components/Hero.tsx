import React from "react";
import heroImage from "/lovable-uploads/fcde01eb-5f23-4750-aa31-50576481be37.png";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section
      className="relative overflow-hidden min-h-screen flex items-center"
      aria-label="Hero section introducing Abhimat Dangi"
    >
      <div className="container py-16 md:py-24 relative z-10">
        <div className="flex flex-col items-center text-center gap-6 animate-enter">
          <div className="glass-surface rounded-2xl p-2 border">
            <img
              src={heroImage}
              alt="Portrait of Abhimat Dangi, professional video editor"
              loading="eager"
              className="rounded-xl w-[200px] h-[200px] md:w-[240px] md:h-[240px] object-cover shadow-elegant"
            />
          </div>

        
          <h1 className="font-sans text-3xl md:text-4xl lg:text-5xl leading-tight max-w-3xl">
            I’m <span className="font-instrument italic text-primary">Abhimat Dangi</span>, a video editor specializing in short‑form, long‑form, and VSL content that drives results.
          </h1>

          <div className="mt-2 flex justify-center">
            <Button asChild variant="default" size="lg" className="shadow-elegant hover-scale">
              <a href="#edits">View Edits</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
