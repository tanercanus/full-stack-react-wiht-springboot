import React from 'react';
// import FirstComponent, {SecondComponent} from './components/learning-examples/FirstComponent';
// import ThirdComponent from './components/learning-examples/ThirdComponent';
import TodoApp from './components/todo/TodoApp';
// import Counter from './components/counter/Counter'
// import logo from './logo.svg';
import './App.css';
import './bootstrap.css';

//Function component
function App() {
  return (
    <div className="App">
      {/*<Counter/>*/}
      <TodoApp></TodoApp>
    </div>
  );
  
}

// function LearningComponents() {
//   return (
//     <div className="learningComponents">
//       My hello
//       <FirstComponent/>
//       <SecondComponent/>
//       <ThirdComponent/>
//     </div>
//   );
// }

export default App;
