import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 3000);
  }, []);

  return (
    <div>
      <h1>Whoops...</h1>
      <h2>Page not found</h2>
    </div>
  );
}

export default NotFound;