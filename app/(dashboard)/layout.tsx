import Navbar from "@/components/Navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-6">
      <div>
        <Navbar />
      </div>
      <div className="col-span-5">{children}</div>
    </div>
  );
}
