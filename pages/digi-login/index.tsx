import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import styles from "../../styles/Login.module.scss";

const Index: React.FC = () => {
  const [data, setData] = useState<{ [key: string]: string }>({});
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("digitoken");
    if (token && token !== "") {
      router.push("/send-mail-to-subscriber");
    }
  }, []);

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      // Handle authentication success and redirect if necessary
      if (response.ok) {
        localStorage.setItem("digitoken", responseData.data.token);
        router.push("/send-mail-to-subscriber");
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <form onSubmit={handleLogin} className={styles.loginform}>
      <div className="grid w-50 items-center gap-1.5">
        <label
          className="text-sm font-medium leading-none text-gray-700"
          htmlFor="email"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email..."
          onChange={(e) =>
            setData({ ...data, [e.target.name]: e.target.value })
          }
        />
      </div>
      <div className="grid w-50 items-center gap-1.5">
        <label
          className="text-sm font-medium leading-none text-gray-700"
          htmlFor="message"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password..."
          onChange={(e) =>
            setData({ ...data, [e.target.name]: e.target.value })
          }
        />
      </div>
      <div className="grid w-50 items-center gap-1.5">
        <input
          type="submit"
          value="Login"
          className={`rounded-md text-sm font-semibold ${styles["contact-us-submit"]}`}
        />
      </div>
    </form>
  );
};

export default Index;
