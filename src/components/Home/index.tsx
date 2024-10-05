import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import {Content} from '@theme/BlogPostPage';
import styles from './index.module.css';
import React, {ChangeEvent} from 'react';
import Typewriter from 'typewriter-effect';
import SignupForWaitlistButton from '@site/src/components/buttons/SignupForWaitlistButton';
import useBaseUrl from '@docusaurus/core/lib/client/exports/useBaseUrl';
import Image from '@theme/IdealImage';
import HomepageBlogs from '@site/src/components/HomepageBlogs';
import DemoButton from '@site/src/components/buttons/DemoButton';
import Link from '@docusaurus/Link';
import BrowserOnly from '@docusaurus/BrowserOnly';
import HomepageProducts from '@site/src/components/HomepageProducts';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className="row row--no-gutters">
          <div className="col">
            <Heading as="h1" className={styles.heroTitle}>
              {siteConfig.tagline}
            </Heading>
          </div>
        </div>
        
        <div className="row row--no-gutters">
          <div className="col">
            <div className={styles.lottiePlayerWrapper}>
              <BrowserOnly
                fallback={
                  <div className={styles.lottieFallback}>Loading...</div>
                }>
                {() => {
                  const Player =
                    require('@lottiefiles/react-lottie-player').Player;
                  return (
                    <Player
                      autoplay
                      loop
                      src="/animations/home.json"
                      style={{height: '480px'}}
                    />
                  );
                }}
              </BrowserOnly>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function HomepageVideo() {
  return (
    <div>
    </div>
  );
}

function loadScript() {
  if (typeof window === 'undefined') {
    return null;
  }

  const elementId = 'hs-script';
  if (document.getElementById(elementId) === null) {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://js-eu1.hs-scripts.com/144345473.js';
    script.id = elementId;
    document.head.appendChild(script);
  }
}

function HomepageNewsletter() {
  return (
    <div className="container text--center">
    </div>
  );
}

class NewsletterForm extends React.Component<unknown, {value: string}> {
  constructor(props: unknown) {
    super(props);
    this.state = {value: ''};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: ChangeEvent) {
    if (!this.state.value) {
      loadScript();
    }
    this.setState({value: (event.target as HTMLInputElement).value});
  }

  async handleSubmit(event) {
    event.preventDefault();
    await fetch('https://cms.glasskube.eu/api/ezforms/submit', {
      method: 'POST',
      body: JSON.stringify({
        token: '',
        formName: 'newsletter',
        formData: {
          email: this.state.value,
        },
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(() => {
        alert(
          'Email successfully added to our newsletter: ' + this.state.value,
        );
      })
      .catch(err => {
        console.error(err.message);
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.newsletterForm}>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="your-email@corp.com"
          value={this.state.value}
          onChange={this.handleChange}
          className={styles.emailInput}
        />
        <button className="button button--secondary button--lg" type="submit">
          Subscribe
        </button>
      </form>
    );
  }
}

export interface HomepageProps {
  homePageBlogMetadata: unknown;
  readonly recentPosts: readonly HomepagePost[];
}

interface HomepagePost {
  readonly Preview: Content;
  readonly metadata: {
    title: string;
    description: string;
    frontMatter: {image: string};
  };
}

export default function Home({
  homePageBlogMetadata,
  recentPosts,
}: HomepageProps): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.tagline}
      description="Featuring a GUI and a CLI. Glasskube packages are dependency aware, GitOps ready and get automatic updates via a central public package repository.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepageProducts />
        <HomepageVideo />
        <HomepageBlogs
          homePageBlogMetadata={homePageBlogMetadata}
          recentPosts={recentPosts}
        />
        <HomepageNewsletter />
      </main>
    </Layout>
  );
}
