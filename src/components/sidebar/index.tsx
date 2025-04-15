"use client";
import { useAppSelector } from "@/redux/store";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems: Omit<TMenuItemProps, "isActive">[] = [
  { href: "/dashboard", title: "Home", iconName: "fa-home" },
  {
    href: "/dashboard/resellers",
    title: "Resellers",
    iconName: "fa-users-rays",
  },
  { href: "/dashboard/users", title: "Users", iconName: "fa-users" },
  { href: "/dashboard/files", title: "Files", iconName: "fa-folder" },
  { href: "/dashboard/pages", title: "Pages", iconName: "fa-files" },
  {
    href: "/dashboard/categories",
    title: "Categories",
    iconName: "fa-sitemap",
  },
  { href: "/dashboard/brands", title: "Brands", iconName: "fa-tag" },
  {
    href: "/dashboard/products",
    title: "Products",
    iconName: "fa-boxes-stacked",
  },
  {
    href: "/dashboard/orders",
    title: "Orders",
    iconName: "fa-cart-circle-check",
  },
  { href: "/dashboard/news", title: "News", iconName: "fa-newspaper" },
  {
    href: "/dashboard/newsletter",
    title: "Newsletter",
    iconName: "fa-envelope",
  },
  { href: "/dashboard/menu", title: "Menu", iconName: "fa-list" },
];

const getLogo = (menu: boolean) => {
  if (menu) {
    return "/logo.svg";
  } else {
    return "/favicon.svg";
  }
};

export default function Sidebar() {
  const pathname = usePathname();
  const systemSelector = useAppSelector((state) => state.system);

  return (
    <div
      className="sidebar"
      style={{ width: systemSelector.menu ? "280px" : "100px" }}
    >
      <div className="sidebar-top">
        <div className="sidebar-top--logo">
          <Image
            unoptimized
            width={500}
            height={100}
            src={getLogo(systemSelector.menu)}
            alt="Esquare logo"
            className="sidebar-top--logo__icon"
          />
        </div>
        <ul className={`sidebar-top--menu`}>
          {menuItems.map((value, index: number) => {
            return (
              <MenuItem
                href={value.href}
                title={value.title}
                isActive={pathname === value.href}
                iconName={value.iconName}
                key={index}
                showLabel={systemSelector.menu}
              />
            );
          })}
        </ul>
      </div>
      <div className="sidebar-bottom">
        <div className="sidebar-bottom--actions">this is bottom</div>
      </div>
    </div>
  );
}

const Divider = () => {
  return (
    <div className="divider">
      <div className="divider-item"></div>
      <div className="divider-item"></div>
      <div className="divider-item"></div>
    </div>
  );
};

interface TMenuItemProps {
  href: string;
  title: string;
  iconName: string;
  isActive?: boolean;
  showLabel?: boolean;
}
const MenuItem = ({
  href,
  iconName,
  title,
  isActive,
  showLabel,
}: TMenuItemProps) => {
  return (
    <li
      className={`sidebar-top--menu__item${isActive ? " active" : ""} ${
        showLabel ? "open" : "close"
      }`}
    >
      <Link href={href} title={title}>
        <i className={`fa-solid ${iconName}`}></i>
        {showLabel ? <span>{title}</span> : null}
      </Link>
    </li>
  );
};
