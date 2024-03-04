import React, { useContext, useState, useEffect } from "react";
import { db } from "../firebase/firebaseConfig";

const UserContext = React.createContext();

export function useFirestore() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [transactions, setTransactions] = useState([]);
  const [goals, setGoals] = useState([]);

  const getTransactions = async () => {
    const data = await getDocuments("transactions");
    setTransactions(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  const getGoals = async () => {
    const data = await getDocuments("goals");
    setGoals(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  function addDocument(collection, data) {
    return db.collection(collection).add(data);
  }

  function getDocument(collection, id) {
    return db.collection(collection).doc(id).get();
  }

  function getDocuments(collection) {
    return db.collection(collection).get();
  }

  function updateDocument(collection, id, data) {
    return db.collection(collection).doc(id).update(data);
  }

  function deleteDocument(collection, id) {
    return db.collection(collection).doc(id).delete();
  }

  const value = {
    addDocument,
    getDocument,
    getDocuments,
    updateDocument,
    deleteDocument,
    getTransactions,
    getGoals,
    transactions,
    goals,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
