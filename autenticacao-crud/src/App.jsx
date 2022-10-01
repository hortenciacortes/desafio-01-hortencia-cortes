import { Rotas } from './routes';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Rotas />
    </Provider>
  )
}

export default App
