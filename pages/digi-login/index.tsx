import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import api from "../api/api";
import styles from "../../styles/Login.module.scss";
import { useToasts } from "react-toast-notifications";

const Index: React.FC = () => {
  const [data, setData] = useState<{ [key: string]: string }>({});
  const router = useRouter();
  const { addToast } = useToasts();

  useEffect(() => {
    const token = localStorage.getItem("digitoken");
    if (token && token !== "") {
      router.push("/send-mail-to-subscriber");
    }
  }, []);

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await api(process.env.NEXT_PUBLIC_BACKEND_URL).post(
        "/api/login",
        data
      );

      if (response?.status === 200) {
        localStorage.setItem("digitoken", response.data.data.token);
        router.push("/send-mail-to-subscriber");
      }
    } catch (err: any) {
      if (err?.response?.status === 401) {
        console.log(err);
        localStorage.clear();
        addToast(err?.response?.data?.error, { appearance: "error" });
      } else {
        addToast(err?.message, { appearance: "error" });
      }
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
