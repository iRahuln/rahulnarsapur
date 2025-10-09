import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Projects = () => {
  const projects = [
    {
      title: "Diamora Jewelers",
      description: "E-commerce jewelry store built on Shopify, featuring an elegant catalog of premium rings and jewelry pieces.",
      tags: ["Shopify", "E-Commerce", "Digital Marketing"],
      demoUrl: "https://diamorajewelers.com/"
    },
    {
      title: "Dhansarjan Nidhi - Company Profile",
      description: "A modern, responsive marketing site presenting services and contact flows, built with a reusable component library.",
      tags: ["React", "TypeScript", "Vite", "Tailwind CSS"],
      demoUrl: "https://dhansarjannidhi.com/"
    },
    {
      title: "GV Nutrition",
      description: "A lightweight inventory and POS web app with product management, invoicing, and PDF reports.",
      tags: ["PHP", "MySQL", "AJAX", "Inventory Management"],
      codeUrl: "https://github.com/iRahuln/GV-Nutrition",
      demoUrl: "https://gvnutrition.gvfitness.in/"
    },
    {
      title: "Decentralized Voting System",
      description: "A project ensuring secure, transparent, and tamper-proof elections using blockchain technology.",
      tags: ["Blockchain", "Security", "Decentralization"],
      codeUrl: "https://github.com/iRahuln/decentralized-voting"
    },
    {
      title: "GV Fitness",
      description: "A dynamic gym management system with member registration, membership tracking, and automated WhatsApp notifications.",
      tags: ["PHP", "MySQL", "jQuery", "AJAX"],
      codeUrl: "https://github.com/iRahuln/GV-Fitness",
      demoUrl: "https://gvfitness.in/"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">A collection of my work, from e-commerce sites to full-stack applications.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="animate-slide-up hover:shadow-lg transition-shadow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <CardDescription className="text-sm">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex}
                      variant="outline"
                      className="text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                {project.title === "Diamora Jewelers" || project.title === "Dhansarjan Nidhi - Company Profile" ? (
                  <Button asChild size="sm" className="w-full">
                    <a href={project.demoUrl} target="_blank" rel="noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Website
                    </a>
                  </Button>
                ) : (
                  <div className="flex gap-2">
                    {project.codeUrl && (
                      <Button asChild size="sm" variant="outline" className="flex-1">
                        <a href={project.codeUrl} target="_blank" rel="noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.demoUrl && (
                      <Button asChild size="sm" className="flex-1">
                        <a href={project.demoUrl} target="_blank" rel="noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                    {/* Fallback for projects with no links */}
                    {!project.codeUrl && !project.demoUrl && (
                      <Button size="sm" disabled className="w-full">
                        In Progress
                      </Button>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
