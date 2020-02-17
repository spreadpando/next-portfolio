import fetch from 'isomorphic-unfetch'
import PageContainer from '../components/page-cont'
const IndexPage = ({ posts }) => {
  return (
    <PageContainer
      h1='wilson fanestil'
      posts={posts}
    />
  )
}

IndexPage.getInitialProps = async () => {
  const res = await fetch(`${process.env.API_HOST}/api/data/index`)
  const posts = await res.json()
  return { posts: posts }
}

export default IndexPage
