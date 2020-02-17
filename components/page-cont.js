import Abstract from './abstract'
const PageContainer = ({ h1, posts }) => {
  console.log(posts)
  return (
    <>
      <div className='page-cont'>
        <h1 className='page-title'>{h1}</h1>
        {
          posts
            ? posts.map((post, i) => (
              <div className='post' key={`post-${i}`}>
                <h2>post.head</h2>
                <p>post.caption</p>
              </div>
            )) : ''
        }
        <Abstract />
      </div>
      <style jsx>{`
            .page-cont{
                position:absolute;
                display:block;
                z-index:0;
                width:100vw;
                height:100vh;
                margin:0 0 0 0;
            }
            .page-title{
                position:relative;
                margin:1.2em 0 0 .67em;
            }
            `}
      </style>
    </>
  )
}

export default PageContainer
