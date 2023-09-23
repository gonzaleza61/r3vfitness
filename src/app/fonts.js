import { Inter, Anton } from "next/font/google";

export const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-anton",
});

export const inter = Inter({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-inter",
});
