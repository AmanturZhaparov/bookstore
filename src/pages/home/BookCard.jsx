import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PocketBase from "pocketbase";

const BookCard = ({ title, img, id }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(true);
  const [book, setBook] = React.useState();
  const pb = new PocketBase("https://book-shop.fly.dev");

  const navigateToBook = () => {
    navigate(`/product/:${id}`);
  };

  const getBook = async () => {
    const record = await pb.collection("Books").getOne(id, {
      //   expand: "relField1,relField2.subRelField",
    });
    console.log(record);
    setBook(record);
  };

  React.useEffect(() => {
    getBook();
  }, []);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={navigateToBook}>
        <CardMedia
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
