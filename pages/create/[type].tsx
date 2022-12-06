import { AssetForm } from '@nft/templates'
import { NextPage } from 'next'
import Head from '../../components/Head'
import environment from '../../environment'
import SmallLayout from '../../layouts/small'
import { values } from '../../traits'

export const getServerSideProps = AssetForm.server(
  environment.GRAPHQL_URL,
  values,
)

const CreatePage: NextPage<AssetForm.Props> = ({
  multiple,
  currentAccount,
  traits,
}) => (
  <div id="crear-detalles">
  <SmallLayout>
    <Head
      title="Create Collectible"
      description="Create Collectible securely stored on blockchain"
    />
    <AssetForm.Template
      multiple={multiple}
      currentAccount={currentAccount}
      traits={traits}
      explorer={{
        name: environment.BLOCKCHAIN_EXPLORER_NAME,
        url: environment.BLOCKCHAIN_EXPLORER_URL,
      }}
      uploadUrl={environment.UPLOAD_URL}
      login={{
        email: false,
        metamask: true,
        walletConnect: true,
        coinbase: true,
        networkName: environment.NETWORK_NAME,
      }}
      activateUnlockableContent={false}
      restrictMintToVerifiedAccount={true}
      reportEmail={environment.REPORT_EMAIL}
    />
  </SmallLayout>
  </div>
)

export default CreatePage
