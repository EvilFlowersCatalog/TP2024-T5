import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {IconDefinition} from '@fortawesome/free-regular-svg-icons';
import React from 'react';
import {
  faFrog
} from '@fortawesome/free-solid-svg-icons';

type FeatureItem = {
  title: string;
  icon: IconDefinition;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Bc. Alexander Čerepan',
    icon: faFrog,
    description: (
      <>
        Microservices Team
      </>
    ),
  },
  {
    title: 'Bc. Darina Dvorecká',
    icon: faFrog,
    description: (
      <>
        UX Team
      </>
    ),
  },
  {
    title: 'Bc. Patrik Kozlík',
    icon: faFrog,
    description: (
      <>
        AI Team
      </>
    ),
  },
  {
    title: 'Bc. Laura Krajčovičová',
    icon: faFrog,
    description: (
      <>
        AI Team
      </>
    ),
  },
  {
    title: 'Bc. Robert Prikryl',
    icon: faFrog,
    description: (
      <>
        Microservices Team
      </>
    ),
  },
  {
    title: 'Bc. Matúš Makay',
    icon: faFrog,
    description: (
      <>
        Data Storage Team
      </>
    ),
  },
  {
    title: 'Bc. Pavol Hradský',
    icon: faFrog,
    description: (
      <>
        Microservices Team
      </>
    ),
  },
];
        
const FeatureList1: FeatureItem[] = [
  {
    title: 'Ing. Jakub Dubec',
    icon: faFrog,
    description: (
      <>
        Product Owner
      </>
    ),
  },
];

function Feature({title, icon, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4', 'margin-top--lg')}>
      <div className={clsx('text--center', styles.iconBorder)}>
        <FontAwesomeIcon icon={icon} size="8x" className={styles.iconHeight} />
      </div>
      <div className="text--center padding-horiz--md margin-top--lg">
        <Heading as="h3" className="">
          {title}
        </Heading>
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
          <div className="col text--center">
            <Heading as="h2">
              Členovia tímu
            </Heading>
          </div>
        </div>
        <div className="row1" style={{ display: 'flex', justifyContent: FeatureList1.length === 1 ? 'center' : 'space-between' }}>
          {FeatureList1.map((item, idx) => (
            <Feature key={idx} {...item} />
          ))}
        </div>
        <div className="row">
          {FeatureList.map((item, idx) => (
            <Feature key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
