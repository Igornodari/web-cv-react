import React from 'react';
import Layout from '@theme/Layout';
import HomepageFeature from '../components/HomepageFeatures';
import HomepageHeader from '../components/HomepageHeader';

export default function Home() {
  return (
    <Layout>
      <header>
      <HomepageHeader/>

      </header>
      <body>
      <HomepageFeature/>
      </body>
    </Layout>
  );
}
