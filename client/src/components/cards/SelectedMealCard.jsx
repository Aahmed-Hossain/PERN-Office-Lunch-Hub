/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { toast } from "react-toastify";
import { useAxios } from "../../hooks/useAxios";
import DeleteIcon from "@mui/icons-material/Delete";

const SelectedMealCard = ({ selectedMeal, refetch }) => {
  const { selectedmeals_id, name, email, date, image, price } = selectedMeal;

  const handleDelete = (id) => {
    useAxios
      .delete(`/selectedMeals/${id}`)
      .then((response) => {
        toast.success(`${response.data} `);
        refetch();
      })

      .catch((error) => {
        console.error("Error deleting the item:", error);
      });
  };
  const confirmDelete = (id) => {
    toast.warn(
      <div>
        <p>{`Do you really want to delete ${name}?`}</p>
        <div className="flex gap-4">
          <button
            className="bg-red-300 px-3 my-2 rounded-md"
            onClick={() => {
              handleDelete(id);
              toast.dismiss();
            }}
          >
            Yes
          </button>
          <button
            className="bg-green-300 px-3 my-2 rounded-md"
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
            Date: {date.slice(0, 10)}
          </Typography>

            <Box
              sx={{
                direction: "flex",
                justifyContent: "start",
                marginY: "20px",
              }}
            >
              <Button
                onClick={() => confirmDelete(selectedmeals_id)}
                variant="outlined"
                startIcon={<DeleteIcon />}
                color="error"
              >
                Delete
              </Button>
            </Box>
        </CardContent>
      </Card>
    </div>
  );
};

export default SelectedMealCard;
