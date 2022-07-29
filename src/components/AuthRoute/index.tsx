import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  children: JSX.Element;
}
export const AuthRoute = ({ children }: Props) => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useLayoutEffect(() => {
    AuthCheck();
    return AuthCheck()
  }, []);

  const AuthCheck = onAuthStateChanged(auth, (user) => {
    if (user) {
      setLoading(false);
    } else {
      navigate("/login");
    }
  });

  if (loading) return <p> loading...</p>;

  return <>{children}</>;
};
