import Image from "next/image";
import Link from "next/link";
import styles from "@/components/Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/">
          <Image
            src="/assets/images/logo.svg"
            alt="Unicore"
            width={150}
            height={17}
            priority
          />
        </Link>
        <nav className={styles.nav}>
          <a className="body1" href="#">
            ABOUT
          </a>
          <a className="body1" href="#about">
            WORK
          </a>
          <a className="body1" href="#contact">
            CONTACT
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
