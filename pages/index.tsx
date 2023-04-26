import { Header } from '@/components/Header'
import Head from 'next/head'


export default function Home() {
  return (
    <div>
      <Head>
      <title>News-Project</title>
      <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
    </div>
  )
}
