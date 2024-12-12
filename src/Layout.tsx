import { Link, Outlet } from "react-router";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import React from "react";
import BGImage from "@/assets/GBS.webp";

export default function Layout() {
  return (
    <div className="h-[100vh] w-[100vw] overflow-x-hidden">
      {/* BG Image */}
      <img
        src={BGImage}
        alt=""
        className="fixed object-cover h-[100vh] w-[100vw] -z-50"
      />
      <div className="fixed z-50 w-full bottom-4">
        <div className="flex justify-center">
          <NavigationMenu className="bg-background rounded-xl">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Starseite
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/Impressum">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Impressum
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/Datenschutz">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Datenschutz
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/Kontakt">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Kontakt
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>

      <Outlet />
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
