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

export function Navigation() {
  const current = "Nyheder";

  const items = [
    { title: "Nyheder", href: "/" },
    { title: "Kontakt", href: "#" },
    { title: "Kalender", href: "#" },
    { title: "Vinterturnering", href: "#" },
    { title: "Holdskak", href: "#" },
    { title: "Rangliste", href: "#" },
    { title: "Galleri", href: "#" },
    { title: "Historie", href: "#" },
    { title: "Tid og sted", href: "#" },
    { title: "Bliv medlem", href: "#" },
  ];

  const brand = (
    <Link href="/">
      <Image
        priority
        width={35}
        height={55}
        src="/images/logospringeren.png"
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
          const isCurrent = item.title === current;
          return (
            <NavbarItem key={item.title} isActive={isCurrent}>
              <Link
                color={item.title === current ? "primary" : "foreground"}
                href={item.href}
                {...(isCurrent ? { "aria-current": "page" } : {})}
              >
                {item.title}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>
      <NavbarMenu>
        {items.map((item, index) => (
          <NavbarMenuItem key={item.title}>
            <Link
              color={item.title === current ? "primary" : "foreground"}
              className="w-full"
              size="lg"
              href={item.href}
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
      <NavbarContent className="flex-shrink-0" />
    </Navbar>
  );
}
