import React from 'react';
import AdminHeader from './AdminHeader';

const AdminLayout = ({ children, title, description, keywords, author }) => {

  return (
    <main>

      <AdminHeader />
      {children}
    </main>
  );
};

export default AdminLayout;
