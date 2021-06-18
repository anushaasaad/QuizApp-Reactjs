import logo from './logo.svg';
import './App.css';
import Questionaire from './components/Questionaire';
import UserGreetings from './components/UserGreetings';

function App() {
  return (
    <div className="App">
      <h1 className="heading" >Javascript Quiz</h1>
      <Questionaire />
    </div>
  );
}

export default App;
