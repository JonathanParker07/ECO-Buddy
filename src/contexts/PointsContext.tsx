import React, { createContext, useContext, useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";

interface PointsContextType {
  points: number;
  addPoints: (amount: number) => void;
  hasClaimedLoginReward: boolean;
  setHasClaimedLoginReward: (claimed: boolean) => void;
  readArticles: string[];
  markArticleAsRead: (articleId: string) => void;
}

const PointsContext = createContext<PointsContextType | undefined>(undefined);

export function PointsProvider({ children }: { children: React.ReactNode }) {
  const [points, setPoints] = useState(0);
  const [hasClaimedLoginReward, setHasClaimedLoginReward] = useState(false);
  const [readArticles, setReadArticles] = useState<string[]>([]);
  const { toast } = useToast();

  const addPoints = (amount: number) => {
    setPoints((prev) => prev + amount);
    toast({
      title: `+${amount} Points!`,
      description: "Keep going! You're doing great!",
      className: "bg-eco-primary text-white",
    });
  };

  const markArticleAsRead = (articleId: string) => {
    if (!readArticles.includes(articleId)) {
      setReadArticles([...readArticles, articleId]);
      addPoints(10);
    }
  };

  return (
    <PointsContext.Provider
      value={{
        points,
        addPoints,
        hasClaimedLoginReward,
        setHasClaimedLoginReward,
        readArticles,
        markArticleAsRead,
      }}
    >
      {children}
    </PointsContext.Provider>
  );
}

export function usePoints() {
  const context = useContext(PointsContext);
  if (context === undefined) {
    throw new Error("usePoints must be used within a PointsProvider");
  }
  return context;
}