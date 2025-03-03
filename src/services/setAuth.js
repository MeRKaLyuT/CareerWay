import { useState, useEffect } from "react";

export const setAuth = () => {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
      const token = localStorage.getItem('access');
      if (token) {
        try {
          const payload = JSON.parse(atob(token.split('.')[1]));
          const currentTime = Math.floor(Date.now() /1000);
          if (payload.exp > currentTime) {
            setIsAuth(true);
          }
        } catch (err) {
          console.error('Invalid token:', err);
        }
      }
    }, []);

    return isAuth;
};