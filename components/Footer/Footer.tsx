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
        bg={useColorModeValue('gray.100', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}
        padding={'20px'}>
        <Container as={Stack} maxW={'6xl'} py={10}>
          <SimpleGrid
            templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr' }}
            spacing={8}>
            <Stack spacing={6}>
              <Box>
                <Link href='/' title="GIG Marketplace | Inicio">
                  <Image
                      alt={'GIG Logo'}
                      w={'150px'}
                      h={'80px'}
                      src={'./logo_beta_bn.png'}
                  />
                </Link>
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
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Soporte</ListHeader>
              <Link href={'/tutoriales'}>Tutoriales</Link>
              <Link href={'/faq'}>Preguntas Frecuentes</Link>
              <Link href={'/GIG_terminos-y-condiciones.pdf'}>Términos y Condiciones</Link>
              <Link href={'/GIG_terminos-y-condiciones.pdf'}>Política de Privacidad</Link>
              <Link href={'/contacto'}>Contáctanos</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Síguenos</ListHeader>
            
              <Stack direction={'column'} spacing={6} align={'flex-start'}>
                <Box>
                  <SocialButton label={'Twitter'} href={'https://twitter.com/holagig'}>
                    <FaTwitter /> 
                  </SocialButton>
                  <Link ml={2} href={'https://twitter.com/holagig'}>Twitter</Link>
                </Box>
                <Box>
                  <SocialButton label={'YouTube'} href={'https://youtube.com/holagig'}>
                    <FaYoutube /> 
                  </SocialButton>
                  <Link ml={2} href={'https://youtube.com/holagig'}>Youtube</Link>
                </Box>
                <Box>
                  <SocialButton label={'Instagram'} href={'https://instagram.com/holagig'}>
                    <FaInstagram /> 
                  </SocialButton>
                  <Link ml={2} href={'https://instagram.com/holagig'}>Instagram</Link>
                </Box>
              </Stack>
            </Stack>
          </SimpleGrid>
          
          <Text pt={20} fontSize={'sm'} textAlign={'center'}>
            © 2022 GIG. Todos los derechos reservados
          </Text>
        </Container>
      </Box>
    );
  }
export default Footer