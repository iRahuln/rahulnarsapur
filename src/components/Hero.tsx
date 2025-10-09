import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import profilePic from "@/assets/profile.jpg"; // add near top imports


export const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Full-Stack Developer & Security Specialist";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="animate-slide-up space-y-8">
          {/* Profile Picture */}
          <div className="flex justify-center mb-8">
            <Avatar className="w-40 h-40 border-4 border-primary shadow-lg">
              <AvatarImage src={profilePic} alt="Rahul Narsapur" />
              <AvatarFallback className="text-4xl font-bold bg-primary text-primary-foreground">
                RN
              </AvatarFallback>
            </Avatar>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Rahul Narsapur
          </h1>
          
          <div className="h-8 mb-6">
            <p className="text-xl md:text-2xl text-muted-foreground">
              {displayText}
              <span className="animate-pulse">|</span>
            </p>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Passionate about cybersecurity, backend development, and creating exceptional web experiences
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              onClick={() => scrollToSection('projects')}
            >
              View Projects
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};
