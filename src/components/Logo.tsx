import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center space-x-3">
      {/* Logo Image */}
      <Image
        src="/logo.webp" // Update the path to match the correct logo filename
        alt="Zee Dev Logo"
        width={50}
        height={50}
        className="rounded-lg"
      />
      {/* Organization Name */}
      <span className="text-white text-2xl font-bold">
        Zee Dev<span className="text-accent">.</span>
      </span>
    </Link>
  );
};

export default Logo;
