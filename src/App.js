import './App.css';
import Discussion from './container/Discussion/Discussion';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// react-toastify : an library of react to show notify
// call there and use toast to show notify where need
function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Discussion/>
    </div>
  );
}

export default App;
