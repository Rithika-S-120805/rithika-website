export const Footer = () => {
  return (
    <footer className="border-t border-border/60 mt-12">
      <div className="container py-8 flex flex-col md:flex-row gap-3 items-center justify-between text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Alex Kumar. All rights reserved.</p>
        <p>
          Built with <span className="gradient-text font-medium">React + Tailwind</span> · Designed with care
        </p>
      </div>
    </footer>
  );
};
