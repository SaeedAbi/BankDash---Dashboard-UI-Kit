import React from "react";
import Table from "./Table.jsx";
import { fetchApi } from "../../Utils/fetchApi.js";

const Transactions = () => {
  //=============================================
  // Init
  //=============================================
  const [transactions, setTransactions] = React.useState([]);

  //=============================================
  // Handlers
  //=============================================
  const getTransactions = async () => {
    const response = await fetchApi("/transactions");
    return response.json();
  };
  // responsible only for deleting from BE
  const deleteTransaction = async (id) => {
    const response = await fetchApi(`/transactions/delete/${id}`, {
      method: "DELETE",
    });
  };
  // responsible for clicking on delete button
  const deleteHandler = async (id) => {
    await deleteTransaction(id);
    const newTransactions = await getTransactions();
    setTransactions(newTransactions);
  };

  React.useEffect(() => {
    getTransactions().then((data) => {
      setTransactions(data);
    });
  }, []);

  //=============================================
  // Render
  //=============================================
  return <Table transactions={transactions} deleteHandler={deleteHandler} />;
};

export default Transactions;
