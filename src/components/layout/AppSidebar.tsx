import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Layers,
  FileText,
  Settings,
  Send,
  Bot,
  LogOut,
  ChevronLeft,
  Zap,
  User,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface AppSidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

const mainNavItems = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Swipe Jobs", url: "/swipe", icon: Layers },
  { title: "Applications", url: "/applications", icon: Send },
  { title: "AI Agent", url: "/agent", icon: Bot },
  { title: "Resume", url: "/profile", icon: FileText },
];

const bottomNavItems = [
  { title: "Profile", url: "/profile", icon: User },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar({ collapsed, onToggle }: AppSidebarProps) {
  const location = useLocation();

  const NavItem = ({ item }: { item: typeof mainNavItems[0] }) => {
    const isActive = location.pathname === item.url;
    const content = (
      <Link
        to={item.url}
        className={cn(
          "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200",
          "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
          isActive && "bg-primary/10 text-primary",
          collapsed && "justify-center px-2"
        )}
      >
        <item.icon className={cn("h-5 w-5 shrink-0", isActive && "text-primary")} />
        {!collapsed && <span>{item.title}</span>}
      </Link>
    );

    if (collapsed) {
      return (
        <Tooltip delayDuration={0}>
          <TooltipTrigger asChild>{content}</TooltipTrigger>
          <TooltipContent side="right" className="font-medium">
            {item.title}
          </TooltipContent>
        </Tooltip>
      );
    }

    return content;
  };

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-40 flex h-screen flex-col border-r border-sidebar-border bg-sidebar transition-all duration-300",
        collapsed ? "w-16" : "w-64"
      )}
    >
      {/* Logo */}
      <div className={cn("flex h-16 items-center border-b border-sidebar-border px-4", collapsed && "justify-center px-2")}>
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl gradient-primary shadow-glow">
            <Zap className="h-5 w-5 text-primary-foreground" />
          </div>
          {!collapsed && (
            <span className="text-lg font-bold">Swipe<span className="text-gradient">Jobs</span></span>
          )}
        </Link>
      </div>

      {/* Main Navigation */}
      <div className="flex-1 overflow-y-auto px-3 py-4">
        <nav className="flex flex-col gap-1">
          {mainNavItems.map((item) => (
            <NavItem key={item.url} item={item} />
          ))}
        </nav>
      </div>

      {/* Bottom Navigation */}
      <div className="border-t border-sidebar-border px-3 py-4">
        <nav className="flex flex-col gap-1">
          {bottomNavItems.map((item) => (
            <NavItem key={item.url} item={item} />
          ))}
        </nav>

        <Separator className="my-3 bg-sidebar-border" />

        {/* Collapse Toggle */}
        <Button
          variant="ghost"
          size="sm"
          onClick={onToggle}
          className={cn(
            "w-full justify-center text-muted-foreground hover:text-foreground",
            !collapsed && "justify-start"
          )}
        >
          <ChevronLeft
            className={cn(
              "h-4 w-4 transition-transform duration-300",
              collapsed && "rotate-180"
            )}
          />
          {!collapsed && <span className="ml-2">Collapse</span>}
        </Button>

        {/* User Profile */}
        {!collapsed && (
          <div className="mt-3 flex items-center gap-3 rounded-xl bg-sidebar-accent p-3">
            <div className="h-9 w-9 rounded-full gradient-primary flex items-center justify-center text-sm font-semibold text-primary-foreground">
              JD
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">John Doe</p>
              <p className="text-xs text-muted-foreground truncate">Pro Plan</p>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </aside>
  );
}
