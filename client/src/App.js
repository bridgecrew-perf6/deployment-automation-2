import React, { useEffect } from 'react';
import axios from 'axios';

function App() {
  useEffect(() => {
    console.log('object')
    axios.get('/api')
    .then(res => {
      console.log(res.data)
    })
    .catch(err => console.log(err));
  }, [])
  return (
    <div className="App">
      hello world
    </div>
  );
}

export default App;
