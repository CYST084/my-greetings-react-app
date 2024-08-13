import React from 'react';
import HelloWorld from './components/HelloWorld';
import Greeting from './components/Greeting';
import Counter from './components/Counter';

function App() {
    return (
        <div className='App'>
            <HelloWorld />
            <Greeting name="Human" />
            <Counter />
        </div>
    );
}

export default App;