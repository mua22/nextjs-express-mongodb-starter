import React from "react";
import AdminLayout from "../../components/admin/layout/AdminLayout";
import sessionProps from "../../next-middlewares/sessionProps";

const AdminDashboard = ({ layoutData }) => {
  return (
    <AdminLayout layoutData={layoutData}>
      <h1>Dashboard</h1>
    </AdminLayout>
  );
};

export default AdminDashboard;
export const getServerSideProps = async function (context) {
  let layoutData = await sessionProps(context);

  return { props: { layoutData } };
};
