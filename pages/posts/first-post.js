import Head from "next/head";
// import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <>
      <Layout>
        <Head>
          <title>First Post</title>
        </Head>
        <Script
          src='https://connect.facebook.net/en_US/sdk.js'
          strategy='lazyOnload'
          onLoad={() =>
            console.log(`script loaded correctly, window.FB has been populated`)
          }
        />
        <h1>First Post</h1>
        <Image
          src='/images/profile.jpeg' // Route of the image file
          height={244} // Desired size with correct aspect ratio
          width={244} // Desired size with correct aspect ratio
          alt='Your Name'
        />
        <h2> The script loaded correctly, window.FB has been populated</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        {/* <h2>
          <Link href='/'>
            <a>Back to home</a>
          </Link>
        </h2> */}
      </Layout>
    </>
  );
}
