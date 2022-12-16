import {
    Button,
    Heading,
    Link,
    Text,
    Stack
} from '@chakra-ui/react'
import Head from '../components/Head'
import LargeLayout from '../layouts/large'
import environment from '../environment'
import { NextPage } from 'next'
import useTranslation from 'next-translate/useTranslation'

const Custom500: NextPage = () => {
    const { t } = useTranslation('components')
    return (
        <div id="server-error">
            <LargeLayout>
                <Head
                    title="Error 500"
                    description=""
                />
                <Stack spacing={6} mb={20} align={'center'}>
                    <Heading variant={'subtitle'} textAlign={'center'}>
                        {t('error.500.message')}
                    </Heading>
                    <Text>
                        {t('error.500.text1')}{' '}
                        <Link href='mailto:soporte@gig.io'>{environment.REPORT_EMAIL}</Link>{' '}
                        {t('error.500.text2')}{' '}
                        <Link href='/contacto'>{' '}{t('error.500.text3')}</Link>
                    </Text>
                    <Link href='/'>
                        <Button>{t('error.500.button')}</Button>
                    </Link>
                </Stack>
            </LargeLayout>
        </div>
    )
}

export default Custom500