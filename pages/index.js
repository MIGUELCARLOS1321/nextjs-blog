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
        <p>[I AM A HONOR STUDENT FROM UNIVERSITY OF THE ASSUMPTION!]</p>
        <p>My name is Miguel Francis M. Carlos from San Simon Pampanga 20yrs old. My hobbies are gaming,
painting, programming, editing, making videos, etc.. My favorite music is a chill type of music like
some chill rap like Mona Lisa. My Favorite Food is definitely any food that you can partner up with an
egg.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}