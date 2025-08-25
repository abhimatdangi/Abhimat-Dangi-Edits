import React from "react";
import noise from "@/assets/noise-texture.png";

const BackgroundLayer: React.FC = () => {
  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-10 app-bg"
      style={{
        background: `
          radial-gradient(circle at top left, hsl(var(--paper)) 0%, transparent 50%),
          radial-gradient(circle at top right, hsl(var(--brand-deep-red) / 0.03) 0%, transparent 50%),
          radial-gradient(circle at bottom left, hsl(var(--brand-deep-red) / 0.02) 0%, transparent 50%),
          radial-gradient(circle at bottom right, hsl(var(--paper)) 0%, transparent 50%),
          linear-gradient(135deg, 
            hsl(var(--paper)) 0%, 
            hsl(var(--paper)) 20%, 
            hsl(var(--brand-deep-red) / 0.01) 40%, 
            hsl(var(--paper)) 60%, 
            hsl(var(--brand-deep-red) / 0.02) 80%, 
            hsl(var(--paper)) 100%
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
