import { useEffect, useState } from "react";

function Me() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/me`, {
        credentials: "include",
        cache: "no-store",
      });

      if (!res.ok) {
        setUser(null);
        return;
      }

      const data = await res.json();

      setUser(data);
    };

    getUser();
  }, []);

  return { user , setUser};
}

export default Me;
