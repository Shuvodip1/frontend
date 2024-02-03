import ScrollToTop from "./components/client/ScrollToTop";
import "./globals.css";

export const metadata = {
  title: "Medilab",
  description: "We save life",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="scroll-smooth">
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
