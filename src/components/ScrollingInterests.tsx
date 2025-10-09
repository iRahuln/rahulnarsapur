import { Book, Music, Camera, Plane, Coffee, Gamepad2, Dumbbell, Paintbrush, Code } from "lucide-react";

export const ScrollingInterests = () => {
  const interests = [
    { icon: Music, label: "Music" },
    { icon: Camera, label: "Photography" },
    { icon: Plane, label: "Travel" },
    { icon: Coffee, label: "Tea" },
    { icon: Code, label: "Coding" },
  ];

  // Duplicate the array for seamless infinite scroll
  const duplicatedInterests = [...interests, ...interests];

  return (
    <section className="py-12 overflow-hidden bg-primary/5 border-y border-border">
      <div className="relative">
        <div className="flex animate-scroll whitespace-nowrap">
          {duplicatedInterests.map((interest, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-3 mx-8 text-lg font-medium"
            >
              <interest.icon className="w-6 h-6 text-primary" />
              <span>{interest.label}</span>
              <span className="text-muted-foreground">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
