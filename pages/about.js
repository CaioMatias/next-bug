import Head from 'next/head';
import Link from 'next/link';

export async function getStaticProps() {
    const query = `
		query {
			aboutPageCollection(limit: 1, preview: true) {
				items {
					header
					footer
				}
			}
		}
	`;

    const content = await fetch(
        `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.CONTENTFUL_TOKEN}`,
            },
            body: JSON.stringify({ query }),
        }
    ).then(response => {
        return response.json().then(response => {
            return response.data.aboutPageCollection.items[0];
        });
    });

    return {
        props: { ...content },
    };
}

export default function About(props) {
    const { header, footer } = props;

    return (
        <div>
            <Head>
                <title>middleware bug</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1>{header}</h1>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
            </nav>
            <h5>{footer}</h5>
        </div>
    );
}
