import React from 'react';
import clsx from 'clsx';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import BlogLayout from '@theme/BlogLayout';
import BlogListPaginator from '@theme/BlogListPaginator';
import type {Props} from '@theme/BlogListPage';
import BlogListPageStructuredData from '@theme/BlogListPage/StructuredData';
import BlogPostItems from '../BlogPostItems';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';


function BlogListPageMetadata(props: Props): JSX.Element {
  const {metadata} = props;
  const {
    siteConfig: {title: siteTitle},
  } = useDocusaurusContext();
  const {blogDescription, blogTitle, permalink} = metadata;
  const isBlogOnlyMode = permalink === '/';
  const title = isBlogOnlyMode ? siteTitle : blogTitle;
  return (
    <>
      <PageMetadata title={title} description={blogDescription} />
    </>
  );
}

/*
      <div style={{display: 'flex', justifyContent: 'center', marginBottom: '20px'}}>
        <Link
          className={clsx('button', 'button--secondary')}
          to={useBaseUrl('/blog/tags')}>
          Filtrovať podľa tagov
        </Link>
      </div>
*/

function BlogListPageContent(props: Props): JSX.Element {
  const {metadata, items, sidebar} = props;
  return (
    <BlogLayout sidebar={sidebar}>
      <div style={{display: 'flex', justifyContent: 'center', marginBottom: '20px'}}>
        <Link
          className={clsx('button', 'button--secondary', 'margin-top--md')}
          to={useBaseUrl('/blog/tags')}>
          Filtrovať podľa tagov
        </Link>
      </div>
      <BlogPostItems items={items} metadata={metadata} />
      <div className="container" style={{marginBottom: '40px'}}>
        <BlogListPaginator metadata={metadata} />
      </div>
    </BlogLayout>
  );
}

export default function BlogListPage(props: Props): JSX.Element {
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogListPage,
      )}>
      <BlogListPageMetadata {...props} />
      <BlogListPageStructuredData {...props} />
      <BlogListPageContent {...props} />
    </HtmlClassNameProvider>
  );
}
