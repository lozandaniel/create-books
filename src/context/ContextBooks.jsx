import { createContext, useState } from 'react';

export const ContextBook = createContext();

export function ContextBooks ({ children }) {
  const [books, setBooks] = useState([
    {
      id: 1,
      name: 'El gato con botas 2',
      description: 'El gato con botas'
      /* completed: false */
    }
  ]);

  const createBook = (book) => {
    setBooks([...books, book]);
  };

  const getOneBook = (id) => {
    return books.find((el) => el.id === id);
  };

  const deleteBook = (id) => {
    return books.find((el) => el.id !== id);
  };

  return (
    <ContextBook.Provider value={{ books, createBook, getOneBook, deleteBook }}>
      {children}
    </ContextBook.Provider>
  );
}
