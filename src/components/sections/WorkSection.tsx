import styles from '@/components/sections/WorkSection.module.scss';
import WorkItem from '@/components/WorkItem';
import { workItemData } from '@/data/workItemData';

const WorkSection = () => {
  return (
    <section className={styles.workSection}>
      <div className={styles.titleWrapper}>
        <h4 className="title1 mobile-body1">OUR WORK</h4>
        <h2 className="heading1 mobile-heading2">
          디자인은 <span className={styles.gradient}>감각적</span>으로
          <br />
          개발은 <span className={styles.gradient}>견고</span>하게
        </h2>
      </div>
      <div className={styles.workList}>
        {workItemData.map((item, index) => (
          <WorkItem
            key={`WorkItem-${item.id}`}
            thumbnail={item.thumbnail}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default WorkSection;
