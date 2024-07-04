import Footer from "../components/footer";
import NavBar from "../components/nav";

export default function PagesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <header className="">
    <NavBar />
    <main>{children}</main>
    <Footer />
  </header>;
}
