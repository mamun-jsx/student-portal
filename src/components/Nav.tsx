"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useUser } from "@/hooks/useUser";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const menu = [
  { title: "Home", url: "/" },
  { title: "About", url: "/about" },
  { title: "Tution Fee", url: "/tution-fee" },
  { title: "Contact", url: "/contact" },
];

export default function Nav() {
  const { user, loading } = useUser();
  const router = useRouter();

  const handleLogout = () => {
    // Clear cookies and local storage
    document.cookie = "user=; path=/; max-age=0;";
    localStorage.removeItem("user");
    // Reload page to clear all state and force a re-render
    window.location.href = "/";
  };

  return (
    <section className="py-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b">
      <div className="container mx-auto px-4">
        {/* Desktop Menu */}
        <nav className="hidden items-center justify-between lg:flex">
          <div className="flex items-center gap-6">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold bg-gradient-to-r from-ec-primary to-ec-accent bg-clip-text text-transparent">
                Student Portal
              </span>
            </Link>
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {menu.map((item) => (
                    <NavigationMenuItem key={item.title}>
                      <NavigationMenuLink
                        asChild
                        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground focus:bg-muted focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-muted/50 data-[state=open]:bg-muted/50"
                      >
                        <Link href={item.url}>{item.title}</Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            {!loading && (
              <>
                {user ? (
                  <>
                    <Button asChild variant="outline" size="sm">
                      <Link href="/dashboard">Dashboard</Link>
                    </Button>
                    <Button
                      size="sm"
                      onClick={handleLogout}
                      variant="destructive"
                    >
                      Logout
                    </Button>
                  </>
                ) : (
                  <Button
                    className="bg-ec-primary hover:bg-ec-accent text-white"
                    asChild
                    size="sm"
                  >
                    <Link href="/login">Login</Link>
                  </Button>
                )}
              </>
            )}
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold bg-gradient-to-r from-ec-primary to-ec-accent bg-clip-text text-transparent">
                Student Portal
              </span>
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <span className="flex items-center gap-2 text-xl font-bold bg-gradient-to-r from-ec-primary to-ec-accent bg-clip-text text-transparent">
                      Student Portal
                    </span>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4 mt-4">
                  <div className="flex flex-col gap-4">
                    {menu.map((item) => (
                      <SheetClose asChild key={item.title}>
                        <Link
                          href={item.url}
                          className="text-md font-medium hover:text-ec-primary transition-colors"
                        >
                          {item.title}
                        </Link>
                      </SheetClose>
                    ))}
                  </div>

                  <div className="flex flex-col gap-3 mt-4 border-t pt-4">
                    {!loading && (
                      <>
                        {user ? (
                          <>
                            <SheetClose asChild>
                              <Button
                                asChild
                                variant="outline"
                                className="w-full"
                              >
                                <Link href="/dashboard">Dashboard</Link>
                              </Button>
                            </SheetClose>
                            <SheetClose asChild>
                              <Button
                                onClick={handleLogout}
                                variant="destructive"
                                className="w-full"
                              >
                                Logout
                              </Button>
                            </SheetClose>
                          </>
                        ) : (
                          <SheetClose asChild>
                            <Button asChild className="w-full">
                              <Link href="/login">Login</Link>
                            </Button>
                          </SheetClose>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
}
