import Header from "../header";
import Navbar from "../navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex bg-special-mainBg w-screen min-h-screen max-w-full">
      {/* navbar start*/}
      <Navbar />
      {/* navbar end*/}
      <div className="w-screen">
        {/* header start*/}
        <Header />
        {/* header end*/}
        {/* content start*/}
        <main className="px-6 py-4">{children}</main>
        {/* content end*/}
      </div>
    </div>
  );
};

export default MainLayout;