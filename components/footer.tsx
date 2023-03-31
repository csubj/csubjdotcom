import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="">
      <Container>
        <div className="p-28">
          <h2>
            Made with Love on the Internet
            <Link href="/dino" className="hover:underline">
              .
            </Link>
          </h2>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
