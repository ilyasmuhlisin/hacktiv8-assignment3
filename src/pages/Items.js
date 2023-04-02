import React from "react";
import { Outlet } from "react-router-dom";
import ItemRow from "../components/ItemRow";
import { getItems } from "../items";

function Items() {
  const items = getItems();
  return (
    <div>
      <h1>Items page</h1>
      <p>Select an item to be shown</p>
      <table>
        <tr>
          <th>Item</th>
          <th>Action</th>
        </tr>
        <tr>
          {items.map((item) => (
            <ItemRow key={item.id} item={item} />
          ))}
        </tr>
      </table>
      <Outlet />
    </div>
  );
}

export default Items;
