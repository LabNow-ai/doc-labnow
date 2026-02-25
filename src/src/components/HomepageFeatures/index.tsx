import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Cloud IDE in Web Browser | 网页里的一站式数据科学和科研平台',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        基于网页提供JupyterLab/RStudio/VSCode等常用IDE，
        及时跟进最新版本的Python/R语言和常用数据分析包（package），
        免去安装烦恼，在云端高效完成科研和数据分析。
      </>
    ),
  },
  {
    title: 'AI Native 深度整合的AI大模型赋能',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
         整合前沿的AI大模型的文本、代码能力，赋能研究者进行Python/R数据分析和建模，
         一站式完成数据处理、统计分析、机器学习建模；大模型AI助理辅助完成数据分析、论文撰写。
      </>
    ),
  },
  {
    title: 'Reproducibility, Shareable 可复现/易分享',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        数据分析和研究过程以Notebook形式保存，
        易于归档、审核、<a href="https://doi.org/10.1038/515151a">分享</a>，
        并供其他研究者<a href="https://doi.org/10.1038/d41586-018-07196-1">复现工作</a>，确保研究工作高质量开展。
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
