import { EmailConnector } from '@nft/email-connector'
import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { WalletLinkConnector } from '@web3-react/walletlink-connector'
import environment from './environment'

const connectors = {
  email: new EmailConnector({
    apiKey: 'pk_live_CE27413B2AF21F5E',
    options: {
      network: {
        rpcUrl: environment.PUBLIC_ETHEREUM_PROVIDER,
        chainId: environment.CHAIN_ID,
      },
    },
  }),
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
}

export default connectors