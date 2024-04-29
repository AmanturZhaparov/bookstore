import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Snackbar,
  Typography,
} from "@mui/material";
import PocketBase from "pocketbase";
import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import BookCard from "./BookCard";
const HomePage = () => {
  const [loading, setLoading] = useState();
  const [open, setOpen] = useState();
  const [error, setError] = useState();
  const [books, setBooks] = useState([]);

  const pb = new PocketBase("https://book-shop.fly.dev");

  const getBooks = async () => {
    try {
      const resultList = await pb.collection("Books").getList(1, 50, {
        $autoCancel: false,
      });
      setBooks(resultList);
    } catch (e) {
      console.log(e);
      setError(e);
      handleClick();
    }
  };
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  useEffect(() => {
    getBooks();
  }, []);
  return (
    <Container>
      {console.log(books)}
      <h1>Books</h1>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message="Note archived"
        action={action}
      />

      <Grid container spacing={2}>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          books?.items?.map((book) => (
            <Grid key={book.id} item xs={6} sm={4} md={4} lg={3}>
              <BookCard
                id={book.id}
                title={book.title}
                img={`https://book-shop.fly.dev/api/files/Books/${book.id}/${book.img}`}
              />
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
};

export default HomePage;
