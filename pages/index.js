import Head from 'next/head'
import Feed from '../components/Feed'
import Header from '../components/Header'
const index = () => {
  return (
    <div>
      <Head>
        <title>Instagram</title>
      </Head>
      {/* Header */}

      <Header />
      {/* Feed */}
      <Feed />
      {/* Modal */}
    </div>
  )
}

export default index
