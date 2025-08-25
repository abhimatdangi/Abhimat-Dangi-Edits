import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import VideoItem from "@/components/VideoItem";
import { Button } from "@/components/ui/button";
import React, { useEffect, useRef } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Index = () => {
  const portfolioRef = useRef<HTMLElement | null>(null);
  const visibleSections = useScrollAnimation();
  
  useEffect(() => {
    // Structured data for SEO
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Abhimat Dangi",
      jobTitle: "Video Editor",
      url: "/",
      brand: {
        "@type": "Brand",
        name: "Abhimat Dangi"
      },
      makesOffer: {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cinematic Video Editing",
          serviceType: "Video Editing",
          areaServed: "Worldwide"
        }
      }
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    // Portfolio reveal animation on scroll
    let io: IntersectionObserver | null = null;
    const el = portfolioRef.current;
    if (el) {
      io = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("animate-open-clip");
          el.classList.remove("opacity-0");
          io?.disconnect();
        }
      }, { threshold: 0.25 });
      io.observe(el);
    }

    return () => {
      document.head.removeChild(script);
      io?.disconnect();
    };
  }, []);

  return (
    <>
      <header className="sticky top-4 z-50">
        <div className="container flex justify-center">
          <nav className="glass-nav rounded-full px-4 py-2 md:px-6 md:py-3 border text-sm w-full max-w-3xl flex items-center gap-6 justify-between" aria-label="Primary" role="navigation">
            <div className="flex items-center gap-6">
              <a href="#home" className="flex items-center gap-2 font-semibold">
                <img
                  src="/lovable-uploads/fcde01eb-5f23-4750-aa31-50576481be37.png"
                  alt="Abhimat Dangi logo portrait"
                  className="w-8 h-8 rounded-full object-cover"
                  loading="eager"
                />
                <span>Abhimat Dangi</span>
              </a>
              <div className="hidden md:flex items-center gap-5">
                <a href="#edits" className="text-muted-foreground hover:text-foreground transition-colors story-link">Edits</a>
                <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors story-link">Services</a>
                <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors story-link">Pricing</a>
                <a href="#workflow" className="text-muted-foreground hover:text-foreground transition-colors story-link">Workflow</a>
                <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors story-link">Testimonials</a>
                <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors story-link">Contact</a>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button asChild variant="hero" size="sm" className="hover-scale">
                <a href="https://calendly.com/prodbyabhimat/30min" target="_blank" rel="noopener noreferrer">Book a Call</a>
              </Button>
            </div>
          </nav>
        </div>
      </header>

      <main id="home">
        <Hero />

        <section id="services" className="container py-14 md:py-20">
          <div className={`max-w-2xl mx-auto text-center fade-in-up ${visibleSections.services ? 'animate' : ''}`}>
            <h2 className="text-3xl md:text-4xl mb-4 font-semibold"><span className="font-instrument italic text-primary">Services</span></h2>
            <p className="text-muted-foreground mb-8 md:mb-10">
              Three high-impact offerings. Clean, fast, conversion-focused.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              {/* Short-form (9:16) - Left Column */}
              <div className={`flex justify-center fade-in-left stagger-1 ${visibleSections.services ? 'animate' : ''}`}>
                <div className="w-full max-w-xs">
                  <ServiceCard
                    title="Short-form video editing"
                    type="short"
                  />
                </div>
              </div>
              
              {/* Right Column - Long-form and VSL */}
              <div className="space-y-6">
                {/* Long-form (16:9) */}
                <div className={`fade-in-right stagger-2 ${visibleSections.services ? 'animate' : ''}`}>
                  <ServiceCard
                    title="Long-form video editing"
                    type="long"
                  />
                </div>
                
                {/* VSL (16:9) */}
                <div className={`fade-in-right stagger-3 ${visibleSections.services ? 'animate' : ''}`}>
                  <ServiceCard
                    title="VSL (Video Sales Letter) editing"
                    type="vsl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="edits" ref={portfolioRef} className="container py-14 md:py-20 opacity-0">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl mb-4 font-semibold"><span className="font-instrument italic text-primary">Edits</span></h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">A showcase of my video editing work</p>
            </div>
            
            {/* Short-form Videos Section */}
            <div className="mb-16">
              <h3 className="text-xl font-medium mb-8 text-center text-muted-foreground">Short-form Videos</h3>
              
              {/* Minimal Grid for Short-form videos - 2x2 */}
              <div className="grid grid-cols-2 gap-6 max-w-lg mx-auto">
                <div>
                  <VideoItem 
                    id="sbPWa1VcjVE" 
                    ratio={9/16} 
                    title="Short-form Edit 1"
                    type="short"
                  />
                </div>
                <div>
                  <VideoItem 
                    id="xI3G7My3A7Q" 
                    ratio={9/16} 
                    title="Short-form Edit 2"
                    type="short"
                  />
                </div>
                <div>
                  <VideoItem 
                    id="-IaL88YLt6w" 
                    ratio={9/16} 
                    title="Short-form Edit 3"
                    type="short"
                  />
                </div>
                <div>
                  <VideoItem 
                    id="YpUUuBaIE5I" 
                    ratio={9/16} 
                    title="Short-form Edit 4"
                    type="short"
                  />
                </div>
              </div>
            </div>

            {/* Long-form Videos Section */}
            <div>
              <h3 className="text-xl font-medium mb-8 text-center text-muted-foreground">Long-form Videos</h3>
              
              {/* Minimal Grid for Long-form videos - Single column, centered */}
              <div className="space-y-8 max-w-3xl mx-auto">
                <div>
                  <VideoItem 
                    id="lweSyrR0Y3M" 
                    ratio={16/9} 
                    title="Long-form Edit 1"
                    type="long"
                  />
                </div>
                <div>
                  <VideoItem 
                    id="5jMidphvIHk" 
                    ratio={16/9} 
                    title="Long-form Edit 2"
                    type="long"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Words From Clients Section */}
        <section id="testimonials" className="container py-14 md:py-20 border-t border-border/50">
          <div className="max-w-4xl mx-auto">
            <div className={`text-center mb-12 fade-in-up ${visibleSections.testimonials ? 'animate' : ''}`}>
              <h2 className="text-3xl md:text-4xl mb-4 font-semibold">Words From <span className="font-instrument italic text-primary">Clients</span></h2>
              <p className="text-muted-foreground text-lg">What my clients say about working with me</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Testimonial 1 - Ania Skorek */}
              <div className={`testimonial-card glass-surface rounded-2xl p-6 hover-lift fade-in-up stagger-1 ${visibleSections.testimonials ? 'animate' : ''}`}>
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src="/ania.jpeg" 
                    alt="Ania Skorek" 
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div>
                    <h4 className="font-semibold">Ania Skorek</h4>
                    <p className="text-sm text-muted-foreground">Building Content</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic leading-relaxed">
                  "Professional, kind, works fast, and understands feedback so well! I recommend working with Abhimat as a must. Fast delivery and won't even get a meeting."
                </p>
              </div>

              {/* Testimonial 2 - Koshish Rijal */}
              <div className={`testimonial-card glass-surface rounded-2xl p-6 hover-lift fade-in-up stagger-2 ${visibleSections.testimonials ? 'animate' : ''}`}>
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src="/koshis.jpeg" 
                    alt="Koshish Rijal" 
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div>
                    <h4 className="font-semibold">Koshish Rijal</h4>
                    <p className="text-sm text-muted-foreground">Video Editor and Founder of Bascade</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic leading-relaxed">
                  "Working with Abhimat has been an absolute game-changer! He's done incredible edits for my clients—always creative, professional, and delivered on time. Highly recommend!"
                </p>
              </div>

              {/* Testimonial 3 - David Murumbi */}
              <div className={`testimonial-card glass-surface rounded-2xl p-6 hover-lift fade-in-up stagger-3 ${visibleSections.testimonials ? 'animate' : ''}`}>
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src="/david.jpeg" 
                    alt="David Murumbi" 
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div>
                    <h4 className="font-semibold">David Murumbi</h4>
                    <p className="text-sm text-muted-foreground">Founder of CreativeClip Studios</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic leading-relaxed">
                  "Abhimat is one of the hardest workers I know! He's willing to improve and always takes editing to another level. His client demands and work are always flawless."
                </p>
              </div>

              {/* Testimonial 4 - Wayne Danai */}
              <div className={`testimonial-card glass-surface rounded-2xl p-6 hover-lift fade-in-up stagger-4 ${visibleSections.testimonials ? 'animate' : ''}`}>
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src="/wayne.jpeg" 
                    alt="Wayne Danai" 
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div>
                    <h4 className="font-semibold">Wayne Danai</h4>
                    <p className="text-sm text-muted-foreground">Course Developer in GrowMyCourse.com</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic leading-relaxed">
                  "Abhimat is a great video editor and provides a very professional service. He responds well to revisions and has a 'can do' attitude. Excellent work!"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="container py-14 md:py-20">
          <div className={`max-w-4xl mx-auto text-center fade-in-up ${visibleSections.pricing ? 'animate' : ''}`}>
            <h2 className="text-3xl md:text-4xl mb-4 font-semibold">Simple, <span className="font-instrument italic text-primary">Transparent Pricing</span></h2>
            <p className="text-muted-foreground mb-4 text-lg max-w-2xl mx-auto">
              Clear pricing for quality results. No hidden fees, no surprises.
            </p>
            <div className="flex items-center justify-center gap-4 mb-12">
              <span className="text-sm text-muted-foreground">Payment via:</span>
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Payoneer</span>
                <span className="text-muted-foreground">or</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Remitly</span>
              </div>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Short-form Pricing Card */}
              <div className={`pricing-card rounded-2xl p-8 transition-all duration-300 fade-in-left stagger-1 ${visibleSections.pricing ? 'animate' : ''}`}>
                <div className={`text-center mb-6 fade-in-up stagger-1 ${visibleSections.pricing ? 'animate' : ''}`}>
                  <h3 className="text-2xl font-semibold mb-2">Short-form Videos</h3>
                  <p className="text-muted-foreground mb-4">Instagram Reels, TikToks, YouTube Shorts</p>
                  <div className={`text-4xl font-bold text-primary mb-2 fade-in-up stagger-2 ${visibleSections.pricing ? 'animate' : ''}`}>$30<span className="text-lg text-muted-foreground font-normal">/reel</span></div>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className={`flex items-center gap-3 fade-in-left stagger-3 ${visibleSections.pricing ? 'animate' : ''}`}>
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>48-hour turnaround time</span>
                  </div>
                  <div className={`flex items-center gap-3 fade-in-left stagger-4 ${visibleSections.pricing ? 'animate' : ''}`}>
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Unlimited revisions if needed</span>
                  </div>
                  <div className={`flex items-center gap-3 fade-in-left stagger-5 ${visibleSections.pricing ? 'animate' : ''}`}>
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Sound design</span>
                  </div>
                </div>
                
                <div className={`flex flex-col sm:flex-row gap-3 fade-in-up stagger-6 ${visibleSections.pricing ? 'animate' : ''}`}>
                  <Button asChild variant="default" size="lg" className="flex-1 hover-scale">
                    <a href="https://calendly.com/prodbyabhimat/30min" target="_blank" rel="noopener noreferrer">Book a Call</a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="flex-1 hover-scale border-primary/20 hover:border-primary">
                    <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">DM me</a>
                  </Button>
                </div>
              </div>
              
              {/* Long-form Pricing Card */}
              <div className={`pricing-card rounded-2xl p-8 transition-all duration-300 fade-in-right stagger-2 ${visibleSections.pricing ? 'animate' : ''}`}>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-semibold mb-2">Long-form Videos</h3>
                  <p className="text-muted-foreground mb-4">YouTube videos, Podcasts, Documentaries</p>
                  <div className="text-4xl font-bold text-primary mb-2">$20<span className="text-lg text-muted-foreground font-normal">/min</span></div>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Turnaround depends on video length</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Unlimited revisions if needed</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Storytelling techniques</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Animations</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild variant="default" size="lg" className="flex-1 hover-scale">
                    <a href="https://calendly.com/prodbyabhimat/30min" target="_blank" rel="noopener noreferrer">Book a Call</a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="flex-1 hover-scale border-primary/20 hover:border-primary">
                    <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">DM me</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>



        <section id="contact" className="container py-14 md:py-20">
          <div className={`max-w-4xl mx-auto text-center fade-in-up ${visibleSections.contact ? 'animate' : ''}`}>
            <h2 className="text-3xl md:text-5xl mb-6 font-semibold">Let's Create Something <span className="font-instrument italic text-primary">Powerful</span></h2>
            <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
              Ready to get started on your next project? Let's discuss your vision.
            </p>
            
            {/* Big Book a Call Button */}
            <div className={`mb-8 scale-in stagger-2 ${visibleSections.contact ? 'animate' : ''}`}>
              <Button asChild variant="hero" size="lg" className="hover-scale text-xl px-12 py-6 h-auto rounded-2xl shadow-2xl">
                <a href="https://calendly.com/prodbyabhimat/30min" target="_blank" rel="noopener noreferrer">Book a Call</a>
              </Button>
            </div>
            
            {/* Social Media Icons */}
            <div className={`flex items-center justify-center gap-6 fade-in-up stagger-3 ${visibleSections.contact ? 'animate' : ''}`}>
              <a href="https://linkedin.com/in/abhimatdangi" target="_blank" rel="noopener noreferrer" className="glass-surface p-4 rounded-full hover-lift transition-all hover:scale-110">
                <svg className="w-6 h-6 text-foreground" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://x.com/abhimatdangi" target="_blank" rel="noopener noreferrer" className="glass-surface p-4 rounded-full hover-lift transition-all hover:scale-110">
                <svg className="w-6 h-6 text-foreground" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://instagram.com/abhimatdangi" target="_blank" rel="noopener noreferrer" className="glass-surface p-4 rounded-full hover-lift transition-all hover:scale-110">
                <svg className="w-6 h-6 text-foreground" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Workflow Section */}
        <section id="workflow" className="container py-14 md:py-20 border-t border-border/50">
          <div className="max-w-5xl mx-auto">
            <div className={`text-center mb-16 fade-in-up ${visibleSections.workflow ? 'animate' : ''}`}>
              <h2 className="text-3xl md:text-4xl mb-4 font-semibold">How We <span className="font-instrument italic text-primary">Work Together</span></h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">A streamlined process that delivers results</p>
            </div>
            
            <div className="relative">
              {/* Vertical Progress Line */}
              <div className="absolute left-8 md:left-12 top-0 bottom-0 w-px bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20"></div>
              
              <div className="space-y-12">
                {/* Step 1 */}
                <div className={`workflow-item flex items-start gap-6 fade-in-up stagger-1 ${visibleSections.workflow ? 'animate' : ''}`}>
                  <div className="workflow-dot"></div>
                  <div className="flex-1">
                    <div className="workflow-card">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="workflow-step-number">01</div>
                        <h3 className="text-xl font-semibold">You Send Raw Footage</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        Share your raw footage along with brand guidelines, project details, and any specific requirements. This gives me everything I need to understand your vision.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className={`workflow-item flex items-start gap-6 fade-in-up stagger-2 ${visibleSections.workflow ? 'animate' : ''}`}>
                  <div className="workflow-dot"></div>
                  <div className="flex-1">
                    <div className="workflow-card">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="workflow-step-number">02</div>
                        <h3 className="text-xl font-semibold">I Edit Your Story</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        Using After Effects and Premiere Pro, I transform your raw footage into compelling stories with professional editing techniques, sound design, and visual effects that captivate your audience.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className={`workflow-item flex items-start gap-6 fade-in-up stagger-3 ${visibleSections.workflow ? 'animate' : ''}`}>
                  <div className="workflow-dot"></div>
                  <div className="flex-1">
                    <div className="workflow-card">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="workflow-step-number">03</div>
                        <h3 className="text-xl font-semibold">You Get Your Video</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        Receive your polished, publish-ready video delivered in the format you need. Ready to upload and start engaging your audience immediately.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className={`workflow-item flex items-start gap-6 fade-in-up stagger-4 ${visibleSections.workflow ? 'animate' : ''}`}>
                  <div className="workflow-dot"></div>
                  <div className="flex-1">
                    <div className="workflow-card">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="workflow-step-number">04</div>
                        <h3 className="text-xl font-semibold">Results Start Flowing</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        Watch your engagement soar. Your professionally edited content drives views, clicks, and conversions, delivering the results you're looking for.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/30 py-12 bg-gradient-to-t from-background/50 to-transparent">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <img
                src="/lovable-uploads/fcde01eb-5f23-4750-aa31-50576481be37.png"
                alt="Abhimat Dangi"
                className="w-12 h-12 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Abhimat Dangi</h3>
              <p className="text-muted-foreground">Video Editor & Creative Professional</p>
            </div>
            
            <nav className="flex flex-wrap items-center justify-center gap-6 mb-8">
              <a href="#edits" className="text-muted-foreground hover:text-foreground transition-colors">Edits</a>
              <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Services</a>
              <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
              <a href="#workflow" className="text-muted-foreground hover:text-foreground transition-colors">Workflow</a>
              <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">Testimonials</a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            </nav>
            
            <div className="flex items-center justify-center gap-4 mb-8">
              <a href="https://linkedin.com/in/abhimatdangi" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://x.com/abhimatdangi" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://instagram.com/abhimatdangi" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
            
            <div className="border-t border-border/20 pt-6">
              <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Abhimat Dangi. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Index;
