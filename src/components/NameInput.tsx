import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

interface NameInputProps {
  onSubmit: (name: string) => void;
  celestialType: string;
}

export const NameInput = ({ onSubmit, celestialType }: NameInputProps) => {
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onSubmit(name.trim());
      setName("");
    }
  };

  return (
    <Card className="p-6 bg-card/80 backdrop-blur-sm border-2 border-primary/50 animate-pulse-glow">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
            Name your {celestialType}
          </label>
          <Input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={`Enter a name for your ${celestialType}...`}
            className="bg-background/50 border-border focus:border-primary"
            maxLength={50}
          />
        </div>
        <Button
          type="submit"
          disabled={!name.trim()}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          <Sparkles className="mr-2 h-4 w-4" />
          Create {celestialType}
        </Button>
      </form>
    </Card>
  );
};
