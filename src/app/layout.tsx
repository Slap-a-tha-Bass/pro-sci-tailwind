import Footer from "../components/footer";
import Header from "../components/header";
import "../styles/globals.css";

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body className={"bg-gradient-to-b from-black to-slate-900"}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
