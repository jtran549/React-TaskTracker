import Header from './components/Header';
import Tasks from './components/Tasks'

function App() {
  const name = "Jimmy"
  return (
    <div className="Container">
      <Header />
      <Tasks />
    </div>
  );
}

export default App;
