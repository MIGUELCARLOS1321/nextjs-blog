import Head from 'next/head';
import Layout, { No Talent Required } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{No Talent Required}</title>
      </Head>
    <title>No Talent Required</title>
      <section className={utilStyles.headingMd}>
      <p><b>Hello! I am Miguel Francis Carlos a student web developer!!</b></p>
        <p><b>10 Things That Require Zero Talent</b></p>
        <ul>
        <li>1. Being on Time</li>
        <li>2. Making An Effort</li>
        <li>3. Being High Energy</li>
        <li>4. Having A Positive Attitude</li>
        <li>5. Being Passionate</li>
        <li>6. Using Good Body Language</li>
        <li>7. Being Coachable</li>
        <li>8. Doing A Little Extra</li>
        <li>9. Being Prepared</li>
        <li>10. Having A Strong Work Ethic</li>
        </ul>
          (This is a sample website - you’ll be building a site like this on
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
