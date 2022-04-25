import './App.css';
import { BrowserRouter } from 'react-router-dom';

import MainComponent from './components/MainComponent';

import { Provider } from 'react-redux';
import store from './redux/store';


function App() {
  console.log(store.getState())
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
            <MainComponent />
        </BrowserRouter>
      </Provider>
    </div>  
  );
}

export default App;
