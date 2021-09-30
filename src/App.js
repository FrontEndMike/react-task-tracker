import { useState} from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () => {
  const [tasks, setTask] = useState([
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

// Delete Task
const deleteTask = (id) => {
 setTask(tasks.filter((task) => task.id !== id))
}

// Toggle reminder
const toggleReminder = (id) => {
  setTask(tasks.map((task) => task.id === id 
  ? { ...task, reminder: !task.reminder } : task))
}


  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? ( 
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'No tasks'
      )}
    </div>
  );
}

export default App;
