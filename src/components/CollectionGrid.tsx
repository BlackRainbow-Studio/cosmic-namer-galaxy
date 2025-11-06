import { Card } from "@/components/ui/card";
import { CelestialObject } from "@/types/celestial";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import nebulaImg from "@/assets/nebula.jpg";
import starImg from "@/assets/star.jpg";
import planetImg from "@/assets/planet.jpg";

interface CollectionGridProps {
  objects: CelestialObject[];
  onDelete: (id: string) => void;
}

const getImage = (type: string) => {
  switch (type) {
    case "nebula":
      return nebulaImg;
    case "star":
      return starImg;
    case "planet":
      return planetImg;
    default:
      return nebulaImg;
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case "nebula":
      return "text-accent";
    case "star":
      return "text-yellow-400";
    case "planet":
      return "text-secondary";
    default:
      return "text-primary";
  }
};

export const CollectionGrid = ({ objects, onDelete }: CollectionGridProps) => {
  if (objects.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground text-lg">No celestial objects yet. Start creating!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {objects.map((obj) => (
        <Card
          key={obj.id}
          className="relative overflow-hidden bg-card/50 backdrop-blur-sm border-2 border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-float"
        >
          <div className="aspect-square relative">
            <img
              src={getImage(obj.type)}
              alt={obj.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent" />
            <div className="absolute top-4 right-4">
              <Button
                variant="destructive"
                size="icon"
                onClick={() => onDelete(obj.id)}
                className="h-8 w-8 rounded-full bg-destructive/80 hover:bg-destructive"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-xl font-bold mb-1 text-foreground">{obj.name}</h3>
              <p className={`text-sm font-medium capitalize ${getTypeColor(obj.type)}`}>
                {obj.type}
              </p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};
