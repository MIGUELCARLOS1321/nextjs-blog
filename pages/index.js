import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>10 Things That Require Zero Talent</p>
        <ul>
        <li>::marker "1. Being on Time"</li>
        <li>::marker "2. Making An Effort"</li>
        <li>::marker "3. Being High Energy"</li>
        <li>::marker "4. Having A Positive Attitude"</li>
        <li>::marker "5. Being Passionate"</li>
        <li>::marker "6. Using Good Body Language"</li>
        <li>::marker "7. Being Coachable"</li>
        <li>::marker "8. Doing A Little Extra"</li>
        <li>::marker "9. Being Prepared"</li>
        <li>::marker "10. Having A Strong Work Ethic"</li>
        </ul>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
