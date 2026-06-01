
import { useState } from "react";


function App() {
 
  const [count, setCount] = useState(0);

  
  return (
    
    <main className="app">
      
      <section className="panel">
        
        <p className="eyebrow">Intern Docker Practice</p>

      
        <h1>React Frontend Running in Docker</h1>

        <p className="description">
          This simple Vite React app helps you practice the workflow your mentor
          asked for: run the frontend locally, build a Docker image, start a
          container, and open the app in the browser.
        </p>

       
        <button type="button" onClick={() => setCount((value) => value + 1)}>
          Counter: {count}
        </button>
      </section>
    </main>
  );
}

export default App;
