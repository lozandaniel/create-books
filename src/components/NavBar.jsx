import { Link } from 'react-router-dom';

export function NavBar () {
  return (
    <div className="flex justify-center gap-x-4 py-4">
      <Link className="text-blue-600 font-semibold" to={'/'}>
        Home
      </Link>
      <Link className="text-violet-600 font-semibold" to={'/create'}>
        Create
      </Link>
    </div>
  );
}
