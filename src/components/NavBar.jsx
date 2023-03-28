import { Link } from 'react-router-dom';

export function NavBar () {
  return (
    <div className="flex justify-center gap-x-4 py-4">
      <Link className="font-semibold" to={'/'}>
        Home
      </Link>
      <Link
        className="text-cyan-700 font-semibold transition-all hover:text-cyan-500"
        to={'/create'}
      >
        Crear Libro
      </Link>
    </div>
  );
}
