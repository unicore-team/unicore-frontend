import Image from 'next/image';
import styles from '@/components/WorkItem.module.scss';

type WorkItemProps = {
  thumbnail: string;
  title: string;
  description: string;
};

const WorkItem = ({ thumbnail, title, description }: WorkItemProps) => {
  return (
    <div className={styles.workItem}>
      <div className={styles.thumbnailWrapper}>
        <Image
          src={thumbnail}
          alt={title}
          fill
          className={styles.thumbnail}
          sizes="100%"
          priority
        />
      </div>
      <div className={styles.textWrapper}>
        <h3 className={`${styles.title} title1 mobile-title2`}>{title}</h3>
        <p className={`${styles.description} body2`}>{description}</p>
      </div>
    </div>
  );
};

export default WorkItem;
