import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export async function getStaticProps() {
    const content = await fetch('https://nextbugtest.free.beeceptor.com/home');

    console.log(content);

    return {
        props: { ...content },
    };
}

export default function Home(props) {
    console.log(props);

    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </div>
    );
}