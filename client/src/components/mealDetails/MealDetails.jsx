import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import useAuth from './../../hooks/useAuth.';
import { useAxios } from "../../hooks/useAxios";
import { toast } from "react-toastify";

const MealDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {user} = useAuth();
  const email = (user?.user_email || user?.email);
  const meal = useLoaderData();
  const {
    date,
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
          toast.error(`${err.response.status}: ${err.response.data.message}`);
        }
      });
    }
    
   
  }

  return (
    <div className="px-4 md:px-8 mx-auto my-6">

<Card sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, marginBottom: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <CardMedia
            component="img"
            sx={{ height: '100%', objectFit: 'cover' }}
            image={image}
            alt={name}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="h5">
                {name}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                {description}
              </Typography>
              <Typography gutterBottom variant="h6" component="div" color="text.secondary">
                Price: {price} $
              </Typography>
              <Typography gutterBottom variant="h6" component="div" color="text.secondary">
                Carbs: {carbs} | Fats: {fats}
              </Typography>
              <Typography gutterBottom variant="h6" component="div" color="text.secondary">
                Protein: {protein} | Calories: {calories}
              </Typography>
              <Typography component="div" variant="h5">
                Date: {date}
              </Typography>
              <Box display="flex" flexWrap="wrap" gap={2} marginTop={2}>
                {items.map((item, idx) => (
                  <Box 
                    key={idx} 
                    border={1} 
                    borderColor="green" 
                    px={2}
                    py={0.5}
                    borderRadius={2}
                  >
                    <Typography>{item.toUpperCase()}</Typography>
                  </Box>
                ))}
              </Box>
            </CardContent>
            <CardActions
              sx={{
                display: "flex",
                justifyContent: "center",
                marginY: "10px",
              }}
            >
              <Button onClick={handleSelectedMeal} variant="contained" color="primary">
                Select for Lunch
              </Button>
            </CardActions>
          </Box>
        </Grid>
      </Grid>
    </Card>
    </div>
  );
};

export default MealDetails;
