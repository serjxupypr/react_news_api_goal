
import React from 'react';
import './app.css';
import Stories from './Stories';



const App = ({store}) => {
    return (
      <div className="app">
        <Stories stories={store}/>
      </div>
    )
}

export default App;