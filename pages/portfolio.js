import PageContainer from '../components/page-cont'

const PortfolioPage = ({ posts }) => {
  return (
    <PageContainer
      h1='projects'
      posts={posts}
    />
  )
}

PortfolioPage.getInitialProps = async () => {
  const res = await fetch(`${process.env.API_HOST}/api/data/portfolio`)
  const posts = await res.json()
  return { posts: posts }
}

export default PortfolioPage
