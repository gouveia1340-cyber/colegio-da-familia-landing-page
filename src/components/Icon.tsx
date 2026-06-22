import type { ReactNode, SVGProps } from "react";
import type { IconName } from "../content";

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
};

const iconPaths: Record<IconName, ReactNode> = {
  bookOpen: (
    <>
      <path d="M4 5.5c2.7-.7 5-.2 7 1.4v12.5c-2-1.6-4.3-2.1-7-1.4V5.5Z" />
      <path d="M20 5.5c-2.7-.7-5-.2-7 1.4v12.5c2-1.6 4.3-2.1 7-1.4V5.5Z" />
    </>
  ),
  calendar: (
    <>
      <path d="M7 3v4" />
      <path d="M17 3v4" />
      <path d="M4.5 8h15" />
      <rect x="4.5" y="5" width="15" height="16" rx="2" />
      <path d="M8 12h.01M12 12h.01M16 12h.01M8 16h.01M12 16h.01" />
    </>
  ),
  care: (
    <>
      <path d="M12 21s-7-4.3-7-10.1A4.6 4.6 0 0 1 9.6 6c1.2 0 2.2.5 2.9 1.3A3.8 3.8 0 0 1 15.4 6 4.6 4.6 0 0 1 20 10.9C20 16.7 12 21 12 21Z" />
      <path d="M9 13h6" />
      <path d="M12 10v6" />
    </>
  ),
  chat: (
    <>
      <path d="M5 18.5V7.5A3.5 3.5 0 0 1 8.5 4h7A3.5 3.5 0 0 1 19 7.5v4a3.5 3.5 0 0 1-3.5 3.5H9l-4 3.5Z" />
      <path d="M9 9h6M9 12h4" />
    </>
  ),
  chevron: <path d="m9 18 6-6-6-6" />,
  cross: (
    <>
      <path d="M12 4v16" />
      <path d="M7 9h10" />
    </>
  ),
  family: (
    <>
      <circle cx="8" cy="8" r="2.5" />
      <circle cx="16" cy="8" r="2.5" />
      <path d="M3.5 20v-1.5A4.5 4.5 0 0 1 8 14h0a4.5 4.5 0 0 1 4.5 4.5V20" />
      <path d="M11.5 16.4A4.5 4.5 0 0 1 16 14h0a4.5 4.5 0 0 1 4.5 4.5V20" />
    </>
  ),
  heart: (
    <path d="M12 21s-7-4.5-7-10.2A4.6 4.6 0 0 1 9.6 6c1.2 0 2.2.5 2.9 1.3A3.8 3.8 0 0 1 15.4 6 4.6 4.6 0 0 1 20 10.8C20 16.5 12 21 12 21Z" />
  ),
  home: (
    <>
      <path d="m3.5 11 8.5-7 8.5 7" />
      <path d="M5.5 10v10h13V10" />
      <path d="M10 20v-5h4v5" />
    </>
  ),
  leaf: (
    <>
      <path d="M20 4c-7.5.5-12.5 4-14 10.5C9.4 16 15.5 14.8 20 4Z" />
      <path d="M6 20c1.5-5.8 5.5-9.4 10.5-11.7" />
    </>
  ),
  mapPin: (
    <>
      <path d="M12 21s7-5.2 7-11a7 7 0 0 0-14 0c0 5.8 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 19 6v5.7c0 4.4-2.8 7.7-7 9.3-4.2-1.6-7-4.9-7-9.3V6l7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  spark: (
    <>
      <path d="M12 3 14 9l6 3-6 3-2 6-2-6-6-3 6-3 2-6Z" />
      <path d="M19 4v3M20.5 5.5h-3" />
    </>
  ),
  star: (
    <path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1L12 16.9 6.6 19.8l1-6.1-4.4-4.3 6.1-.9L12 3Z" />
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 20a5.5 5.5 0 0 1 11 0" />
      <path d="M15 11a3 3 0 1 0-.2-5.9" />
      <path d="M17 20a5.2 5.2 0 0 0-3-4.7" />
    </>
  ),
};

export function Icon({ name, className, ...props }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
      {...props}
    >
      {iconPaths[name]}
    </svg>
  );
}
