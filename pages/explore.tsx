import { Explorer } from '@nft/templates'
import { NextPage } from 'next'
import Head from '../components/Head'
import environment from '../environment'
import LargeLayout from '../layouts/large'
import { values } from '../traits'

export const getServerSideProps = Explorer.server(
  environment.GRAPHQL_URL,
  values,
  24, //Pagination limit
)

const ExplorePage: NextPage<Explorer.Props> = ({
  now,
  offset,
  limit,
  traits,
  queryFilter,
  filter,
  search,
  page,
  orderBy,
}) => (
  <div id="explore">
    <LargeLayout>
      <Head
        title="Explore Collectibles"
        description="Encuentra y colecciona NFTs de valor, coleccionables digitales: arte visual, diseño, videojuegos, avatares, música, experiencias sensoriales y mucho más."
      />
      <Explorer.Template
        filter={filter}
        traits={traits}
        limit={limit || 24}
        limits={[24, 36, 48]}
        now={now}
        offset={offset}
        orderBy={orderBy}
        page={page}
        queryFilter={queryFilter}
        search={search}
      />
    </LargeLayout>
  </div>
)

export default ExplorePage
