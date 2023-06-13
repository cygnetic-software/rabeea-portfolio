import React, { useEffect, useState } from "react";
import { db, storage } from "../firebase";
import { getDownloadURL, ref } from "firebase/storage";
import { collection, getDocs } from "firebase/firestore";

const DataContext = React.createContext();
export const useData = () => React.useContext(DataContext);
const DataProvider = ({ children }) => {
  const [pdfList, setPdfList] = useState([]);
  const [current, setCurrent] = useState("");
  const BringIntoView = (id) => {
    const element = document.querySelector(id);
    element.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  useEffect(() => {
    getDocs(collection(db, "projects")).then((querySnapshot) => {
      const promises = querySnapshot.docs.map(async (doc) => {
        const data = doc.data();

        const pdfUrl = await getDownloadURL(ref(storage, data.pdfURL));
        const thumbnailUrl = await getDownloadURL(
          ref(storage, data.thumbnailURL)
        );

        return { ...data, pdfURL: pdfUrl, thumbnailURL: thumbnailUrl };
      });

      Promise.all(promises).then((results) => {
        setPdfList(results);
      });
    });
  }, []);

  return (
    <DataContext.Provider
      value={{ pdfList, BringIntoView, setCurrent, current }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
