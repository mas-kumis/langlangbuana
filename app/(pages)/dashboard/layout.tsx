import type { Metadata } from "next";
import Sidebar from "@/app/components/dashboard/Sidebar";
// import ListForm from "@/app/components/dashboard/Form";

export const metadata: Metadata = {
  title: "LalangBuana - Get Travel",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          <Sidebar />
          {children}
        </div>
        {children}
      </body>
    </html>
  );
}
