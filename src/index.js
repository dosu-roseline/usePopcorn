import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import StarRating from './StarRating';
import './index.css';
import App from './App';

function Text() {
  const [moveRate, setMovieRate] = useState(0);
  return (
    <div>
      <StarRating onSetRating={setMovieRate} />
      <p>The movie was rated {moveRate} stars.</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Text /> */}
    {/* <StarRating maxRating={4} />
    <StarRating
      size={24}
      color="red"
      messages={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']}
      defaultRating={2}
    /> */}
  </React.StrictMode>
);
