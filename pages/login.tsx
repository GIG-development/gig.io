import { Login } from '@nft/templates'
import { NextPage } from 'next'
import Head from '../components/Head'
import environment from '../environment'
import SmallLayout from '../layouts/small'

const LoginPage: NextPage = () => (
  <div id="login">
    <SmallLayout>
      <Head title="Login" />
      <Login.Template
        email={false}
        metamask={true}
        walletConnect={true}
        coinbase={true}
        networkName={environment.NETWORK_NAME}
      />
    </SmallLayout>
  </div>
)

export default LoginPage
