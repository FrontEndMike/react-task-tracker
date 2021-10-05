import { useState} from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/addTask'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
    },
    {
        id: 2,
        text: 'Tattoo Appointment',
        day: 'Feb 15th at 1:30pm',
        reminder: false,
    },
    {
        id: 3,
        text: 'TK Appointment',
        day: 'Feb 25th at 2:30pm',
        reminder: false,
    }
])

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


  return (
    <div className="container">
      <Header onAdd ={() => setShowAddTask(!showAddTask) }/>
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? ( 
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'No tasks'
      )}
    </div>
  );
}

export default App;
