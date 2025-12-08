import Header from "../components/Header";
import Steps from "../components/Steps";
import Footer from "../components/Footer";

export default function ChildJurney() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-[#e8eff6]">
        
        {/* Header (always top) */}
        <Header />

        {/* Middle content takes remaining space */}
        <div className="flex-1 flex items-center justify-center px-4 py-8 mt-[10vh]">
          <Steps />
        </div>

        {/* Footer (always bottom) */}
        <Footer />
      </div>
    </>
  );
}
