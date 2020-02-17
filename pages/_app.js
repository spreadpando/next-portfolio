import App from 'next/app'
import Head from 'next/head'
import { PageTransition } from 'next-page-transitions'
import Nav from '../components/nav'
class MyApp extends App {
    constructor(props){
        super(props)
        this.state = {
        currentRoute: 0,
        entrance:'',
        exit:''
    }}

    static async getInitialProps({ Component, router, ctx }) {
        let pageProps = {}
    
        if (Component.getInitialProps) {
          pageProps = await Component.getInitialProps(ctx)
        }
    
        return { pageProps }
      }

    setCurrentRoute = (newRoute) => {
        (newRoute > this.state.currentRoute) ?
        this.setState({
            currentRoute: newRoute,
            entrance: '200px',
            exit: '-20px'
        }) :
        this.setState({
            currentRoute: newRoute,
            entrance: '-20px',
            exit:'200px'
        })

    }
    
    render () {
        const { Component, pageProps, router } = this.props

        return (
            <>  
                <Head>
                    <meta
                        name="viewport"
                        content="initial-scale=1.0, width=device-width"
                        key="viewport" />
                    <link 
                        href="https://fonts.googleapis.com/css?family=Fira+Code:400,500,600,700&display=swap" 
                        rel="stylesheet" 
                        key='gfonts'/>
                    <link 
                        rel="stylesheet" 
                        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
                        integrity="sha256-l85OmPOjvil/SOvVt3HnSSjzF1TUMyT9eV0c2BzEGzU="
                        crossOrigin="anonymous" 
                        key='normalize'/>
                </Head>
                <Nav currentRoute={this.state.currentRoute} setCurrentRoute={this.setCurrentRoute}/>
                <PageTransition timeout={300} classNames='page-transition'>
                    <Component {...pageProps} {...this.state} key={router.route}/>
                </PageTransition>
                <style jsx global>{`
                    *{
                        font-family: 'Fira Code', monospace;
                    }
                    h1{
                        font-weight:500;
                    }
                    ul{
                        padding:0;
                        margin:0;
                    }
                    li{
                        list-style:none;
                    }
                    li a{
                        text-decoration:none;
                        color:#000;
                    }
                    .page-transition-enter {
                        opacity: 0;
                        transform: translate3d(${this.state.entrance}, 0, 0);
                    }
                    .page-transition-enter-active {
                        opacity: 1;
                        transform: translate3d(0, 0, 0);
                        transition: opacity 300ms, transform 300ms;
                    }
                    .page-transition-exit {
                        opacity: 1;
                    }
                    .page-transition-exit-active {
                        opacity: 0;
                        transform: translate3d(${this.state.exit}, 0, 0);
                        transition: opacity 300ms, transform 300ms;
                    }
                    `}
                </style>
            </>
    )
  }
}

export default MyApp
