import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span>
          <Link href={"/"}>
            <Image
              src={"/nicole-logo.png"}
              alt="nicole-codes logo"
              width={200}
              height={200}
            />
          </Link>
        </span>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
