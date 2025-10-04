import React from "react";
import noise from "@/assets/noise-texture.png";

const BackgroundLayer: React.FC = () => {
  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-10 app-bg"
      style={{
        background: `
          radial-gradient(ellipse 2000px 1500px at top left, #000000 0%, transparent 70%),
          radial-gradient(ellipse 1800px 1200px at top right, #000000 0%, transparent 75%),
          radial-gradient(ellipse 1600px 1000px at bottom left, #000000 0%, transparent 80%),
          radial-gradient(ellipse 2200px 1800px at bottom right, #000000 0%, transparent 85%),
          linear-gradient(135deg, 
            #000000 0%, 
            #000000 30%, 
            #001122 50%, 
            #000000 70%, 
            #000000 100%
          ),
          url(${noise})
        `,
        backgroundSize: "100% 100%, 100% 100%, 100% 100%, 100% 100%, cover, 256px",
        backgroundRepeat: "no-repeat, no-repeat, no-repeat, no-repeat, no-repeat, repeat",
        backgroundAttachment: "fixed",
        opacity: 0.95
      }}
    />
  );
};

export default BackgroundLayer;
