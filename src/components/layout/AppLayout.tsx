import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AppSidebar } from "./AppSidebar";
import { AppHeader } from "./AppHeader";
import { cn } from "@/lib/utils";

const pageTitles: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/swipe": "Swipe Jobs",
  "/applications": "Applications",
  "/agent": "AI Agent",
  "/profile": "Profile & Resume",
  "/settings": "Settings",
};

export function AppLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const title = pageTitles[location.pathname] || "Dashboard";

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-30 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={cn("hidden lg:block", mobileOpen && "block")}>
        <AppSidebar
          collapsed={collapsed}
          onToggle={() => setCollapsed(!collapsed)}
        />
      </div>

      {/* Mobile Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-40 lg:hidden transition-transform duration-300",
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <AppSidebar collapsed={false} onToggle={() => setMobileOpen(false)} />
      </div>

      {/* Main Content */}
      <div
        className={cn(
          "min-h-screen transition-all duration-300",
          collapsed ? "lg:pl-16" : "lg:pl-64"
        )}
      >
        <AppHeader
          title={title}
          onMenuClick={() => setMobileOpen(!mobileOpen)}
        />
        <main className="p-3 sm:p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
