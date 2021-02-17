import Head from 'next/head'
import '../styles/Index.module.scss';

const Index = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="splashMain">
        <h1>Hello World</h1>
      </main>
    </div>
  )
}

export default Index;
