import { createContext, useState } from 'react';

export const ContextBook = createContext();

export function ContextBooks ({ children }) {
  const [books, setBooks] = useState([
    {
      id: crypto.randomUUID(),
      name: 'Cien Años de Soledad',
      image:
        'https://www.penguinlibros.com/co/1694219/cien-anos-de-soledad-edicion-ilustrada.jpg',
      author: 'Gabriel Garcia Marquez',
      resumen:
        '"Muchos años después, frente al pelotón de fusilamiento, el coronel Aureliano Buendía había de recordar aquella tarde remota en que su padre lo llevó a conocer el hielo". Con estas palabras empieza una novela ya legendaria en los anales de la literatura universal, una de las aventuras literarias más fascinantes del siglo xx. Millones de ejemplares de Cien años de soledad leídos en todas las lenguas y el Premio Nobel de Literatura coronando una obra que se había abierto paso a "boca a boca" --como gusta decir el escritor-- son la más palpable demostración de que la aventura fabulosa de la familia Buendía-Iguarán, con sus milagros, fantasías, obsesiones, tragedias, incestos, adulterios, rebeldías, descubrimientos y condenas, representaba al mismo tiempo el mito y la historia, la tragedia y el amor del mundo entero.',
      language: 'Español',
      year: 2017,
      pages: 400,
      category: 'Novela, Realismo, Ficciòn Èpica',
      price: 116999,
      completed: false
    },
    {
      id: crypto.randomUUID(),
      name: 'El club de las 5 de mañana',
      resumen:
        'Robin Sharma es uno de los mayores expertos mundiales en liderazgo y desempeño. Desarrolló el concepto del club de las 5 de la mañana hace más de veinte años a partir de los revolucionarios hábitos que han permitido a sus clientes incrementar su productividad; mejorar su salud y afrontar con serenidad la extremadamente compleja época en que vivimos.',
      image:
        'https://image.cdn0.buscalibre.com/5c81b76f14c761f96b8b4567.__RS360x360__.jpg',
      author: 'Robin Sharma',
      pages: 400,
      language: 'Español',
      year: 2019,
      category: 'Motivación y Autoayuda',
      completed: true,
      price: 59000
    },
    {
      id: crypto.randomUUID(),
      name: 'Los 7 Hábitos de la Gente Altamente Efectiva',
      resumen:
        'Casi todo el mundo intuye que su comportamiento, tanto en el trabajo como en la vida privada, podría mejorar en muchos aspectos, pero pocos saben cómo conseguirlo. Stephen R. Covey, el llamado Sócrates americano, no da consejos paternalistas ni se dedica a sermonear sin ton ni son. Su método es claro, certero y eficiente: casi un cursillo dividido en siete etapas que el lector deberá asimilar y poner en práctica por su propia cuenta, adaptándolas a su personalidad y aplicándolas libremente en todos los ámbitos de su vida cotidiana. Para ello, el autor se sirve de anécdotas penetrantes y significativas destinadas a hacernos reflexionar sobre cada uno de nuestros actos y sobre el modo de acceder al cambio, a la verdadera paz mental.',
      image:
        'https://panamericana.vtexassets.com/arquivos/ids/237434-800-auto?v=636379808008100000&width=800&height=auto&aspect=true',
      author: 'Stephen R. Covey',
      pages: 496,
      language: 'Español',
      year: 2014,
      category: 'Motivación y Autoayuda',
      completed: false,
      price: 47200
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
