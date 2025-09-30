import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function BlogLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar />
      </header>
      <main className="flex-1">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}