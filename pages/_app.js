import { ChatProvider } from "@/context/ChatContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ChatProvider>
      <Component {...pageProps} />
    </ChatProvider>);
}
