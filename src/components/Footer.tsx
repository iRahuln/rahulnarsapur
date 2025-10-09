export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Rahul Narsapur. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          Built with passion for security and innovation
        </p>
      </div>
    </footer>
  );
};
