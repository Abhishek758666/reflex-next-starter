"use client";
import { useAppSelector } from "@/redux/store";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface TMenuItemProps {
  href: string;
  title: string;
  iconName: string;
  isActive?: boolean;
  showLabel?: boolean;
}

const menuGroups: {
  heading?: string;
  items: Omit<TMenuItemProps, "isActive">[];
}[] = [
  {
    // heading: "General",
    items: [{ href: "/dashboard", title: "Home", iconName: "fa-house" }],
  },
  {
    heading: "Users",
    items: [
      {
        href: "/dashboard/resellers",
        title: "Resellers",
        iconName: "fa-users-rays",
      },
      { href: "/dashboard/users", title: "Users", iconName: "fa-users" },
    ],
  },
  {
    heading: "Contents",
    items: [
      { href: "/dashboard/files", title: "Files", iconName: "fa-folder" },
      { href: "/dashboard/pages", title: "Pages", iconName: "fa-files" },
      { href: "/dashboard/menu", title: "Menu", iconName: "fa-list" },
    ],
  },
  {
    heading: "Products",
    items: [
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
    ],
  },
  {
    heading: "Marketing",
    items: [
      { href: "/dashboard/news", title: "News", iconName: "fa-newspaper" },
      {
        href: "/dashboard/newsletter",
        title: "Newsletter",
        iconName: "fa-envelope",
      },
    ],
  },
];

const getLogo = (menu: boolean, theme: "light" | "dark") => {
  if (menu) {
    return theme === "light" ? "/logo.svg" : "/dark-logo.svg";
  } else {
    return theme === "light" ? "/favicon.svg" : "/favicon-dark.svg";
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
        <ul className="sidebar-top--menu">
          {menuGroups.map((group, groupIdx) => (
            <li key={groupIdx} className="sidebar-top--menu__group">
              {systemSelector.menu && group.heading && (
                <div className="sidebar-top--menu__heading">
                  {group.heading}
                </div>
              )}
              {group.items.map((item, idx) => (
                <MenuItem
                  key={idx}
                  href={item.href}
                  title={item.title}
                  iconName={item.iconName}
                  isActive={pathname === item.href}
                  showLabel={systemSelector.menu}
                />
              ))}
            </li>
          ))}
        </ul>
      </div>
      <div className="sidebar-bottom">
        <div className="sidebar-bottom--actions">this is bottom</div>
      </div>
    </div>
  );
}

const MenuItem = ({
  href,
  iconName,
  title,
  isActive,
  showLabel,
}: TMenuItemProps) => {
  return (
    <div
      className={`sidebar-top--menu__item${isActive ? " active" : ""} ${
        showLabel ? "open" : "close"
      }`}
    >
      <Link href={href} title={title}>
        <i className={`fa-duotone fa-solid ${iconName}`}></i>
        {showLabel && <span>{title}</span>}
      </Link>
    </div>
  );
};
