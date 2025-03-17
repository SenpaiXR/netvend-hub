import Head from 'next/head';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';

export default function Home() {
  return (
    <div className='min-h-screen bg-gray-50'>
      <Head>
        <title>Netvend Hub</title>
        <meta name='description' content='Netvend Web3 Utility Hub' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main className='max-w-7xl mx-auto p-4'>
        <Dashboard />
      </main>
    </div>
  );
}
