import "@/app/ui/global.css";
import { inter, hennyPenny } from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={` ${hennyPenny.className} antialiased`}>{children}</body>
    </html>
  );
}
