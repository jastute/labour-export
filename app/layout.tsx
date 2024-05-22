import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ConditionalRenderNav from "@/components/conditionalRenderNav";

const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "KLES",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
         <ConditionalRenderNav>
        {children}
        </ConditionalRenderNav>
        </body>
    </html>
  );
}

// import { Inter } from "next/font/google";
// import "./globals.css";
// import ConditionalRenderNav from "@/components/conditionalRenderNav";


// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "KLES",
//   description: "Generated by create next app",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
        // <ConditionalRenderNav>
        // {children}
        // </ConditionalRenderNav>
        // </body>
//     </html>
//   );
// }
