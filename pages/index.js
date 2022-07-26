import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Date from "../components/date";
import Navbar from "../src/common/Navbar";
import Header from "./Header";
import Names from "./Names";
import Alert from "../components/Alert";

import { getSortedPostsData } from "../lib/posts";
import Footer from "../src/common/Footer";
// import { Projects } from "./Projects";

// import Button from "./LikeButton";

// import { getSortedPostsData } from "../lib/posts";

// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }

export default function HomePage({ allPostsData }) {
  return (
    <>
      <Navbar />
      <Layout home>
        <div>
          <Head>
            <title>{siteTitle}</title>
          </Head>
          <section className={utilStyles.headingMd}>
            <Header />
          </section>
          <section
            className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
            <h2 className={utilStyles.headingLg}>My Blog</h2>
            <ul className={utilStyles.list}>
              {allPostsData.map(({ id, date, title }) => (
                <li className={utilStyles.listItem} key={id}>
                  <Link href={`/posts/${id}`}>
                    <a>{title}</a>
                  </Link>
                  <br />
                  <small className={utilStyles.lightText}>
                    <Date dateString={date} />
                  </small>
                </li>
              ))}
            </ul>
          </section>
          <Names />
          <Alert />
          {/* <Projects /> */}
          {/* <Button /> */}
        </div>
        <Footer />
      </Layout>
    </>
  );
}
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
