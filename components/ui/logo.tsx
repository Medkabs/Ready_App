import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.svg";

export default function Logo() {
  return (
    <Link href="/" className="flex " aria-label="Particles">
      <Image src={logo} alt="Particles.Ai Logo" width={180} height={100} />
    </Link>
  );
}
