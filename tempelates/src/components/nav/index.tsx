"use client";
import { logout } from "@/redux/slice/auth.slice";
import { changeTheme, toggleMenu } from "@/redux/slice/system.slice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { JSX, MouseEvent } from "react";

interface TNavBarProps {
  name: string;
  showBars?: boolean;
  children?: JSX.Element;
  back?: () => void;
}
export default function NavBar({ name, showBars, back }: TNavBarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useAppDispatch();

  const auth = useAppSelector((state) => state.auth);
  const systemSelector = useAppSelector((state) => state.system);

  const handleThemeToggle = (e: MouseEvent<HTMLDivElement>) => {
    dispatch(changeTheme(systemSelector.theme === "dark" ? "light" : "dark"));
  };
  const handleLogout = (e: MouseEvent<HTMLDivElement>) => {
    dispatch(logout());
    router.replace("/");
  };

  const handleToggleBar = () => dispatch(toggleMenu());

  return (
    <div className="navbar">
      <div className="navbar-left">
        {back ? (
          <i
            className="fa-regular fa-chevron-left navbar-left--icon__back"
            onClick={() => back()}
          ></i>
        ) : null}
        {showBars ? (
          <div className="navbar-left--icon__bar" onClick={handleToggleBar}>
            <i className={`fa-duotone fa-regular fa-table-columns`}></i>
          </div>
        ) : null}
        <h2 className="navbar-left--text">{pathname.slice(1, 1000)}</h2>
      </div>
      <div className="navbar-right">
        <div className="navbar-right">
          <div className="navbar-right--item" onClick={handleThemeToggle}>
            <i
              className={`fa-regular fa-${
                systemSelector.theme === "dark" ? "moon" : "sun-bright"
              }`}
            ></i>
          </div>
          <div
            onClick={handleLogout}
            className="navbar-right--item navbar-right--item__logout"
          >
            <i className="fa-regular fa-arrow-right-from-bracket"></i>
          </div>
          <div className="navbar-right--profile">
            <Image
              unoptimized
              src={"/profile.png"}
              width={100}
              height={100}
              alt="User profile"
            />
          </div>
          <div className="navbar-right--name">Welcome, {auth.name}</div>
        </div>
      </div>
    </div>
  );
}
