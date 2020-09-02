import React from 'react';
const api = {
  key: "2373df1c90efe22e28431e86c2bd7107",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input 
          type="text"
          className="search-bar"
          placeholder="Search..."
          />
        </div>
      </main>
    </div>
  );
}

export default App;
