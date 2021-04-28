import React from "react";
import AuthGuard from "../../auth/AuthGuard";
import AdminNavBar from "./AdminNavBar";

const AdminLayout = ({ children, layoutData }) => {
  return (
    <AuthGuard user={layoutData.user}>
      <div className="body-inner">
        <AdminNavBar />
        {children}
      </div>
    </AuthGuard>
  );
};

export default AdminLayout;
