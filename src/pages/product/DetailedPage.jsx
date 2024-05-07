import { useParams, useNavigate } from "react-router-dom";
import PocketBase from "pocketbase";
import React from "react";

const DetailedPage = () => {
  const productId = useParams();
  const [loading, setLoading] = React.useState(true);
  const [book, setBook] = React.useState();
  const pb = new PocketBase("https://book-shop.fly.dev");

  const getBook = async () => {
    const record = await pb.collection("Books").getOne(productId.id, {
      //   expand: "relField1,relField2.subRelField",
      $autoCancel: false,
    });
    console.log(record);
    setBook(record);
  };

  React.useEffect(() => {
    getBook();
  }, []);
  return (
    <div>
      <h1>{book?.title}</h1>
      <h1>{book?.Author}</h1>
      <h2>{productId.id}</h2>
      <img
        src={`https://book-shop.fly.dev/api/files/Books/${book?.id}/${book?.img}`}
        alt=""
      />
    </div>
  );
};

export default DetailedPage;
