import { useState } from "react";
import { usePoints } from "@/contexts/PointsContext";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle } from "lucide-react";

const questions = [
  {
    id: 1,
    question: "What is the main cause of global warming?",
    options: [
      "Greenhouse gas emissions",
      "Solar flares",
      "Natural temperature cycles",
    ],
    correct: 0,
  },
  {
    id: 2,
    question: "Which of these is NOT a renewable energy source?",
    options: ["Solar", "Coal", "Wind"],
    correct: 1,
  },
  {
    id: 3,
    question: "What percentage of plastic waste is recycled globally?",
    options: ["About 9%", "About 50%", "About 75%"],
    correct: 0,
  },
  {
    id: 4,
    question: "Which activity saves the most water?",
    options: [
      "Taking shorter showers",
      "Using a dishwasher",
      "Fixing leaky faucets",
    ],
    correct: 1,
  },
  {
    id: 5,
    question: "What is the most effective way to reduce carbon footprint?",
    options: [
      "Using public transport",
      "Eating less meat",
      "Reducing air travel",
    ],
    correct: 2,
  },
];

const Quiz = () => {
  const { addPoints } = usePoints();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [completed, setCompleted] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = (optionIndex: number) => {
    setSelectedAnswer(optionIndex);
    const correct = optionIndex === questions[currentQuestion].correct;
    setIsCorrect(correct);
    
    if (correct) {
      addPoints(20);
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsCorrect(null);
    } else {
      setCompleted(true);
    }
  };

  if (completed) {
    return (
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-eco-primary mb-4">Quiz Completed!</h2>
        <p className="text-xl mb-4">
          You scored {score} out of {questions.length}
        </p>
        <Button
          onClick={() => {
            setCurrentQuestion(0);
            setSelectedAnswer(null);
            setIsCorrect(null);
            setCompleted(false);
            setScore(0);
          }}
        >
          Try Again
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-6">
          <span className="text-sm text-gray-500">
            Question {currentQuestion + 1} of {questions.length}
          </span>
          <h2 className="text-xl font-semibold mt-2">
            {questions[currentQuestion].question}
          </h2>
        </div>

        <div className="space-y-4">
          {questions[currentQuestion].options.map((option, index) => (
            <Button
              key={index}
              onClick={() => handleAnswer(index)}
              disabled={selectedAnswer !== null}
              variant="outline"
              className={`w-full justify-start h-auto p-4 text-left ${
                selectedAnswer === index
                  ? index === questions[currentQuestion].correct
                    ? "bg-green-100 border-green-500"
                    : "bg-red-100 border-red-500"
                  : ""
              }`}
            >
              {option}
              {selectedAnswer === index && (
                <span className="ml-auto">
                  {index === questions[currentQuestion].correct ? (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-500" />
                  )}
                </span>
              )}
            </Button>
          ))}
        </div>

        {selectedAnswer !== null && (
          <div className="mt-6">
            <Button onClick={handleNext}>
              {currentQuestion < questions.length - 1 ? "Next Question" : "Finish Quiz"}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;