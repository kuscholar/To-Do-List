import { useState} from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
      {
        id: 1,
        text: "Submit To-do-list code challenge",
        day: "April 24th at 1am",
        completed: true
      },
      {
          id: 2,
          text: "Go to see doctor",
          day: "April 25th at 2pm",
          completed: true
      },
      {
          id: 3,
          text: "Interview with diamondLife",
          day: "April 26th at 1pm",
          completed: false
      }
    
   ])

  // useEffect(() => {
  //   const fetchTasks = async () => {
  //     const res = await fetch('http://locast')
  //   }
  // })


// Add Task

const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = { id, ...task }
  setTasks([...tasks, newTask])

}

// Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

// Toggle completed
  const togglecompleted = (id) => {
    setTasks(
      tasks.map((task) => 
        task.id === id ? { ...task, completed: !task.completed } : task
        )
    )
  }

// Show completed

  // const showCompleted = (id) => {
  //   setTasks(task.filter((task) => task.id !== id))
  // }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={togglecompleted}/>) : ('No Tasks To Show')}
    </div>
    
  );
}


export default App;
