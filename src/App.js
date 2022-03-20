import { useState } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/Foodbox';
import { Row, Divider, Button } from 'antd';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foodList, setFoodList] = useState(foods);

  return (
    <div className="App">
      <AddFoodForm setFoodList={setFoodList}/>
      <Search/>
      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foodList.map((food) => {
          return <FoodBox key={food.id} food={food} setFoodList={setFoodList} id={food.id} />;
        })}
      </Row>
    </div>
  );
}

export default App;
