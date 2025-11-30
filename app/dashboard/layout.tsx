import AsideNav from "@/components/AsideNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex">
        <AsideNav />
        <main className="">{children}</main>
      </body>
    </html>
  );
}
