import './App.css';

import TableComponent from './TableComponent.jsx';

function App() {
  return (
    <div className="App">
      <div className="view">
        <TableComponent data={[
          {
            name: "Ethan Grantham",
            time: new Date("12/9/2020 5:15 PM"),
            email: "cknight@easinc.net"
          }
        ]} />
      </div>
    </div>
  );
}

export default App;
