import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

type ContextType = { setTitle: (title: string) => void };

export const PageWrapper = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const { setTitle } = useOutletContext<ContextType>();

  useEffect(() => {
    setTitle(title);
  }, [title, setTitle]);

  return <>{children}</>;
};