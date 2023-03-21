import { useState, useContext } from 'react';
import { ContextBook } from '../context/ContextBooks';

export function Create () {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState(false);
  const { createBook } = useContext(ContextBook);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      id: crypto.randomUUID(),
      name,
      description
    };

    createBook(newBook);
  };

  return (
    <div className=" max-w-3xl mx-auto w-full px-6">
      <form
        className="flex flex-col justify-center items-center bg-zinc-700 gap-4 p-8 rounded-xl text-black"
        onSubmit={handleSubmit}
      >
        <input
          className="px-2 py-1 w-full rounded-lg"
          type="text"
          placeholder="Name book"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="px-2 py-1 w-full rounded-lg"
          type="text"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          className="px-2 py-1 w-full rounded-lg"
          type="file"
          placeholder="Subir Imagen"
        />
        <label htmlFor="completed">
          Completed
          <input
            id="completed"
            className="px-2 py-1 w-5"
            type="checkbox"
            onChange={(e) => setCompleted(e.target.value)}
          />
        </label>
        <button className="bg-blue-600 font-semibold px-3 py-1 rounded-lg">
          Crear Libro
        </button>
      </form>
    </div>
  );
}
