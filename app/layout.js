import { SpeedInsights } from "@vercel/speed-insights/next";
//speedinsights for deploy
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Future Culture",
    description: "Future Culture Gift Shop",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`antialiased`}>
                <SpeedInsights />
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
