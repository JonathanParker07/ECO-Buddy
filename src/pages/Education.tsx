import { useState } from "react";
import { usePoints } from "@/contexts/PointsContext";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const articles = [
  {
    id: "1",
    title: "Understanding Carbon Footprint",
    excerpt: "Learn about how daily actions impact our planet's health...",
    content: "Your carbon footprint is the total amount of greenhouse gases that your actions create. Everything from driving a car to buying food contributes to this number. Understanding and reducing your carbon footprint is crucial for fighting climate change.",
  },
  {
    id: "2",
    title: "Sustainable Living Tips",
    excerpt: "Practical ways to live more sustainably...",
    content: "Sustainable living means making choices that reduce your environmental impact. This can include using renewable energy, reducing waste, choosing eco-friendly products, and supporting local businesses that prioritize sustainability.",
  },
  {
    id: "3",
    title: "Recycling Basics",
    excerpt: "Master the fundamentals of proper recycling...",
    content: "Proper recycling involves knowing what can and cannot be recycled, cleaning items before recycling, and understanding local recycling guidelines. When done correctly, recycling helps reduce waste and conserve resources.",
  },
];

const Education = () => {
  const { readArticles, markArticleAsRead } = usePoints();
  const [selectedArticle, setSelectedArticle] = useState<typeof articles[0] | null>(
    null
  );

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-eco-primary mb-8">
        Educational Content
      </h1>

      <div className="grid gap-6">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h2 className="text-xl font-semibold text-eco-primary mb-2">
              {article.title}
            </h2>
            <p className="text-gray-600 mb-4">{article.excerpt}</p>
            <Button
              onClick={() => {
                setSelectedArticle(article);
                if (!readArticles.includes(article.id)) {
                  markArticleAsRead(article.id);
                }
              }}
              variant="outline"
              className="text-eco-primary hover:bg-eco-light"
            >
              Read More...
            </Button>
          </div>
        ))}
      </div>

      <Dialog open={!!selectedArticle} onOpenChange={() => setSelectedArticle(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedArticle?.title}</DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <p className="text-gray-600">{selectedArticle?.content}</p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Education;