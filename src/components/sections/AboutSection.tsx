"use client";

import Lottie from "lottie-react";
import styles from "@/components/sections/AboutSection.module.scss";
import circleAnimation from "@/assets/lotties/circle.json";

const AboutSection = () => {
  return (
    <section className={styles.aboutSection}>
      <Lottie
        className={styles.animationLottie}
        animationData={circleAnimation}
        loop={false}
        autoplay
        role="img"
        aria-label="메인 시각 애니메이션"
        style={{ width: "auto", height: "700px" }}
      />
      <div className={styles.container}>
        <h4 className="title1 mobile-body1">CUTTING THE CORE</h4>
        <h2 className="heading1 mobile-heading2">
          유니코어는 본질을 꿰뚫는 <br />
          특별함을 제공합니다.
        </h2>
      </div>
    </section>
  );
};

export default AboutSection;
