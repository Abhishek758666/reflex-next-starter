import Link from "next/link";
import {
  CSSProperties,
  HTMLAttributeAnchorTarget,
  MouseEventHandler,
  ReactNode,
} from "react";

type TButtonTypes =
  | "primary"
  | "error"
  | "plain"
  | "warning"
  | "success"
  | "secondary"
  | "detail";

interface UIButtonProps {
  children?: ReactNode;
  id?: string;
  label?: string | ReactNode;
  style?: CSSProperties;
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: TButtonTypes;
  className?: string;
  target?: HTMLAttributeAnchorTarget;
  disabled?: boolean;
}

export default function UIButton({
  href,
  id,
  label,
  onClick,
  style,
  type,
  className,
  disabled,
  target,
}: UIButtonProps) {
  return href ? (
    <Link
      id={id}
      href={href}
      className={`btn btn-${type ? type : "link"} ${
        className ? className : ""
      }`}
      style={style}
      target={target}
    >
      {label}
    </Link>
  ) : (
    <button
      id={id}
      className={`btn btn-${type ? type : "plain"} ${
        className ? className : ""
      } ${disabled ? "disabled" : ""}`}
      style={style}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}
