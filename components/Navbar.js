import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <div>
        <h1>David Schlundt-Bodien</h1>
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
        <Link href="/projects"><a>Projects</a></Link>
      </div>
    </nav>
  );
};

export default Navbar;