import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useToasts } from "react-toast-notifications";
import styles from "../../styles/SendMailToSubscriber.module.scss";
import Drawer from "@/components/Drawer";
import api from "../api/api";

const Index: React.FC = () => {
  const router = useRouter();
  const { addToast } = useToasts();
  const [data, setData] = useState<{ [key: string]: string }>({});
  const [isOpenSubscriber, setIsOpenSubscriber] = useState<boolean>(false);
  const [isOpenContacter, setIsOpenContacter] = useState<boolean>(false);
  const [loader, setLoader] = useState<boolean>(false);
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

  const convertDateNTime = (string: string) => {
    const timestamp = new Date(string);

    const year = timestamp.getFullYear();
    const month = timestamp.getMonth() + 1;
    const day = timestamp.getDate();

    const hours = timestamp.getHours();
    const minutes = timestamp.getMinutes();
    const seconds = timestamp.getSeconds();

    return `${day < 10 ? "0" + day : day}/${
      month < 10 ? "0" + month : month
    }/${year} ${hours < 10 ? "0" + hours : hours}:${
      minutes < 10 ? "0" + minutes : minutes
    }`;
  };

  const getDashboardData = async () => {
    try {
      const response = await api(process.env.NEXT_PUBLIC_BACKEND_URL).get(
        "/api/count"
      );

      if (response?.status === 200) {
        setDashboard((prevDashboard) => ({
          ...prevDashboard,
          totalContactUs:
            response?.data?.data?.totalContactUsCount ??
            prevDashboard.totalContactUs,
          totalNewsltterSubscriber:
            response?.data?.data?.totalSubscribers ??
            prevDashboard.totalNewsltterSubscriber,
        }));
      }
    } catch (err: any) {
      addToast("Cannot load dashboard data", { appearance: "error" });
    }
  };

  const getContactedTableData = async () => {
    try {
      const response1 = await api(process.env.NEXT_PUBLIC_BACKEND_URL).get(
        "/api/contacted"
      );
      if (response1?.status === 200) {
        setDashboard((prevDashboard) => ({
          ...prevDashboard,
          contacters: response1?.data?.data ?? prevDashboard.contacters,
        }));
      }
    } catch (err) {
      addToast("Cannot load Contact us data", {
        appearance: "error",
      });
    }
  };

  const getSubscriberTableData = async () => {
    try {
      const response2 = await api(process.env.NEXT_PUBLIC_BACKEND_URL).get(
        "/api/subscribers"
      );
      if (response2?.status === 200) {
        setDashboard((prevDashboard) => ({
          ...prevDashboard,
          subscribers: response2?.data?.data ?? prevDashboard.subscribers,
        }));
      }
    } catch (err) {
      addToast("Cannot load Subscriber data", {
        appearance: "error",
      });
    }
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("digitoken");
    if (!storedToken || storedToken === "") {
      router.push("/digi-login");
    }
  }, []);

  useEffect(() => {
    getDashboardData();
  }, []);

  useEffect(() => {
    getSubscriberTableData();
  }, []);

  useEffect(() => {
    getContactedTableData();
  }, []);

  const handleLogout = async () => {
    try {
      const response = await api(process.env.NEXT_PUBLIC_BACKEND_URL).post(
        "/api/logout",
        data
      );

      if (response.status === 200) {
        localStorage.removeItem("digitoken");
        router.push("/digi-login");
      }
    } catch (err: any) {
      addToast(err?.response?.data?.error ?? "Error in Logout", {
        appearance: "error",
      });
    }
  };

  const handleSendToAll = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoader(true);
    if (!Object.keys(data).length) {
      setLoader(false);
      return addToast("Please Fill all the data...", { appearance: "error" });
    }
    if (!data?.title || data?.title === "") {
      setLoader(false);
      return addToast("Please Fill title", { appearance: "error" });
    }
    if (!data?.description || data?.description === "") {
      setLoader(false);
      return addToast("Please Fill description", { appearance: "error" });
    }

    try {
      const response = await api(process.env.NEXT_PUBLIC_BACKEND_URL).post(
        "/api/send-email",
        data
      );

      if (response.status === 200) {
        setLoader(false);
        addToast(response?.data?.message, { appearance: "success" });
        setData({});
      }
    } catch (err: any) {
      if (err?.response?.status === 401) {
        localStorage.clear();
        addToast(err?.response?.data?.error, { appearance: "error" });
        setTimeout(() => {
          window.location.replace("/digi-login");
        }, 3000);
      } else {
        addToast(err?.message, { appearance: "error" });
      }
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
                    <td>{convertDateNTime(data.subscribedAt) ?? "-"}</td>
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
                    <td>{convertDateNTime(data.createdAt) ?? "-"}</td>
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
              value={data?.title ?? ""}
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
              value={data?.description ?? ""}
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
