import {
    Box,
    chakra,
    Container,
    Image,
    Link,
    SimpleGrid,
    Stack,
    Text,
    VisuallyHidden,
    useColorModeValue,
} from '@chakra-ui/react';
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram';
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';
import { FaYoutube } from '@react-icons/all-files/fa/FaYoutube';
import { FC, PropsWithChildren, ReactNode } from 'react'
  
const SocialButton = ({
    children,
    label,
    href,
  }: {
    children: ReactNode;
    label: string;
    href: string;
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('brand.black', 'brand.black')}
        color={'white'}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('grey.600', 'grey.600'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
      <Text fontWeight={'700'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    );
  };

type Props = {
  userProfileLink: string
}
  
const Footer: FC<PropsWithChildren<Props>> = ({
  userProfileLink
}) => {
    return (
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}
        padding={'20px'}>
        <Container as={Stack} maxW={'6xl'} py={10}>
          <SimpleGrid
            templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
            spacing={8}>
            <Stack spacing={6}>
              <Box>
                <Image
                    alt={'GIG Logo'}
                    w={'150px'}
                    h={'80px'}
                    src={'./logo_beta.png'}
                />
              </Box>
              <Text fontSize={'xs'}>
                Somos una plataforma descentralizada que empodera almas creativas.
                Colecciona, crea y comercializa NFTs sin tanto rollo.
                No necesitas ser experto, solo necesitas tu talente. Nosotros te ayudamos.
              </Text>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>GIG</ListHeader>
              <Link href={userProfileLink}>Mi Perfil</Link>
              <Link href={'/nosotros'}>Sobre Nosotros</Link>
              <Link href={'/creadores'}>Creadores</Link>
              <Link href={'/familia-gig'}>Familia GIG</Link>
              <Link href={'/gigcionario'}>GIGcionario</Link>
              <Link href={'/contacto'}>Contáctanos</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Soporte</ListHeader>
              <Link href={'/tutoriales'}>Tutoriales</Link>
              <Link href={'/faq'}>Preguntas Frecuentes</Link>
              <Link href={'/terminos-legales'}>Términos Legales</Link>
              <Link href={'/condiciones-de-uso'}>Condiciones de Uso</Link>
              <Link href={'/politica-de-privacidad'}>Política de Privacidad</Link>
            </Stack>
            <Stack alignItems={'flex-end'} alignContent={'space-between'}>
            
              <Stack direction={'row'} spacing={6} align={'flex-end'}>
                <SocialButton label={'Twitter'} href={'https://twitter.com/holagig'}>
                  <FaTwitter />
                </SocialButton>
                <SocialButton label={'YouTube'} href={'https://youtube.com/holagig'}>
                  <FaYoutube />
                </SocialButton>
                <SocialButton label={'Instagram'} href={'https://instagram.com/holagig'}>
                  <FaInstagram />
                </SocialButton>
              </Stack>
              <Text fontSize={'sm'}>
                <br/><br/><br/><br/><br/>
                © 2022 GIG. Todos los derechos reservados
              </Text>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    );
  }
export default Footer