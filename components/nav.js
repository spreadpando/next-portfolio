import Link from 'next/link'
const Nav = ({ currentRoute, setCurrentRoute }) => {
  const links = [{ href: '/', title: '.dev', index: 0 }, { href: '/portfolio', title: 'portfolio', index: 1 }, { href: '/contact', title: 'cv / contact', index: 2 }]
  return (
    <>
      <div id='nav-div'>
        <ul id='nav-ul'>
          {links.map((link, i) => {
            return (
              <li className='nav-li' key={link.title}>
                <Link href={link.href}>
                  {
                    (currentRoute === link.index)
                      ? <a className='selected' onClick={() => { setCurrentRoute(i) }}>{link.title}</a>
                      : <a onClick={() => { setCurrentRoute(i) }}>{link.title}</a>
                  }
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
      <style jsx global>{`
    #nav-div{
        position:fixed;
        display:block;
        z-index:1000;
        top:0;
        left:0;
        margin:1vh 15vw 0 15vw;
    }
    #nav-ul{
        position:relative;
        width:70vw;
        display:flex;
        justify-content: space-around;
    }
    .nav-li{
        position:relative;
        display:block;
        text-align:left;
        margin: 0 0 0 0; 
    }
    .nav-li a{
        padding: 5px;
        transition: color 1s;
    }
    .selected{
        color:#00f;
    }
    `}
      </style>
    </>
  )
}

export default Nav
