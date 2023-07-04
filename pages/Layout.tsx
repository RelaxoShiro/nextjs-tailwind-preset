import Navbar from "@/components/Navbar";

const Layout = ({ children }: any) => {
    return (
        <div className="min-h-screen bg-bgmain text-white font-Lexend">
            <Navbar />

            <section>
                <div className="items-center content-center pt-12">{children}</div>


            </section>


        </div>
    );
};

export default Layout;