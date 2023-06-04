import './App.css';
import { productApi } from './api/productApi';
import MyApp from './components/MyApp';

function App() {
  const product_index = productApi.index()
  console.log(product_index)
  return (
    <>
      <div>jkasjkdshkhdj</div>
      <MyApp />
    </>

  );
}

export default App;
