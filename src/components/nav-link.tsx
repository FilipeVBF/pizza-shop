import { Link, useLocation, type LinkProps } from "react-router";

export type NavLinkProps = LinkProps;

export function NavLink(props: LinkProps) {
  const { pathname } = useLocation();

  return (
    <Link
      data-current={pathname === props.to ? true : undefined}
      className="text-muted-foreground hover:text-foreground data-[current]:text-foreground flex items-center gap-1.5 text-sm font-medium"
      {...props}
    />
  );
}
