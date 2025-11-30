import AsideNav from "@/components/AsideNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen overflow-hidden">
        <AsideNav />
        <main className="flex">
          {children}
        </main>
      </body>
    </html>
  );
}
