// import logo from './logo.svg';
import Bar from '../bar';
import data from '../bar/data';
import './App.css';

const keys = ['hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut'];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Report PDF Test</h1>
        <Bar 
          data={data}
          keys={keys}
          indexBy={"country"}
        />
      </header>
    </div>
  );
}

export default App;
