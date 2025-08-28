import React, { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import BackgroundLayer from "@/components/BackgroundLayer";
import CursorGlow from "@/components/CursorGlow";
import VideoItem from "@/components/VideoItem";

const ViewEdits = () => {
  const portfolioRef = useRef<HTMLElement | null>(null);
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
      observer.disconnect();
      io?.disconnect();
    };
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
            <a href="/view-edits" className="text-primary font-medium">View Edits</a>
            <a href="/testimonials" className="text-muted-foreground hover:text-foreground transition-colors">Testimonials</a>
            <Button size="sm" className="ml-2">
              <a href="mailto:abhimatdangi@gmail.com">Contact</a>
            </Button>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        <section id="edits" ref={portfolioRef} className="container py-14 md:py-20 opacity-0">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl mb-4 font-semibold">My <span className="font-instrument italic text-primary">Edits</span></h1>
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

            {/* CTA Section */}
            <div className="text-center mt-16">
              <h3 className="text-2xl font-semibold mb-4">Like what you see?</h3>
              <p className="text-muted-foreground mb-6">Let's create something amazing together</p>
              <Button size="lg" className="px-8">
                <a href="mailto:abhimatdangi@gmail.com">Work With Me</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ViewEdits;
