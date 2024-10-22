import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Landingpage/Home';
//import "./components/todolist/todolist.css";
//import App from './App'
const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);
const App =()=>{
  return (
    <div>
      <Home/>
    </div>
  );
}
root.render(<App/>);
/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/