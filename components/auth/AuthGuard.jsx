import React from "react";
import { useRouter } from "next/router";

const AuthGuard = ({ user, children }) => {
  const router = useRouter();
  React.useEffect(() => {
    if (!user) router.push("/login");
  }, []);
  if (!user) return null;
  return <>{children}</>;
};

export default AuthGuard;
