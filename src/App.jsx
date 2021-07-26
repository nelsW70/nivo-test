import './App.css';
import Bar from './components/Bar';
import Line from './components/Line';

function App() {
  return (
    <>
      <h1>nivo charts basic</h1>
      <div className="layout">
        <div className="container">
          <h2>stacked vertical</h2>
          <div className="container__chart">
            <Bar grouped="stacked" />
          </div>
        </div>
        <div className="container">
          <h2>grouped vertical</h2>
          <div className="container__chart">
            <Bar grouped="grouped" />
          </div>
        </div>
        <div className="container">
          <h2>stacked horizontal</h2>
          <div className="container__chart">
            <Bar grouped="stacked" layout="horizontal" />
          </div>
        </div>
        <div className="container">
          <h2>grouped horizontal</h2>
          <div className="container__chart">
            <Bar grouped="grouped" layout="horizontal" />
          </div>
        </div>
        <div className="container">
          <h2>curve linear</h2>
          <div className="container__chart">
            <Line curve="linear" />
          </div>
        </div>
        <div className="container">
          <h2>curve cardinal</h2>
          <div className="container__chart">
            <Line curve="cardinal" />
          </div>
        </div>
        <div className="container">
          <h2>points disabled</h2>
          <div className="container__chart">
            <Line enablePoints={false} />
          </div>
        </div>
        <div className="container">
          <h2>enable area</h2>
          <div className="container__chart">
            <Line enableArea={true} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
