import { useState} from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/addTask'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

// Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = { id, ...task }
  setTasks([...tasks, newTask ]) // Outputs new task to list
  console.log(newTask)
}

// Delete Task
const deleteTask = (id) => {
 setTasks(tasks.filter((task) => task.id !== id))
}

// Toggle reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id 
  ? { ...task, reminder: !task.reminder } : task))
}

const url = "https://www.instagram.com/frontendmike/?hl=en";


  return (
    <div className="container">
      <Header onAdd ={() => setShowAddTask(!showAddTask) } showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? ( 
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'No tasks'
      )}
      <a href={url} target="_blank" rel="noreferrer" style={{color: 'blue', marginTop: '1rem', display: 'block'}}
      >
        By: Frontendmike
      </a>
      
    </div>
    
  );
  
  
}



export default App;
