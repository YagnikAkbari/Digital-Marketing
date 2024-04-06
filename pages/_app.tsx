import store from "@/store/store";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { ToastProvider } from "react-toast-notifications";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ToastProvider
        placement="top-center"
        autoDismiss={true}
        newestOnTop={true}
        autoDismissTimeout={3000}
      >
        <Component {...pageProps} />
      </ToastProvider>
    </Provider>
  );
}
