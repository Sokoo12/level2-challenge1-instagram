import Head from "next/head";
import "./globals.css";



export default function RootLayout({ children }) {
  return (
    <html lang="en"> 
      <Head>
        <link rel="stylesheet" href="./globals.css"/>
      </Head>
      <body>{children}</body>
    </html>
  );
}
