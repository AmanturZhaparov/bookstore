import { useParams, useNavigate } from "react-router-dom";
import PocketBase from "pocketbase";
import React from "react";
import "./k2d.css"
import "./a.css"
import { Flex, background } from "@chakra-ui/react";



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
      <img style={{
        minWidth: 330,
        borderRadius: 15,
        marginTop: 90
      }}
      
      
         
        src={`https://book-shop.fly.dev/api/files/Books/${book?.id}/${book?.img}`}
        alt=""
      />
      
      
      
      <div style={{fontFamily: "K2D", textAlign: "left", fontWeight: 400, color: "black"}}>
      
      <h1 style={{fontSize:40, margin:0}}>{book?.title}</h1>
      
      <div style={{display: "flex", margin: 0,minWidth: 330}}>
        <h1 style={{fontSize:30,color: "#7A8FFE"}}>Price</h1>
        <h1  style={{fontSize:30}}>:{book?.price}$</h1>
        </div>
        <div style={{display: "flex", margin: 0}}>
        <h1 style={{fontSize:20,color: "#7A8FFE"}}>Author</h1>
        <h1  style={{fontSize:20}}>:{book?.Author}</h1>
        </div>
        <h1  style={{fontSize:15,color:"black"}}>Where you can buy it:{book?.Book_Shop}</h1>


      <div  className="as" dangerouslySetInnerHTML={{__html: book?.definition}}></div>

      </div>
     
     
    </div>
  );
};

export default DetailedPage;

     
         
                 