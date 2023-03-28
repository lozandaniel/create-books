import { useState, useContext } from 'react';
import { ContextBook } from '../context/ContextBooks';

export function Create () {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [language, setLanguage] = useState('');
  const [category, setCategory] = useState('');
  const [author, setAuthor] = useState('');
  const [pages, setPages] = useState('');
  const [price, setPrice] = useState(0);
  const [year, setYear] = useState(0);
  const [completed, setCompleted] = useState(false);
  const { createBook } = useContext(ContextBook);

  /* const [uploadFile, setUploadFile] = useState('');
  const [cloudinaryImage, setCloudinaryImage] = useState(''); */

  /* const handleUpload = (e) => {
    const formData = new FormData();
    formData.append('file', uploadFile);
    formData.append('upload_preset', 'images');

    Axios
      .post('https://api.cloudinary.com/v1_1/dlgjv9ea7/image/upload', formData)
      .then((response) => {
        console.log(response);
        setCloudinaryImage(response.data.secure_url);
      })
      .catch((error) => {
        console.log(error);
      });
  }; */

  /* const handleChange = (e) => {
    setDataBook({
      ...dataBook,
      [e.target.name]: e.target.value
    });
  }; */

  const handleSubmit = (e) => {
    e.preventDefault();
    /* handleUpload(); */
    const newBook = {
      id: crypto.randomUUID(),
      name,
      author,
      description,
      language,
      category,
      pages,
      price,
      year,
      completed
    };
    createBook(newBook);
  };

  return (
    <div className="max-w-3xl mx-auto w-full px-6">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center shadow-next gap-4 p-8 rounded-xl text-black"
      >
        <input
          type="text"
          placeholder="Nombre del libro"
          required
          className="px-2 py-1 w-full rounded-lg border border-zinc-400"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Autor"
          required
          className="px-2 py-1 w-full rounded-lg border border-zinc-400"
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          type="text"
          placeholder="Resumen"
          required
          className="px-2 py-1 w-full rounded-lg border border-zinc-400"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Lenguaje"
          className="px-2 py-1 w-full rounded-lg border border-zinc-400"
          onChange={(e) => setLanguage(e.target.value)}
        />
        <input
          type="text"
          placeholder="Categoria"
          className="px-2 py-1 w-full rounded-lg border border-zinc-400"
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="number"
          placeholder="Numero total de paginas"
          className="px-2 py-1 w-full rounded-lg border border-zinc-400"
          onChange={(e) => setPages(e.target.value)}
        />
        <input
          type="number"
          placeholder="Año de creaciòn"
          className="px-2 py-1 w-full rounded-lg border border-zinc-400"
          onChange={(e) => setYear(e.target.value)}
        />
        <input
          type="number"
          placeholder="Precio"
          required
          className="px-2 py-1 w-full rounded-lg border border-zinc-400"
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="file"
          className="px-2 py-1 w-full rounded-lg"
          placeholder="Subir Imagen"
          // onChange={(e) => setUploadFile(e.target.files[0])}
          accept=".jpg, .png"
        />

        {/* <label htmlFor="completed">
          Completed
          <input
            id="completed"
            className="px-2 py-1 w-5"
            type="checkbox"
            onChange={(e) => setCompleted(e.target.checked)}
          />
        </label> */}
        <button className="transition bg-cyan-600 hover:bg-cyan-400 hover:text-black text-white font-semibold px-3 py-1 rounded-lg">
          Crear Libro
        </button>
      </form>
    </div>
  );
}
