import { UserOnSaleAssets } from '@nft/templates'
import { NextPage } from 'next'
import Head from '../../../components/Head'
import environment from '../../../environment'
import LargeLayout from '../../../layouts/large'

export const getServerSideProps = UserOnSaleAssets.server(
  environment.GRAPHQL_URL,
  environment.PAGINATION_LIMIT,
)

const OnSalePage: NextPage<UserOnSaleAssets.Props> = ({
  meta,
  now,
  limit,
  page,
  offset,
  orderBy,
  userAddress,
}) => (
  <div id="user-onsale">
    <LargeLayout>
      <Head
        title={meta.title}
        description={meta.description}
        image={meta.image}
      />
      <UserOnSaleAssets.Template
        limit={limit}
        limits={[environment.PAGINATION_LIMIT, 24, 36, 48]}
        now={now}
        offset={offset}
        orderBy={orderBy}
        page={page}
        userAddress={userAddress}
      />
    </LargeLayout>
  </div>
)

export default OnSalePage
