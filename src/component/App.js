import React from 'react';
import MultiSelect from './MultiSelect';
import SingleSelect from './SingleSelect';

const options = ['dog', 'cat', 'penguin', 'zebra', 'lion', 'rabbit'];

const App = () => {
  return (
    <div style={{ display: 'flex' }}>
      <MultiSelect options={options} title="select title" />
      <SingleSelect options={options} title="select title" />
    </div>
  );
};

export default App;
