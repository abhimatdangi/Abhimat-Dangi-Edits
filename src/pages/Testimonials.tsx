import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import BackgroundLayer from "@/components/BackgroundLayer";
import CursorGlow from "@/components/CursorGlow";

const Testimonials = () => {
  const [visibleSections, setVisibleSections] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.id) {
            setVisibleSections(prev => ({
              ...prev,
              [entry.target.id]: entry.isIntersecting
            }));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '-100px 0px'
      }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <BackgroundLayer />
      <CursorGlow />
      
      {/* Header Navigation */}
      <header className="fixed top-0 w-full z-50 glass-header">
        <nav className="container flex items-center justify-between py-4">
          <div className="font-semibold text-xl">
            <a href="/" className="hover:text-primary transition-colors">Abhimat Dangi</a>
          </div>
          <div className="flex items-center gap-6">
            <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</a>
            <a href="/view-edits" className="text-muted-foreground hover:text-foreground transition-colors">View Edits</a>
            <a href="/testimonials" className="text-primary font-medium">Testimonials</a>
            <Button size="sm" className="ml-2">
              <a href="mailto:abhimatdangi@gmail.com">Contact</a>
            </Button>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        <section id="testimonials" className="container py-14 md:py-20">
          <div className="max-w-4xl mx-auto">
            <div className={`text-center mb-12 fade-in-up ${visibleSections.testimonials ? 'animate' : ''}`}>
              <h1 className="text-4xl md:text-5xl mb-4 font-semibold">Words From <span className="font-instrument italic text-primary">Clients</span></h1>
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

            {/* CTA Section */}
            <div className="text-center mt-16">
              <h3 className="text-2xl font-semibold mb-4">Ready to work together?</h3>
              <p className="text-muted-foreground mb-6">Let's bring your vision to life with professional video editing</p>
              <Button size="lg" className="px-8">
                <a href="mailto:abhimatdangi@gmail.com">Get Started</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Testimonials;
