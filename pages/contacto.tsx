import {
  Heading, 
  Stack,
  Text
} from '@chakra-ui/react'
import Head from '../components/Head'
import LargeLayout from '../layouts/large'
import { NextPage } from 'next'
import useTranslation from 'next-translate/useTranslation'
  
const Contacto: NextPage = () => {
  const { t } = useTranslation('components')
  return (
    <div id="contacto">
      <LargeLayout>
          <Head
              title="Contacto"
              description="Experto, amateur o entusiasta de la industria NFT y la web 3.0, queremos escucharte. Encuéntranos aquí: soporte@gig.io"
          />
          <Stack spacing={6} mb={20} align={'center'}>
              <Heading as={'h1'} variant="title">
                {t('contact.title')}
              </Heading>
              <Heading variant={'heading3'}>
                {t('contact.subtitle')}
              </Heading>
              <Text textAlign={'center'}>
                {t('contact.line1')}<br/>
                {t('contact.line2', {social: '<b>@holagig</b>', interpolation: { escapeValue: false }})}
              </Text>
              <button data-tf-slider="VNmlDfKG" data-tf-hide-headers data-tf-position="right" data-tf-button-color="#BE94FF" data-tf-iframe-props="title=Contact Form" data-tf-chat className='btn'>
                {t('contact.button')}
              </button>
              <script src="//embed.typeform.com/next/embed.js"></script>
          </Stack>
      </LargeLayout>
    </div>
  )
}

export default Contacto