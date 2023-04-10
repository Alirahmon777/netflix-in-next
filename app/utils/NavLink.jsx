import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({ href, children, className, activeClass }) {
  const pathname = usePathname();

  return (
    <Link href={href} className={pathname === href ? activeClass : className}>
      {children}
    </Link>
  );
}

export default NavLink;
