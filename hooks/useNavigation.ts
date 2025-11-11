import { useNavigate, useLocation } from 'react-router-dom';

export function useNavigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (path: string, hash?: string) => {
    if (path === location.pathname) {
      // Same page, just scroll
      if (hash) {
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    } else {
      // Different page
      if (hash) {
        navigate(`${path}#${hash}`);
      } else {
        navigate(path);
      }
    }
  };

  return handleNavigate;
}
