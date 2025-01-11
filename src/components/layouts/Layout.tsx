import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  const [title, setTitle] = useState('默认标题');

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <Outlet context={{ setTitle }} />
    </>
  );
};

export default Layout;
