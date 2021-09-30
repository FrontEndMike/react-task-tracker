import { useState} from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () => {
  const [tasks, setTask] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Tattoo Appointment',
        day: 'Feb 15th at 1:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'TK Appointment',
        day: 'Feb 25th at 2:30pm',
        reminder: false,
    }
])
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
