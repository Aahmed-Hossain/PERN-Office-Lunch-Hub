/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";
const MealCard = ({ meal }) => {
  const {meal_id, name, description, image } = meal;
  return (
    <Card sx={{ maxWidth: 800 }}>
      <CardActionArea className="group">
        <CardMedia
          className="transition-transform transform group-hover:scale-105"
          component="img"
          height="140"
          image={image}
          alt="meal image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{direction: 'flex', justifyContent: 'center',marginBottom: '10px'}}>
        <Link to={`/mealDetails/${meal_id}`}>
        <Button  variant="contained"  color="primary">
          View Details
        </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default MealCard;
