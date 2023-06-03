import { useState, createContext } from "react";
const listData_item = createContext();

function ListData_itemProvider({ children }) {
  const [detailItem, setDetailItem] = useState({
    name: "",
    description: "",
    price: 0,
  });
  return (
    <ListData_itemProvider.Provider value={detailItem}>
      {children}
    </ListData_itemProvider.Provider>
  );
}
export { listData_item, ListData_itemProvider };
