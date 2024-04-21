import { Inter, Righteous } from "next/font/google";
import "./globals.css";

//search context provider
import { SearchContextProvider } from "./context/search";

const play = Righteous({
  subsets: ["latin"],
  weight: ["400"],
});
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tomin auto doo",
  description:
    "Tehnički pregled uz upotrebu najsavremenijih mašina, sa izdavanjem nalepnice bez zakazivanja.   Registracija na rate. Rent a car i sanitetski prevoz u zemlji i inostranstvu.",
};

export default function RootLayout({ children }) {
  return (
    <SearchContextProvider>
      <html lang="en">
        <body className={play.className}>{children}</body>
      </html>
    </SearchContextProvider>
  );
}
