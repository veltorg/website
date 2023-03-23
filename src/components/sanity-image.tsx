import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { useNextSanityImage } from 'next-sanity-image';
import Image from 'next/image';
import { FC } from 'react';
import { sanityDetails } from '../gql-client';

export const SanityImage: FC<{ value: SanityImageSource }> = ({ value }) => {
  // TODO: Remove any type
  const imageProps = useNextSanityImage(sanityDetails as any, value);

  if (!imageProps) {
    return null;
  }

  return (
    <Image
      style={{ borderRadius: '10px' }}
      {...imageProps}
      // TODO: Remove any type
      alt={(value as any).alt ?? ''}
    />
  );
};
