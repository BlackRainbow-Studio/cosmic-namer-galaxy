import { useState } from "react";
import { CelestialCard } from "@/components/CelestialCard";
import { NameInput } from "@/components/NameInput";
import { CollectionGrid } from "@/components/CollectionGrid";
import { CelestialType, CelestialObject, CelestialTypeData } from "@/types/celestial";
import { Sparkles } from "lucide-react";
import { toast } from "sonner";
import nebulaImg from "@/assets/nebula.jpg";
import starImg from "@/assets/star.jpg";
import planetImg from "@/assets/planet.jpg";

const celestialTypes: CelestialTypeData[] = [
  {
    type: "nebula",
    title: "Nebula",
    description: "Cosmic clouds of gas and dust",
    image: nebulaImg,
    glowClass: "shadow-[0_0_30px_rgba(255,107,157,0.5)]",
  },
  {
    type: "star",
    title: "Star",
    description: "Luminous spheres of plasma",
    image: starImg,
    glowClass: "shadow-[0_0_30px_rgba(255,215,0,0.5)]",
  },
  {
    type: "planet",
    title: "Planet",
    description: "Celestial bodies orbiting stars",
    image: planetImg,
    glowClass: "shadow-[0_0_30px_rgba(0,212,255,0.5)]",
  },
];

const Index = () => {
  const [selectedType, setSelectedType] = useState<CelestialType | null>(null);
  const [collection, setCollection] = useState<CelestialObject[]>([]);

  const handleNameSubmit = (name: string) => {
    if (!selectedType) return;

    const newObject: CelestialObject = {
      id: Date.now().toString(),
      type: selectedType,
      name,
      timestamp: Date.now(),
    };

    setCollection((prev) => [...prev, newObject]);
    toast.success(`${selectedType.charAt(0).toUpperCase() + selectedType.slice(1)} "${name}" created!`);
    setSelectedType(null);
  };

  const handleDelete = (id: string) => {
    const obj = collection.find((o) => o.id === id);
    setCollection((prev) => prev.filter((o) => o.id !== id));
    if (obj) {
      toast.success(`"${obj.name}" removed from collection`);
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated background stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-1 h-1 bg-foreground/30 rounded-full animate-glow" style={{ top: "20%", left: "10%" }} />
        <div className="absolute w-1 h-1 bg-foreground/40 rounded-full animate-glow" style={{ top: "60%", left: "80%", animationDelay: "1s" }} />
        <div className="absolute w-1 h-1 bg-foreground/30 rounded-full animate-glow" style={{ top: "40%", left: "60%", animationDelay: "2s" }} />
        <div className="absolute w-2 h-2 bg-foreground/20 rounded-full animate-glow" style={{ top: "80%", left: "20%", animationDelay: "1.5s" }} />
        <div className="absolute w-1 h-1 bg-foreground/40 rounded-full animate-glow" style={{ top: "15%", left: "90%", animationDelay: "0.5s" }} />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="h-10 w-10 text-primary animate-glow" />
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Cosmic Namer
            </h1>
            <Sparkles className="h-10 w-10 text-accent animate-glow" />
          </div>
          <p className="text-xl text-muted-foreground">
            Choose a celestial object and give it a name
          </p>
        </div>

        {/* Selection */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
            Choose Your Celestial Object
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {celestialTypes.map((type) => (
              <CelestialCard
                key={type.type}
                data={type}
                isSelected={selectedType === type.type}
                onSelect={() => setSelectedType(type.type)}
              />
            ))}
          </div>
        </div>

        {/* Name Input */}
        {selectedType && (
          <div className="mb-16 max-w-md mx-auto">
            <NameInput
              celestialType={selectedType}
              onSubmit={handleNameSubmit}
            />
          </div>
        )}

        {/* Collection */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
            Your Collection
          </h2>
          <CollectionGrid objects={collection} onDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
};

export default Index;
