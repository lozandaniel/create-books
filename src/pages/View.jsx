import { useState, useEffect, useContext } from 'react';

import { useParams } from 'react-router-dom';
import { ContextBook } from '../context/ContextBooks';

export function View () {
  const [item, setItem] = useState(null);
  const params = useParams();
  const { getOneBook } = useContext(ContextBook);

  useEffect(() => {
    const book = getOneBook(params.id);
    console.log(book);
    setItem(book);
  }, []);

  if (!item) {
    return (
      <div className="w-full text-center mx-auto">
        <h2 className="text-5xl font-bold tracking-tighter mb-2">
          No se encuentra el libro solicitado!
        </h2>
        <div className='w-1/2 mx-auto'>
          <iframe
            src="https://giphy.com/embed/2UCt7zbmsLoCXybx6t"
            width="100%"
            height="100%"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
  }

  return (
    <div className="justify-center p-4 shadow-next max-w-3xl mx-auto rounded-lg mb-4">
      <div className="flex flex-col md:flex-row gap-3 items-center md:items-start justify-center">
        <div className="flex-1">
          <img className="w-72" src={item?.image} alt={item?.name} />
          <p>Autor: {item?.author}</p>
          <p>Categoria: {item?.category}</p>
          <p>Idioma: {item?.language}</p>
          <p>Año: {item?.year}</p>
          <p>Num. Paginas: {item?.pages}</p>
        </div>
        <div className="flex-1">
          <em>Codigo: {item?.id}</em>
          <div>
            <h2 className="text-3xl font-bold">{item?.name}</h2>
            <p className="">
              Resumen: <span>{item?.resumen}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="py-4">
        <p className="flex flex-col">
          Precio{' '}
          <span className="font-bold">${item?.price.toLocaleString()} COP</span>
        </p>
      </div>
    </div>
  );
}
