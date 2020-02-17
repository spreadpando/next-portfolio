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
                <h2 className='post-head'>{post.head}</h2>
                <p className='post-cap'>{post.caption}</p>
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
            .post{
                posiion: relative;
                display:block;
                margin:4vh 25vw 0 25vw;
                width:50vw;
            }
            .post-head{
                font-weight:500;
            }
            .post-cap{
                padding: 0 0 0 2vw;
            }
            `}
      </style>
    </>
  )
}

export default PageContainer
