'use client';

import Lottie from 'lottie-react';
import styles from '@/components/sections/AboutSection.module.scss';
import circleAnimation from '@/assets/lotties/circle.json';
import { useEffect, useRef, useState } from 'react';

const AboutSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.aboutSection}>
      <div className={styles.lottieWrapper}>
        <Lottie
          className={styles.animationLottie}
          animationData={circleAnimation}
          loop={false}
          autoplay
          role="img"
          aria-label="메인 시각 애니메이션"
          rendererSettings={{
            preserveAspectRatio: 'xMidYMid slice',
          }}
        />
      </div>
      <div ref={containerRef} className={styles.container}>
        <h4
          className={`${styles.fadeSlideUp} ${inView ? styles.inViewH4 : ''} title1 mobile-body1`}
        >
          CUTTING THE CORE
        </h4>
        <h2
          className={`${styles.fadeSlideUp} ${inView ? styles.inViewH2 : ''} heading1 mobile-heading2`}
        >
          유니코어는 본질을 꿰뚫는 <br />
          특별함을 제공합니다.
        </h2>
      </div>
    </section>
  );
};

export default AboutSection;
