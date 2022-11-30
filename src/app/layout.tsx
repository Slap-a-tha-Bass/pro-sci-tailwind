import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body className={"bg-gradient-to-b from-black to-slate-900"}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
