import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import useAuth from './../../hooks/useAuth.';
import { useAxios } from "../../hooks/useAxios";
import { toast } from "react-toastify";

const MealDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location)
  const {user} = useAuth();
  const email = user?.email;
  console.log(email);
  const meal = useLoaderData();
  const {
    // meal_id,
    carbs,
    fats,
    protein,
    calories,
    items,
    name,
    description,
    image,
    price,
  } = meal;
  const confirmLogin = () => {
    toast.warn(
      <div>
        <p>Do you want to login first?</p>
        <div className="flex gap-4">
          <button
            className="bg-green-300 px-3 my-2 rounded-md"
            onClick={() => {
              toast.dismiss();
              navigate('/login', { state: { from: location.pathname } });
            }}
          >
            Yes
          </button>
          <button
            className="bg-red-300 px-3 my-2 rounded-md"
            onClick={() => toast.dismiss()}
          >
            No
          </button>
        </div>
      </div>,
      {
        position: "top-center",
        autoClose: false,
        closeOnClick: true,
        closeButton: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      }
    );
  };
  const handleSelectedMeal = () => {
  
    const selectedMeal = {
      email, 
      date: new Date().toISOString().split('T')[0],  
      name,
      image,
      price,
    }
    if(!email){
      confirmLogin();
    }else{
      useAxios.post("/selectedMeals", selectedMeal)
      .then((res) => {
        console.log("selectedMeal:",res.data);
        toast.success(`You selected the meal: ${name}`);
        navigate("/");
      })
      .catch((err) => {
        console.error("Errors:", err);
        if (err.response) {
          toast.error(`${err.response.status}: ${err.response.data}`);
          // console.error("Error data:", err.response.data);
          // console.error("Error status:", err.response.status);
          // console.error("Error headers:", err.response.headers);
        }
      });
    }
    
   
  }

  return (
    <div className="px-4 md:px-8 mx-auto my-6">
      <CardActionArea>
        <Card className="flex flex-col md:flex-col lg:flex-row h-full">
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={image}
              alt="meal image"
            />
          </CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              Price: {price} $
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              Carbs: {carbs} | Fats: {fats}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              Protein: {protein} | Calories: {calories}
            </Typography>
   <Box display="flex" flexWrap="wrap" gap={2}>
      {items.map((item, idx) => (
        <Box 
          key={idx} 
          border={1} 
          borderColor="green" 
          px={2}
        >
          <Typography>{item.toUpperCase()}</Typography>
        </Box>
      ))}
    </Box>

            <CardActions
              sx={{
                direction: "flex",
                justifyContent: "center",
                marginY: "10px",
              }}
            >
              <Button onClick={handleSelectedMeal} variant="contained" color="primary">
                Select for Lunch
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      </CardActionArea>
    </div>
  );
};

export default MealDetails;
