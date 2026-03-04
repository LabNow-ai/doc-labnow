import clsx from 'clsx';
import {translate as T} from '@docusaurus/Translate';
import Heading from '@theme/Heading';
import type {ComponentProps, ComponentType, ReactNode} from 'react';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  tag: string;
  Svg: ComponentType<ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: T({
      id: 'homepage.features.1.title',
      message: 'Cloud IDE in Web Browser',
    }),
    tag: T({
      id: 'homepage.features.1.tag',
      message: 'Developer Experience',
    }),
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: T({
      id: 'homepage.features.1.description',
      message:
        'Use JupyterLab, RStudio, and VS Code directly in the browser, without local setup, to accelerate data science and research work.',
    }),
  },
  {
    title: T({
      id: 'homepage.features.2.title',
      message: 'AI Native Integration',
    }),
    tag: T({
      id: 'homepage.features.2.tag',
      message: 'AI Platform',
    }),
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: T({
      id: 'homepage.features.2.description',
      message:
        'Integrate frontier AI model capabilities for coding and writing to support data processing, statistical analysis, machine learning, and research collaboration.',
    }),
  },
  {
    title: T({
      id: 'homepage.features.3.title',
      message: 'Reproducibility and Sharing',
    }),
    tag: T({
      id: 'homepage.features.3.tag',
      message: 'Research Quality',
    }),
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: T({
      id: 'homepage.features.3.description',
      message:
        'Keep analysis workflows in notebooks for easier archiving, review, sharing, and reproducibility across teams.',
    }),
  },
];

function Feature({title, tag, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4', styles.featureCol)}>
      <article className={styles.featureCard}>
        <p className={styles.featureTag}>{tag}</p>
        <Heading as="h3" className={styles.featureTitle}>
          {title}
        </Heading>
        <div className={styles.featureVisualWrap}>
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <p className={styles.featureDescription}>{description}</p>
      </article>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHead}>
          <p className={styles.sectionLabel}>
            {T({
              id: 'homepage.features.section.label',
              message: 'Core Capabilities',
            })}
          </p>
          <Heading as="h2" className={styles.sectionTitle}>
            {T({
              id: 'homepage.features.section.title',
              message: 'The Swiss Army knife for Your Data Science Work and Your AI Agents',
            })}
          </Heading>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
