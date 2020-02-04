import App from 'next/app'
import { PageTransition } from 'next-page-transitions'
import Nav from '../components/nav'
class MyApp extends App {
    constructor(props){
        super(props)
        this.state = {
        currentRoute: 0,
    }}

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
                <Nav setCurrentRoute={this.setCurrentRoute}/>
                <PageTransition timeout={300} classNames='page-transition'>
                    <Component {...pageProps} {...this.state} key={router.route}/>
                </PageTransition>
                <style jsx global>{`
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
