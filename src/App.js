import { Fragment } from 'react';

import NavBar from './components/materialComponents/NavBar';
import TaskList from './components/taskList';
import { ContextProvider } from './components/ContextProvider';

function App() {
  return (
    <Fragment>
      <ContextProvider>
        <NavBar />
        <TaskList />
      </ContextProvider>
    </Fragment>
  );
}

export default App;
