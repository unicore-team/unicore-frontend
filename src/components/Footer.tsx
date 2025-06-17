import styles from '@/components/Footer.module.scss';

const Footer = () => {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.container}>
        <p className={`${styles.contactText} title2 mobile-body2`}>
          비즈니스 문의는 아래 메일로 연락 부탁드립니다 :)
        </p>
        <p className={`${styles.email} heading1 mobile-heading2`}>contact@unicore.kr</p>

        <p className={`${styles.companyInfo} body2 mobile-caption`}>
          유니코어 | 대표자 박찬진 | 사업자등록번호 104-14-22486
          <br />
          COPYRIGHT © UNICORE CO., LTD ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
