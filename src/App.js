import logo from './logo.jpg';
import './App.css';

function App() {
  return (
    <div>
        <img src={logo} className='logo' alt="logo" />
        <h1> האתר בשלבי פיתוח</h1>
        <h3><a href='https://github.com/NpmStart2'>Github</a> מפתחים? עקבו אחרינו ב </h3>
        {/* <h2>ג'ונרית? רוצה להיות חלק מהצוות המוביל? צרי איתנו קשר</h2> */}
    </div>
  );
}

export default App;
