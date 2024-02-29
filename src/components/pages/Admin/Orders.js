import React, { useContext, useEffect, useState } from "react";
import "../../css/admin/orders.css";
import Appcontext from "../../context/Appcontext";

const Productlist = () => {
  //   const mainstate = useContext(Appcontext);
  let count = 0;
  const [orders, setOrders] = useState();

  async function getAllOrders() {
    try {
      await fetch("http://localhost/api/orders/getallorders", {
        // await fetch("http://localhost/api/orders/getallorders",{
        method: "GET",
        headers: { "Content-type": "application/json" },
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          if (data.success === true) {
            setOrders(data.orders);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllOrders();
  }, []);

  return (
    <>
      <div className="o-one">
        <h1 className="table-hone">Orders</h1>
        <div className="o-two">
          <table className="o-table-control">
            <tr className="o-table-header">
              <th className="o-table-heading">Sl no</th>
              <th className="o-table-heading">Name</th>
              <th className="o-table-heading">Category</th>
              <th className="o-table-heading">Phone no</th>
              <th className="o-table-heading">Amount</th>
              <th className="o-table-heading">Date of purchase</th>
              <th className="o-table-heading">CashF OrderID</th>
            </tr>
            {orders
              ? orders.map((ele, index) => {
                  return (
                    <tr className="o-table-child-row1" key={index}>
                      <td className="o-table-data">{++count}</td>
                      <td className="o-table-data ">
                        {ele.client_details.name}
                      </td>
                      <td className="o-table-data">
                        {ele.client_details.email}
                      </td>
                      <td className="o-table-data">
                        {ele.client_details.phone}
                      </td>
                      <td className="o-table-data">{ele.amount}</td>
                      <td className="o-table-data ">{ele.created_at}</td>
                      <td className="o-table-data ">{ele.cf_orderid}</td>
                    </tr>
                  );
                })
              : null}
          </table>
        </div>
      </div>
    </>
  );
};

export default Productlist;
