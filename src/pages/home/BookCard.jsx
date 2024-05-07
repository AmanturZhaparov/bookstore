import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

const BookCard = ({ title, img, id }) => {
  const navigate = useNavigate();

  const navigateToBook = () => {
    navigate(`/product/${id}`);
  };

  return (
    <Card elevation={0} sx={{ maxWidth: 345, borderRadius: "15px" }}>
      <CardActionArea onClick={navigateToBook}>
        <CardMedia
          sx={{
            objectFit: "contain",
          }}
          component="img"
          height="250"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default BookCard;
