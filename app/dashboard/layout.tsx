import AsideNav from "@/components/AsideNav";
import DashboardHeader from "@/components/DashboardHeader";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
  

      <div className="h-screen ">
      <AsideNav />
      </div>
      
      <div className=" flex h-screen  bg-gray-50 w-full flex-col">
    
         <header className="sticky top-0 z-30 bg-white">
            <DashboardHeader />
          </header>  
      
         <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}
