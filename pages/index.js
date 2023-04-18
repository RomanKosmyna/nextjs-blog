import Head from 'next/head';
import Layout, {siteTitle} from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import {getSortedPostsData} from "../lib/posts";
import Link from "next/link";

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();

    return {
        props: {
            allPostsData,
        }
    };
}

export default function Home({allPostsData}) {

    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>What is going on</p>
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