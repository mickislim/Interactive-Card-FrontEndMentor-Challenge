import Attribute from './Components/Attribute';
import Card from './Components/Card';
import Form from './Components/Form';
import './index.css';



function App() {
  return (
<div className='container-grid'>
  <div className='desktop'>
    <div className='content-grid'>
<Card />

<Form />


</div>
    </div>

    <div><Attribute/></div>
  </div>
  );
}

export default App;
