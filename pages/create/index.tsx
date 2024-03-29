import { TypeSelector } from '@nft/templates'
import { NextPage } from 'next'
import Head from '../../components/Head'
import environment from '../../environment'
import SmallLayout from '../../layouts/small'

export const getServerSideProps = TypeSelector.server(environment.GRAPHQL_URL)

const CreatePage: NextPage = () => (
  <div id="crear">
    <SmallLayout>
      <Head
        title="Crear un NFT"
        description="Crea, vende, subasta, colecciona NFTs y coleccionables digitales a tu nivel."
      />
      <TypeSelector.Template
        restrictMintToVerifiedAccount={true}
        reportEmail={environment.REPORT_EMAIL}
      />
    </SmallLayout>
  </div>
)

export default CreatePage
