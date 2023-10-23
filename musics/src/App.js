import { Provider } from 'react-redux'
import store from './state/store'

const App = () => {
  return (
    <Provider store={store}>
       <h1>MWA HAHA HAHA</h1>
    </Provider>
  )
}

export default App;
