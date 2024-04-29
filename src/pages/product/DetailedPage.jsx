import { useParams } from "react-router-dom";

const DetailedPage = () => {
  const productId = useParams();

  return (
    <>
      <h1>Detailed</h1>
      <h2>{productId.id}</h2>
    </>
  );
};

export default DetailedPage;
