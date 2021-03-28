import Head from 'next/head'


export default function Home() {
  const data = fetch ( 'http://headlessnext.local/graphql', {
headers: { 'Content-Type': 'application/json' },
method: 'POST',
body: JSON.stringify({ 'test': 'value'})
  });
  console.log(data);
  return (
    <div>
      <Head>
        <title>Create Next App</title> 
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        </main>
    </div>
  )
}
