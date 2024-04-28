import React from "react";
import { useNavigate } from "react-router";
import { routes } from "../../Routes/index.js";
import { Link } from "react-router-dom";

const Table = ({ transactions = [], deleteHandler }) => {
  const navigate = useNavigate();
  return (
    <div className={"m-3 p-3"}>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right table-fixed ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Transaction ID
              </th>
              <th scope="col" className="px-6 py-3">
                Service type
              </th>
              <th scope="col" className="px-6 py-3">
                Card
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Amount
              </th>
              <th scope="col" className="px-6 py-3">
                Type
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => {
              return (
                <tr
                  key={transaction.id}
                  className={`   border-b dark:border-gray-700 ${transaction.type === "withdraw" ? "bg-green-50" : "bg-red-50"}`}
                >
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap "
                  >
                    {index + 1}
                  </td>
                  <td className="px-6 py-4">{transaction.description}</td>
                  <td className="px-6 py-4">{transaction.id}</td>
                  <td className="px-6 py-4 capitalize">
                    {transaction.serviceType}
                  </td>
                  <td className="px-6 py-4">{transaction.card}</td>
                  <td className="px-6 py-4">{transaction.date}</td>
                  <td className="px-6 py-4">{transaction.amount}</td>
                  <td className="px-6 py-4 capitalize">{transaction.type}</td>
                  <td className="px-6 py-4">
                    <button
                      className={
                        "select-none bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-1 w-24"
                      }
                      onClick={() => {
                        deleteHandler(transaction.id);
                      }}
                    >
                      Delete
                    </button>
                    <button
                      className={
                        "select-none bg-cyan-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-1 w-24"
                      }
                    >
                      Update
                    </button>
                    <Link
                      to={routes.transactions.details.replace(
                        ":id",
                        transaction.id,
                      )}
                      className={
                        "select-none block text-center bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-24"
                      }
                    >
                      Read
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
