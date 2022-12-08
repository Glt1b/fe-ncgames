import { createContext, useState } from "react";

export const QueryContext = createContext();

export const QueryProvider = ({ children }) => {
  const [query, setQuery] = useState({
    sort_by: 'date',
    order: 'DESC'
  });


  return (
    <QueryContext.Provider value={{ query, setQuery}}>
      {children}
    </QueryContext.Provider>
  );
};
