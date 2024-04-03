import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useToasts } from "react-toast-notifications";
import styles from "../../styles/SendMailToSubscriber.module.scss";
import Drawer from "@/components/Drawer";

const Index: React.FC = () => {
  const router = useRouter();
  const { addToast } = useToasts();
  const [data, setData] = useState<{ [key: string]: string }>({});
  const [isOpenSubscriber, setIsOpenSubscriber] = useState<boolean>(false);
  const [isOpenContacter, setIsOpenContacter] = useState<boolean>(false);
  const [loader, setLoader] = useState<boolean>(false);
  const [token, setToken] = useState<string>("");
  const [dashboard, setDashboard] = useState<{
    totalContactUs: number;
    totalNewsltterSubscriber: number;
    subscribers: any[];
    contacters: any[];
  }>({
    totalContactUs: 0,
    totalNewsltterSubscriber: 0,
    subscribers: [],
    contacters: [],
  });
  console.log(dashboard);
  const getDashboardData = async () => {
    const response = await fetch("http://localhost:5000/api/count", {
      method: "GET",
    });
    const response1 = await fetch("http://localhost:5000/api/contacted", {
      method: "GET",
    });
    const response2 = await fetch("http://localhost:5000/api/subscribers", {
      method: "GET",
    });
    const data = await response.json();
    const data1 = await response1.json();
    const data2 = await response2.json();
    setDashboard({
      totalContactUs: data.totalContactUsCount,
      totalNewsltterSubscriber: data.totalSubscribers,
      subscribers: data2,
      contacters: data1,
    });
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("digitoken");
    if (!storedToken || storedToken === "") {
      router.push("/digi-login");
    } else {
      setToken(storedToken);
    }
  }, []);

  useEffect(() => {
    getDashboardData();
  }, []);

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        localStorage.removeItem("digitoken");
        router.push("/digi-login");
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const handleSendToAll = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoader(true);
    try {
      const response = await fetch("http://localhost:5000/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, token }),
      });

      const responseData = await response.json();

      if (response.ok) {
        setLoader(false);
        addToast(responseData.message);
        setData({});
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.dashboard}`}>
        <h1 className={styles["dashboard-header"]}>Exclusive dashboard</h1>
        <button type="button" onClick={handleLogout} className={styles.logout}>
          Logout
        </button>
        <div className="flex space-x-6">
          <h2 className={styles.tiles}>
            Contacted You
            <span
              onClick={() => {
                setIsOpenContacter(true);
              }}
            >
              {dashboard.totalContactUs}
            </span>
          </h2>
          <h2 className={styles.tiles}>
            Newsletter Subscriber
            <span
              onClick={() => {
                setIsOpenSubscriber(true);
              }}
            >
              {dashboard.totalNewsltterSubscriber}
            </span>
          </h2>
        </div>
        <Drawer isOpen={isOpenSubscriber} setIsOpen={setIsOpenSubscriber}>
          <table className={styles["table-fixed"]}>
            <thead>
              <tr>
                <th>Email</th>
                <th>Subscribe At</th>
              </tr>
            </thead>
            <tbody>
              {dashboard.subscribers.map((data) => {
                return (
                  <tr>
                    <td>{data.email ?? "-"}</td>
                    <td>{data.subscribedAt ?? "-"}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Drawer>
        <Drawer isOpen={isOpenContacter} setIsOpen={setIsOpenContacter}>
          <table className={styles["table-fixed"]}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
                <th>Created At</th>
              </tr>
            </thead>
            <tbody>
              {dashboard.contacters.map((data) => {
                return (
                  <tr>
                    <td>{data.name ?? "-"}</td>
                    <td>{data.email ?? "-"}</td>
                    <td>{data.message ?? "-"}</td>
                    <td>{data.createdAt ?? "-"}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Drawer>
        <form onSubmit={handleSendToAll}>
          <div className="grid w-50 items-center gap-1.5">
            <label
              className="text-sm font-medium leading-none text-gray-700"
              htmlFor="email"
            >
              Subject
            </label>
            <input
              type="title"
              name="title"
              id="title"
              placeholder="Title"
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
              Description
            </label>
            <textarea
              name="description"
              id="description"
              placeholder="Description"
              onChange={(e) =>
                setData({ ...data, [e.target.name]: e.target.value })
              }
            />
          </div>
          <div className="grid w-50 items-center gap-1.5">
            <input
              type="submit"
              className={`rounded-md text-sm font-semibold ${styles["contact-us-submit"]}`}
              value={`${loader ? "Sending Mail..." : "Send Mail"}`}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Index;
