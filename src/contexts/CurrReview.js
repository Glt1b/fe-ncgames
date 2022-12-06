import { createContext, useState } from "react";

export const CurrReviewContext = createContext();

export const CurrReviewProvider = ({ children }) => {
  const [currReview, setCurrReview] = useState({});


  return (
    <CurrReviewContext.Provider value={{ currReview, setCurrReview }}>
      {children}
    </CurrReviewContext.Provider>
  );
};
