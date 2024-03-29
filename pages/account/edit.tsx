import { UserForm } from '@nft/templates'
import { NextPage } from 'next'
import Head from '../../components/Head'
import environment from '../../environment'
import SmallLayout from '../../layouts/small'

const EditPage: NextPage = () => (
  <div id="user-edit-profile">
    <SmallLayout>
      <Head title="Account - Edit profile" />
      <UserForm.Template uploadUrl={environment.UPLOAD_URL} />
    </SmallLayout>
  </div>
)

export default EditPage
