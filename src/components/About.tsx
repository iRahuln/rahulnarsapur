import { Server, Code2, ShoppingCart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const About = () => {
  const expertise = [
    {
      icon: Server,
      title: "Backend Development",
      description: "Building robust, scalable server-side applications with PHP, Laravel, and Node.js, focusing on secure and efficient backend logic."
    },
    {
      icon: Code2,
      title: "Website Development",
      description: "Creating responsive, performant web applications with modern tools like React, Next.js, and TypeScript."
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Developing and launching online stores using platforms like Shopify, tailored for unique brand experiences."
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I’m a Computer Science student at Uka Tarsadia University with a strong passion for technology and creativity. As a freelancer, I’ve worked on website development projects using React, PHP, Shopify, and WordPress — helping clients build fast, modern, and user-friendly digital experiences. I enjoy turning innovative ideas into practical solutions, from IoT systems to intuitive web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {expertise.map((item, index) => (
            <Card 
              key={index}
              className="animate-slide-up hover:shadow-lg transition-shadow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <item.icon className="w-10 h-10 text-primary mb-2" />
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
