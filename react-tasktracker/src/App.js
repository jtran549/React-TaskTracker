import Header from './components/Header';
import Tasks from './components/Tasks'
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true
    },
    {
        id: 2,
        text: 'Groceries',
        day: 'Feb 6th at 5:30pm',
        reminder: true
    },
    {
        id: 3,
        text: 'Lay pipe',
        day: 'Feb 7th at 10:30pm',
        reminder: true
    }
]);
  const name = "Jimmy"
  return (
    <div className="Container">
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
