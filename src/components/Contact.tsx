import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { toast } from "sonner";

export const Contact = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      const result = await response.json();
      if (result.success) {
        toast.success("Message sent! I'll get back to you soon.");
        form.reset();
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/iRahuln", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/rahul-narsapur/", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "mailto:rahulsocia@gmail.com", label: "Email" },
    { icon: Instagram, href: "https://www.instagram.com/i_rahuln/", label: "Instagram" },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's collaborate on your next project or discuss cybersecurity solutions
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="animate-slide-up">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>Fill out the form below and I'll get back to you as soon as possible</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Replace with your actual Web3Forms access key */}
                <input type="hidden" name="access_key" value="dd3045df-efcd-413c-afd4-77394a92dd08" />
                <div className="grid md:grid-cols-2 gap-4">
                  <Input name="name" placeholder="Your Name" required />
                  <Input name="email" type="email" placeholder="Your Email" required />
                </div>
                <Input name="subject" placeholder="Subject" required />
                <Textarea name="message" placeholder="Your Message" className="min-h-[150px]" required />
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-8 flex justify-center gap-4 animate-fade-in">
            {socialLinks.map((social, index) => (
              <Button
                key={index}
                variant="outline"
                size="icon"
                asChild
              >
                <a href={social.href} aria-label={social.label} target={social.href.startsWith('http') ? '_blank' : undefined} rel={social.href.startsWith('http') ? 'noreferrer' : undefined}>
                  <social.icon className="w-5 h-5" />
                </a>
              </Button>
            ))}
            {/* Resume Download Button */}
            <Button asChild variant="outline">
              <a href="/Rahul-Narsapur-Resume.pdf" download="Rahul-Narsapur-Resume.pdf">
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
