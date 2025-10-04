import React from "react";
import { cn } from "@/lib/utils";

type ServiceCardProps = {
  title: string;
  type: "short" | "long" | "vsl";
  className?: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ title, type, className }) => {
  const getAspectRatio = () => {
    switch (type) {
      case "short":
        return "aspect-[9/14]"; // Slightly shorter than 9:16 for better fit
      case "long":
        return "aspect-[16/9]"; // 16:9 for long-form
      case "vsl":
        return "aspect-[16/9]"; // 16:9 for VSL
      default:
        return "aspect-[16/9]";
    }
  };

  const getDisplayNumber = () => {
    switch (type) {
      case "short":
        return "9:16";
      case "long":
        return "16:9";
      case "vsl":
        return "VSL";
      default:
        return "";
    }
  };

  const getDisplayText = () => {
    switch (type) {
      case "short":
        return "Short-form";
      case "long":
        return "Long-form";
      case "vsl":
        return "Video Sales Letter";
      default:
        return title;
    }
  };

  const getNumberSizeClass = () => {
    switch (type) {
      case "short":
        return "service-card-number-short";
      case "long":
        return "service-card-number-long";
      case "vsl":
        return "service-card-number-vsl";
      default:
        return "service-card-number-long";
    }
  };

  return (
    <article 
      className={cn(
        "glass-surface rounded-lg overflow-hidden border animate-fade-in hover-lift transition-all hover:ring-2 hover:ring-primary/25 hover:shadow-elegant relative",
        getAspectRatio(),
        className
      )}
    >
      {/* Background gradient and noise effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-primary/6 opacity-80"></div>
      <div 
        className="absolute inset-0 opacity-[0.08] mix-blend-soft-light"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
          backgroundSize: "300px 300px"
        }}
      ></div>
      
      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center p-6 text-center">
        {/* Large background number/text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span 
            className={cn("service-card-number opacity-[0.06] leading-none select-none", getNumberSizeClass())}
          >
            {getDisplayNumber()}
          </span>
        </div>
        
        {/* Foreground text with animated gradient */}
        <div className="relative z-10">
          <h3 className="service-card-gradient-text font-semibold text-2xl md:text-3xl leading-tight">
            {getDisplayText()}
          </h3>
        </div>
      </div>
    </article>
  );
};

export default ServiceCard;
