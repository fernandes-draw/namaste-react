import React from 'react';
import ReactDOM from 'react-dom/client';

// JSX - is not HTML in JS (HTML or XML like syntax)
// JSX - Transpiled before it reaches the JS - by PARCEL/BABEL
// JSX => React.createElement => React Element => Object => HTMLElement(render)

const Title = () => (
  <h1 className='head' tabIndex='5'>
    Namaste React using JSX 🚀
  </h1>
);

// React Component
// Class Based Component - OLD
// Functional Component - NEW

const HeadingComponent = () => (
  <div className='container'>
    <Title />
    <h1 className='heading'>Namaste React React Functional Component </h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadingComponent />);
