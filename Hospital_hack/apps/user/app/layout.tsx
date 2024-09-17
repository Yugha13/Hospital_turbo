import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@repo/ui/globals.css";
import Navbar from "./navbar/Navbar";
import { Toaster } from "@repo/ui/components/ui/toaster";
// import { Toaster } from "@repo/ui/components/ui/sonner"



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
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
          
          <Navbar/>
          
          {/* <div className="grid place-items-center h-screen w-full"> */}
          <main>{children}</main>
          {/* </div> */}
          <Toaster />
      </body>
    </html>
  );
}

const data = {
  name: 'sone',
  age: 30,
  occupation: 'Software Developer',
  location: 'New York',
  skills: ['JavaScript', 'React', 'Node.js', 'TypeScript'],
  education: {
    degree: 'Bachelor of Science',
    major: 'Computer Science',
    university: 'Tech University'
  },
  experience: [
    {
      company: 'Tech Corp',
      position: 'Senior Developer',
      years: 3
    },
    {
      company: 'Startup Inc',
      position: 'Junior Developer',
      years: 2
    }
  ]
}