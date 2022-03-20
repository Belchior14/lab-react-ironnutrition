import { Divider, Input } from 'antd';
import { useState } from 'react';

function AddFoodForm({setFoodList}) {

    const [nameInput, setNameInput] = useState("")
    const [imageInput, setImageInput] = useState("")
    const [caloriesInput, setCaloriesInput] = useState("")
    const [servingInput, setServingInput] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()

        setFoodList((previousFoods) => {
            return [
                ...previousFoods,
                {
                    name : nameInput,
                    image : imageInput,
                    calories : caloriesInput,
                    servings : servingInput,
                }
            ]
        })
    }

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={nameInput} type="text" onChange={(e) => setNameInput(e.target.value)} />

      <label>Image</label>
      <Input value={imageInput} type="text" onChange={(e) => setImageInput(e.target.value)} />

      <label>Calories</label>
      <Input value={caloriesInput} type="text" onChange={(e) => setCaloriesInput(e.target.value)} />

      <label>Servings</label>
      <Input value={servingInput} type="text" onChange={(e) => setServingInput(e.target.value)} />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;