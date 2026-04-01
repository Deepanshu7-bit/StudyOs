export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      {/* Sidebar placeholder */}
      <aside className="w-64 border-r border-border bg-card">
        <nav className="p-4">Dashboard navigation - UI to be added</nav>
      </aside>
      {/* Main content */}
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  );
}
