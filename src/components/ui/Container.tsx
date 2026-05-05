import { cn } from "@/lib/utils";

export const Container = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn("max-w-7xl mx-auto px-6 md:px-8", className)}>
    {children}
  </div>
);

export const Section = ({ 
  children, 
  className, 
  id, 
  bg = 'white' 
}: { 
  children: React.ReactNode; 
  className?: string; 
  id?: string; 
  bg?: 'white' | 'gray' 
}) => (
  <section id={id} className={cn("py-20 md:py-32", bg === 'gray' ? "bg-section" : "bg-background", className)}>
    {children}
  </section>
);