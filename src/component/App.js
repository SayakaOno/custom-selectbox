import React from 'react';
import MultiSelect from './MultiSelect';
import SingleSelect from './SingleSelect';

const options = ['option1', 'option2', 'option3', 'option4', 'option5'];

const App = () => {
  return (
    <div style={{ display: 'flex' }}>
      <MultiSelect options={options} title="select title" />
      <SingleSelect options={options} title="select title" />
    </div>
  );
};

export default App;
