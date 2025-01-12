import { useEffect } from "react";
import { usePoints } from "@/contexts/PointsContext";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const { addPoints, hasClaimedLoginReward, setHasClaimedLoginReward } = usePoints();

  useEffect(() => {
    if (!hasClaimedLoginReward) {
      addPoints(10);
      setHasClaimedLoginReward(true);
    }
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-eco-primary mb-4">
          Welcome to EcoLearn
        </h1>
        <p className="text-lg text-gray-600">
          Learn about sustainability, earn points, and make a difference!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Link to="/education" className="group">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-eco-primary mb-3">
              Start Learning
            </h2>
            <p className="text-gray-600 mb-4">
              Explore our educational content and earn points while learning.
            </p>
            <Button className="group-hover:translate-x-2 transition-transform">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </Link>

        <Link to="/quiz" className="group">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-eco-primary mb-3">
              Take a Quiz
            </h2>
            <p className="text-gray-600 mb-4">
              Test your knowledge and earn points with our eco-quizzes.
            </p>
            <Button className="group-hover:translate-x-2 transition-transform">
              Start Quiz <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;