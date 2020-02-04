import Link from 'next/link'
const Nav = ({ setCurrentRoute }) => {
  const links = [{ href: '/', title: '.dev' }, { href: '/portfolio', title: 'portfolio' }, { href: '/contact', title: 'cv / contact' }]
  return (
    <>
      <ul id='nav-ul'>
        {links.map((link, i) => {
          return (
            <li className='nav-li' key={`${link.title}`}>
              <Link href={link.href}>
                <a onClick={() => { setCurrentRoute(i) }}>
                  {link.title}
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
      <style jsx global>{`
      #nav-ul{
          position:absolute;
          width:100vw;
          display:flex;
          justify-content: space-around;
      }
      .nav-li{
        list-style:none;
        text-align:left;
        margin: 0 auto 0 0;
        
      }


      `}
      </style>
    </>
  )
}

export default Nav
