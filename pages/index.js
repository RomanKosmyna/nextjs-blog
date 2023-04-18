import Head from 'next/head';
import Layout, {siteTitle} from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import {getSortedPostsData} from "../lib/posts";
import Link from "next/link";

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    const res = await fetch("http://localhost:3000/api/hello")
    const data = await res.json();
    // test
    return {
        props: {
            allPostsData,
            data,
        }
    };
}

export default function Home({allPostsData, data}) {
    console.log(data)
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>Aspiring Front-End Developer</p>
                <p>
                    (This is a sample website - you’ll be building a site like this on{' '}
                    <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
                </p>
            </section>
            <section>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({id, title}) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`posts/${id}`}>{title}</Link>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    );
}