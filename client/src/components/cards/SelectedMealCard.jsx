/* eslint-disable react/prop-types */
import {  Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";


const SelectedMealCard = ({selectedMeal}) => {
    const {name, email, date, image, price} = selectedMeal;
  return (
    <div>
        <Card className="flex flex-col md:flex-row lg:flex-row lg:h-[17rem] md:h-full">
          <CardActionArea className="md:w-1/2 w-full">
            <CardMedia
            className="h-full"
              component="img"
              height="140"
              image={image}
              alt="meal image"
            />
          </CardActionArea>
          <CardContent className="md:w-1/2 w-full">
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {email}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              Price: {price} $
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              Carbs: {date.slice(0,10)}
            </Typography>

            <CardActions
              sx={{
                direction: "flex",
                justifyContent: "center",
                marginY: "10px",
              }}
            >
              <Button onClick={''} variant="contained" color="primary">
                delete
              </Button>
            </CardActions>
          </CardContent>
        </Card>
    </div>
  )
}

export default SelectedMealCard