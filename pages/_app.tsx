import LiteflowNFTApp, {
  APOLLO_STATE_PROP_NAME,
  Navbar,
} from '@nft/components'
import Footer from '../components/Footer/Footer'
import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { WalletLinkConnector } from '@web3-react/walletlink-connector'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { GoogleAnalytics, usePageViews } from 'nextjs-google-analytics'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { useEffect, useMemo } from 'react'
import Head from '../components/Head'
import environment from '../environment'
import { theme } from '../styles/theme'
import '../styles/custom.css'

NProgress.configure({ showSpinner: false })

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter()
  usePageViews()

  useEffect(() => {
    const handleStart = () => NProgress.start()
    const handleStop = () => NProgress.done()

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])

  const userProfileLink = useMemo(
    () =>
      pageProps?.user?.address ? `/users/${pageProps.user.address}` : '/login',
    [pageProps?.user?.address],
  )


  const connectors = useMemo(
    () => ({
      injected: new InjectedConnector({
        supportedChainIds: [environment.CHAIN_ID],
      }),
      walletConnect: new WalletConnectConnector({
        rpc: {
          [environment.CHAIN_ID]: environment.PUBLIC_ETHEREUM_PROVIDER,
        },
        supportedChainIds: [environment.CHAIN_ID],
        chainId: environment.CHAIN_ID,
      }),
      coinbase: new WalletLinkConnector({
        supportedChainIds: [environment.CHAIN_ID],
        appName: 'GIG',
        url: 'https://gig.io',
      }),
    }),
    [],
  )

  return (
    <>
      <Head
        title="Home"
        description="#1 NFT Marketplace in LATAM"
        image="/og-image.jpg"
      >
        <meta name="author" content="GIG" />
        <meta name="application-name" content="GIG" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gig.io" />

        <meta name="twitter:card" content="summary" />
      </Head>
      <GoogleAnalytics strategy="lazyOnload" />
      <LiteflowNFTApp
        ssr={typeof window === 'undefined'}
        endpointUri={environment.GRAPHQL_URL}
        cache={pageProps[APOLLO_STATE_PROP_NAME]}
        user={pageProps.user}
        connectors={connectors}
        bugsnagAPIKey={environment.BUGSNAG_API_KEY}
        theme={theme}
      >
        <Navbar
          allowTopUp={false}
          logo={{ path: '/logo_beta.png', width: 100, height: 53 }}
          /*multiLang={{
            pathname: '/es-mx',
            locale: 'es-mx',
            choices: [
              {value: 'es-mx', label: 'ES'},
              {value: 'en', label: 'EN'}
            ]
          }}*/
          router={{
            asPath: router.asPath,
            isReady: router.isReady,
            push: router.push,
            query: router.query,
            events: router.events,
          }}
          login={{
            email: false,
            metamask: true,
            walletConnect: true,
            coinbase: true,
            networkName: environment.NETWORK_NAME,
          }}
        />
        <Component {...pageProps} />
        <Footer userProfileLink={userProfileLink}/>
      </LiteflowNFTApp>
    </>
  )
}
export default MyApp
