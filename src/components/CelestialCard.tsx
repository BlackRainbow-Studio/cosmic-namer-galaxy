import { Card } from "@/components/ui/card";
import { CelestialTypeData } from "@/types/celestial";
import { cn } from "@/lib/utils";

interface CelestialCardProps {
  data: CelestialTypeData;
  isSelected: boolean;
  onSelect: () => void;
}

export const CelestialCard = ({ data, isSelected, onSelect }: CelestialCardProps) => {
  return (
    <Card
      onClick={onSelect}
      className={cn(
        "relative overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105",
        "border-2 bg-card/50 backdrop-blur-sm animate-float",
        isSelected ? "border-primary shadow-lg" : "border-border hover:border-primary/50",
        isSelected && "animate-pulse-glow"
      )}
    >
      <div className="aspect-square relative">
        <img
          src={data.image}
          alt={data.title}
          className={cn(
            "w-full h-full object-cover transition-all duration-300",
            isSelected && "brightness-110"
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-2xl font-bold mb-2 text-foreground">{data.title}</h3>
          <p className="text-sm text-muted-foreground">{data.description}</p>
        </div>
      </div>
    </Card>
  );
};
