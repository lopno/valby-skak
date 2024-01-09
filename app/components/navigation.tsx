"use client";
import * as React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ThemeSwitch from "./themeSwitch";

interface INavigationItem {
  title: string;
  href: string;
  external: boolean;
}

export default function Navigation() {
  const current = usePathname();

  const items: INavigationItem[] = [
    { title: "Nyheder", href: "/", external: false },
    { title: "Kontakt", href: "/contact", external: false },
    { title: "Kalender", href: "/calendar", external: false },
    {
      title: "Vinterturnering",
      href: "https://turnering.skak.dk/TournamentActive/Details?tourId=28486",
      external: true,
    },
    {
      title: "Holdskak",
      href: "/team",
      external: false,
    },
    {
      title: "Rangliste",
      href: "https://turnering.skak.dk/ClubAndMembers/ClubDetails/13",
      external: true,
    },
    { title: "Galleri", href: "/gallery", external: false },
    { title: "Historie", href: "/history", external: false },
    { title: "Tid og sted", href: "/time-place", external: false },
    { title: "Bliv medlem", href: "/new-member", external: false },
  ];

  const brandHeight = 46.66;
  const brandWidth = 35;

  const brand = (
    <Link href="/">
      <Image
        priority
        width={brandWidth}
        height={brandHeight}
        style={{ width: brandWidth, height: brandHeight }}
        src="/images/logoSpringeren.png"
        alt="Logo"
      />
      <p className="font-bold px-4 text-foreground">Valby Skakklub</p>
    </Link>
  );

  return (
    <Navbar className="flex justify-between" maxWidth="full">
      <NavbarContent justify="start" className="lg:hidden">
        <NavbarMenuToggle />
      </NavbarContent>
      <NavbarBrand className="lg:hidden justify-center">{brand}</NavbarBrand>
      <NavbarBrand className="hidden lg:flex pr-3">{brand}</NavbarBrand>
      <NavbarContent justify="center" className="hidden lg:flex flex-1 gap-4">
        {items.map((item) => {
          const isCurrent = item.href === current;
          return (
            <NavbarItem key={item.title} isActive={isCurrent}>
              <Link
                color={isCurrent ? "primary" : "foreground"}
                href={item.href}
                {...(isCurrent ? { "aria-current": "page" } : {})}
                {...(item.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="flex items-start gap-x-0.5"
              >
                {item.title}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {items.map((item, index) => {
          const isCurrent = item.href === current;
          return (
            <NavbarMenuItem key={item.title}>
              <Link
                color={isCurrent ? "primary" : "foreground"}
                className="w-full"
                size="lg"
                href={item.href}
              >
                {item.title}
              </Link>
            </NavbarMenuItem>
          );
        })}
      </NavbarMenu>
    </Navbar>
  );
}
