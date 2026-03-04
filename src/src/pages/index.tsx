import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {translate} from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <header className={clsx(styles.heroBanner)}>
      <div className={clsx('container', styles.heroGrid)}>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>
            {translate({
              id: 'homepage.header.eyebrow',
              message: 'LabNow Documentation',
            })}
          </p>
          <Heading as="h1" className={styles.heroTitle}>
            {siteConfig.title}
          </Heading>
          <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link className={clsx('button button--primary button--lg', styles.primaryCta)} to="/docs/intro">
              {translate({
                id: 'homepage.header.cta.quickStart',
                message: 'Quick Start in 3 Minutes',
              })}
            </Link>
            <Link className={clsx('button button--secondary button--lg', styles.secondaryCta)} to="/blog">
              {translate({
                id: 'homepage.header.cta.readNotes',
                message: 'Read Product Notes',
              })}
            </Link>
          </div>
        </div>

        <aside className={styles.heroPanel}>
          <p className={styles.panelLabel}>
            {translate({
              id: 'homepage.header.panel.label',
              message: 'Platform Focus',
            })}
          </p>
          <Heading as="h2" className={styles.panelTitle}>
            {translate({
              id: 'homepage.header.panel.title',
              message: 'Built for AI and Data Science teams',
            })}
          </Heading>
          <ul className={styles.panelList}>
            <li>
              {translate({
                id: 'homepage.header.panel.item1',
                message: 'Cloud IDE with JupyterLab, RStudio, and VS Code',
              })}
            </li>
            <li>
              {translate({
                id: 'homepage.header.panel.item2',
                message: 'AI-native workflow for modeling and documentation',
              })}
            </li>
            <li>
              {translate({
                id: 'homepage.header.panel.item3',
                message: 'Reproducible research with shareable artifacts',
              })}
            </li>
          </ul>
        </aside>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title={translate({
        id: 'homepage.layout.title',
        message: 'LabNow.ai',
      })}
      description={translate({
        id: 'homepage.layout.description',
        message: 'One-stop AI and Data Science Platform.',
      })}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
