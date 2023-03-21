import { useContext } from 'react';
import { ContextBook } from '../context/ContextBooks';

export function Home () {
  const { books } = useContext(ContextBook);

  return (
    <div className="px-6">
      {books.map((el) => (
        <div key={el.id} className='bg-zinc-700 w-60 flex flex-col justify-center items-center gap-3 my-4 text-center'>
          <h2 className='font-bold'>{el.name}</h2>
          <p>{el.description}</p>
        </div>
      ))}
    </div>
  );
}
