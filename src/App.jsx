import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const sse = new EventSource("http://localhost:8080/v1/server-sent-events/subscriptions/channels?memberId=5");

  sse.onmessage = e => console.log(e);

  // sse.onerror = () => {
  //   // error log here 
    
  //   sse.close();
  // }

  // sse.addEventListener("error", (event) => {
  //   if (event.type === "error") {
  //     console.error("Connection error:", event.message);
  //   } else if (event.type === "exception") {
  //     console.error("Error:", event.message, event.error);
  //   }
  // });
  
  // sse.addEventListener("close", (event) => {
  //   console.log("Close SSE connection.");
  // });

  // sse.addEventListener('connect', (e) => {
  //   const { data: receivedConnectData } = e;
  //   console.log('connect event data: ',receivedConnectData);  // "connected!"
  // });

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
