import Navbar from "@/components/Navbar";
import Footer from "@/components/NewFooter";

export default function ContactLayout({ children }) {
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