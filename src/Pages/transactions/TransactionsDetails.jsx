import React from "react";
import { fetchApi } from "../../Utils/fetchApi.js";
import { useParams } from "react-router-dom";

const TransactionsDetails = () => {
  //=============================================
  // init
  //=============================================
  const { id } = useParams();
  const [details, setDetails] = React.useState(null);

  //=============================================
  // Handler
  //=============================================
  const getTransaction = async (id) => {
    const response = await fetchApi(`/transactions/${id}`);
    return response.json();
  };

  React.useEffect(() => {
    getTransaction(id).then((data) => {
      setDetails(data);
    });
  }, [id]);

  //=============================================
  // Render
  //=============================================
  return details === null ? (
    <div>No data</div>
  ) : (
    <pre className={"m-3 p-3 whitespace-pre-wrap"}>
      {JSON.stringify(details)}
    </pre>
  );
};

export default TransactionsDetails;
