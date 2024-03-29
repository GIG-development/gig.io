import { Checkout } from '@nft/templates'
import { NextPage } from 'next'
import Head from '../../components/Head'
import environment from '../../environment'
import SmallLayout from '../../layouts/small'

export const getServerSideProps = Checkout.server(environment.GRAPHQL_URL)

const CheckoutPage: NextPage<Checkout.Props> = ({ now, offerId, meta }) => (
  <div id="checkout">
    <SmallLayout>
      <Head
        title={meta.title}
        description={meta.description}
        image={meta.image}
      />
      <Checkout.Template
        now={now}
        offerId={offerId}
        explorer={{
          name: environment.BLOCKCHAIN_EXPLORER_NAME,
          url: environment.BLOCKCHAIN_EXPLORER_URL,
        }}
        allowTopUp={false}
        login={{
          email: false,
          metamask: true,
          walletConnect: true,
          coinbase: true,
          networkName: environment.NETWORK_NAME,
        }}
      />
    </SmallLayout>
  </div>
)

export default CheckoutPage
