import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const UpcomingPage = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [selectedTask, setSelectedTask] = useState(null);

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { name: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Upcoming</h1>
        <Button onClick={addTask}>Add Task</Button>
      </header>
      <div className="space-y-4">
        {tasks.map((task, index) => (
          <Card key={index} className="flex items-center space-x-4">
            <Checkbox checked={task.completed} onCheckedChange={() => toggleTaskCompletion(index)} />
            <CardContent className="flex-grow">
              <p className={task.completed ? "line-through" : ""}>{task.name}</p>
            </CardContent>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" onClick={() => setSelectedTask(task)}>Details</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Task Details</DialogTitle>
                </DialogHeader>
                <div>
                  <Input value={selectedTask?.name || ""} readOnly />
                  {/* Add more fields for task details here */}
                </div>
              </DialogContent>
            </Dialog>
          </Card>
        ))}
      </div>
      <div className="mt-4">
        <Input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
          onKeyDown={(e) => e.key === "Enter" && addTask()}
        />
      </div>
    </div>
  );
};

export default UpcomingPage;