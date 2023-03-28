import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextBook } from '../context/ContextBooks';

export function Home () {
  const { books } = useContext(ContextBook);

  return (
    <section className="max-w-3xl px-6 grid grid-cols-1 place-items-center justify-center items-center mx-auto gap-4 sm:grid-cols-2 md:grid-cols-3">
      {books.map((book) => (
        <Link to={`/view/${book.id}`} key={book.id}>
          <article className="shadow-next flex-col justify-center items-center gap-3 p-3  rounded-lg text-center">
            <div className="w-40 h-40 inline-block">
              <img
                src={book.image}
                alt="Sonic Film"
                className=" object-cover w-full h-full"
              />
            </div>
            <h2 className="font-semibold w-44 text-left my-3 h-10 leading-4">{book.name}</h2>
            <p className="text-left">Precio: ${book.price.toLocaleString()}</p>
          </article>
        </Link>
      ))}
    </section>
  );
}
