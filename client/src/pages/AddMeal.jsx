import { useForm } from "react-hook-form"
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { useState } from "react";


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = ["chicken", "basmati rice", "vegetables", "salad","salmon", "lemon", "herbs", "mixed vegetables","broccoli", "bell peppers", "carrots", "tofu", "soy sauce", "beef", "tortillas", "lettuce", "cheese", "salsa","quinoa", "cherry tomatoes", "cucumbers", "feta cheese", "olives","chicken breast", "romaine lettuce", "croutons", "parmesan cheese", "caesar dressing","lentils", "carrots", "celery", "onions", "spices",]

const AddMeal = () => {
  const [personName, setPersonName] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };


    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const onSubmit = (data) => console.log(data)
  return (
    <div className="mt-4 md:mt-0">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row gap-4">
     <div className="flex flex-col w-full">
     <TextField
      {...register("name", { required: true })}
          id="outlined-name-input"
          label="Meal Name"
          type="text"
        /> 
         {errors.name && <p className="text-red-500">*Name is required</p>}
     </div>
     <div className="flex flex-col w-full">
     <TextField
      {...register("image", { required: true })}
          id="outlined-image-input"
          label="Image URL"
          type="text"
        /> 
         {errors.image && <p className="text-red-500">*Image is required</p>}
     </div>
      </div>


      <div className="flex flex-col md:flex-row gap-4">
<div className="flex flex-col w-full">
        <Select
          {...register("items", { required: true })}
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          placeholder="Select Menu Items"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Menu Items" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
  
          {names.map((name) => (
            <MenuItem key={name} value={name}>
            
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
        {errors.items && <span className="text-red-500">*Items is required</span>}
     </div>

     <div className="flex flex-col w-full">
    <TextField
      {...register("price", { required: true })}
          id="outlined-price-input"
          label="Price"
          type="number"
        /> 
         {errors.price && <span className="text-red-500">*Price is required</span>}
    </div>
</div>



<div className="flex flex-col md:flex-row gap-4">
<div className="flex flex-col w-full">
<TextField
      {...register("calories", { required: true })}
          id="outlined-calories-input"
          label="Calories"
          type="number"
        /> 
         {errors.calories && <span className="text-red-500">*This field is required</span>}
</div>

<div className="flex flex-col w-full">
<TextField
      {...register("protein", { required: true })}
          id="outlined-protein-input"
          label="Protein Quantity"
          type="number"
        /> 
         {errors.protein && <span className="text-red-500">*This field is required</span>}
</div>
</div>


<div className="flex flex-col md:flex-row gap-4">
<div className="flex flex-col w-full">
<TextField
      {...register("fats", { required: true })}
          id="outlined-fats-input"
          label="Fats Quantity"
          type="number"
        /> 
         {errors.fats && <span className="text-red-500">*This field is required</span>}
</div>
<div className="flex flex-col w-full">
<TextField
      {...register("carbs", { required: true })}
          id="outlined-carbs-input"
          label="Carbs Quantity"
          type="number"
        /> 
         {errors.carbs && <span className="text-red-500">*This field is required</span>}
</div>
</div>
         
      <TextField
      {...register("description", { required: true })}
      id="outlined-description-static"
          label="Description"
          multiline
          type="text"
          rows={4}
          
          
        />
         {errors.description && <span className="text-red-500">*Description is required</span>}
      <input
      className=" py-2 px-4 w-full rounded text-white font-bold text-lg bg-gray-500 hover:bg-gray-600 my-3 cursor-pointer"
      value="Add The Meal"
       type="submit" />
    </form> 
    </div>
  )
}

export default AddMeal