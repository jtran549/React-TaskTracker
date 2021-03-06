const tasks = [
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
]

const Tasks = () => {
  return (
    <>
      {tasks.map((task) => (<h3 key={task.id}>{task.text}</h3>))}
    </>
  )
}

export default Tasks
