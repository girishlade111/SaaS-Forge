"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Home, BarChart3, Bot, Settings, LifeBuoy, LogOut, ShieldCheck, User } from "lucide-react";
import { Logo } from "@/components/icons";

const mockUser = {
  name: "Admin User",
  email: "admin@saasforge.dev",
  avatar: "https://placehold.co/100x100.png",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navItems = [
    { href: "/dashboard", icon: <Home />, label: "Dashboard" },
    { href: "/dashboard/analytics", icon: <BarChart3 />, label: "Analytics" },
    { href: "/dashboard/ui-ux-analyzer", icon: <Bot />, label: "UI/UX Analyzer" },
    { href: "/dashboard/settings", icon: <Settings />, label: "Settings" },
    { href: "/dashboard/admin", icon: <ShieldCheck />, label: "Admin Panel" },
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-background">
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center gap-2.5">
              <Logo />
              <span className="font-semibold font-headline text-lg group-data-[collapsible=icon]:sr-only">SaaS Forge</span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.href}
                    tooltip={{ children: item.label, side: "right", align: "center"}}
                  >
                    <Link href={item.href}>
                      {item.icon}
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter>
             <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="w-full justify-start gap-3 p-2 h-auto">
                   <Avatar className="h-9 w-9">
                     <AvatarImage src={mockUser.avatar} alt={mockUser.name} />
                     <AvatarFallback>{mockUser.name.charAt(0)}</AvatarFallback>
                   </Avatar>
                   <div className="text-left group-data-[collapsible=icon]:sr-only">
                    <p className="font-medium text-sm">{mockUser.name}</p>
                    <p className="text-xs text-muted-foreground">{mockUser.email}</p>
                   </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 mb-2" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{mockUser.name}</p>
                    <p className="text-xs leading-none text-muted-foreground">{mockUser.email}</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem><User className="mr-2 h-4 w-4"/>Profile</DropdownMenuItem>
                <DropdownMenuItem><Settings className="mr-2 h-4 w-4"/>Settings</DropdownMenuItem>
                <DropdownMenuItem><LifeBuoy className="mr-2 h-4 w-4"/>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem><LogOut className="mr-2 h-4 w-4"/>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarFooter>
        </Sidebar>
        <SidebarInset>
          <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background/80 backdrop-blur-sm px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
            <SidebarTrigger className="md:hidden" />
            <div className="ml-auto">
              {/* Future header items like search or notifications can go here */}
            </div>
          </header>
          <main className="flex flex-1 flex-col gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
            {children}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
