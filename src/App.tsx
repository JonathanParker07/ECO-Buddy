import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { PointsProvider } from "@/contexts/PointsContext";
import { Layout } from "@/components/Layout";
import Home from "@/pages/Home";
import Education from "@/pages/Education";
import Quiz from "@/pages/Quiz";
import Friends from "@/pages/Friends";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <PointsProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/friends" element={<Friends />} />
          </Routes>
        </Layout>
      </BrowserRouter>
      <Toaster />
    </PointsProvider>
  </QueryClientProvider>
);

export default App;