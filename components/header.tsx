import Link from "next/link";

const Header = () => {
  return (
    <section>
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
        <Link href="/" className="hover:underline">
          <span>&#60;</span>- back...
        </Link>
      </h2>
    </section>
  );
};

export default Header;
