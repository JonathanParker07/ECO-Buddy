import React from "react";
import { Link } from "react-router-dom";
import { usePoints } from "@/contexts/PointsContext";
import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";

export function Layout({ children }: { children: React.ReactNode }) {
  const { points } = usePoints();

  return (
    <div className="min-h-screen bg-eco-light">
      <header className="bg-eco-primary text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-2xl font-bold flex items-center">
              <Leaf className="mr-2" />
              EcoLearn
            </Link>
            <nav className="hidden md:flex space-x-4">
              <Link to="/" className="hover:text-eco-light transition">
                Home
              </Link>
              <Link to="/education" className="hover:text-eco-light transition">
                Learn
              </Link>
              <Link to="/quiz" className="hover:text-eco-light transition">
                Quiz
              </Link>
              <Link to="/friends" className="hover:text-eco-light transition">
                Friends
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-eco-secondary px-4 py-2 rounded-full">
              <span className="font-bold">{points}</span> Points
            </div>
          </div>
        </div>
      </header>
      <main className="container mx-auto py-6 px-4">{children}</main>
    </div>
  );
}