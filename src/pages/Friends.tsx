import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { usePoints } from "@/contexts/PointsContext";
import { ExternalLink } from "lucide-react";

const leaderboard = [
  { name: "EcoWarrior", points: 2500 },
  { name: "GreenThumb", points: 2000 },
  { name: "EarthGuardian", points: 1800 },
  { name: "RecyclePro", points: 1500 },
  { name: "SustainableLife", points: 1200 },
];

const Friends = () => {
  const { points, addPoints } = usePoints();
  const { toast } = useToast();
  const [referralEmail, setReferralEmail] = useState("");

  const handleReferral = (e: React.FormEvent) => {
    e.preventDefault();
    if (referralEmail) {
      addPoints(1000);
      toast({
        title: "Friend Invited!",
        description: "You've earned 1000 points for referring a friend!",
      });
      setReferralEmail("");
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-eco-primary mb-6">Leaderboard</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {leaderboard.map((user, index) => (
              <div
                key={user.name}
                className={`flex items-center justify-between p-4 ${
                  index !== leaderboard.length - 1 ? "border-b" : ""
                }`}
              >
                <div className="flex items-center">
                  <span className="font-bold mr-4">{index + 1}</span>
                  <span>{user.name}</span>
                </div>
                <span className="font-semibold">{user.points} points</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-eco-primary mb-6">
            Invite Friends
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <form onSubmit={handleReferral} className="space-y-4">
              <Input
                type="email"
                placeholder="Friend's email"
                value={referralEmail}
                onChange={(e) => setReferralEmail(e.target.value)}
              />
              <Button type="submit" className="w-full">
                Invite & Earn 1000 Points
              </Button>
            </form>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Useful Links</h3>
            <div className="space-y-3">
              <a
                href="https://www.youtube.com/results?search_query=sustainability+tips"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-eco-primary hover:underline"
              >
                YouTube Educational Content <ExternalLink className="ml-2 h-4 w-4" />
              </a>
              <a
                href="https://t.me/your_ecobot"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-eco-primary hover:underline"
              >
                EcoBot on Telegram <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friends;