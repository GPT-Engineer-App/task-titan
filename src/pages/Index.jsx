import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center">
      <h1 className="text-3xl">Welcome to Todoist Clone</h1>
      <p>Get started by navigating to one of the sections.</p>
      <div className="mt-4 space-x-2">
        <Button onClick={() => navigate("/inbox")}>Go to Inbox</Button>
        <Button onClick={() => navigate("/today")}>Go to Today</Button>
        <Button onClick={() => navigate("/upcoming")}>Go to Upcoming</Button>
      </div>
    </div>
  );
};

export default Index;