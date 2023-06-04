import './App.css';
import { productApi } from './api/productApi';

function App() {
  const product_index = productApi.index()
  console.log(product_index)
  return (
    <>
      <div>jkasjkdshkhdj</div>
    </>

  );
}

export default App;
