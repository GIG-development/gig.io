import NextHead from 'next/head'
import { FC, PropsWithChildren } from 'react'
import environment from '../environment'

type Props = {
  title: string
  description?: string
  keywords?: string
  image?: string
}

const Head: FC<PropsWithChildren<Props>> = ({
  title,
  description,
  keywords,
  image,
  children,
}) => {
  return (
    <NextHead>
      <title>{title} | GIG - Marketplace #1 de NFTs en LATAM</title>
      <meta property="og:title" content={title} />
      <meta name="twitter:title" content={title} />
      {description && (
        <>
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
          <meta name="twitter:description" content={description} />
        </>
      )}
      <meta name="keywords" content={keywords!=='' ? keywords : 'nfts, marketplace, latam, artistas digitales, ganar royalties, arte, latinoamerica, plataforma de venta de arte digital'} />
      <meta
        property="og:image"
        content={image || `${environment.BASE_URL}/og-image.jpg`}
      />
      <meta
        name="twitter:image"
        content={image || `${environment.BASE_URL}/twitter-card.jpg`}
      />
      {children}
    </NextHead>
  )
}

export default Head
