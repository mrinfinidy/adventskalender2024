import React from 'react';
import {
    Image,
    Stack,
    Card,
    CardBody,
    Text,
} from '@chakra-ui/react';
import "@fontsource/oswald"
import "@fontsource/raleway"
import { ContentType } from '../components/utils';

interface DayOpenprops {
    contentType: ContentType;
    contentSrc: string;
    description: string;
}

const renderContent = (contentType: ContentType, contentSrc: string): JSX.Element => {
  switch (contentType) {
    case ContentType.Image :
      return (
        <Image
          src={ contentSrc }
          alt="Foto des Tages"
          borderRadius="lg"
        />
      );
    case ContentType.Video :
      return (
        <video
          src={ contentSrc }
          controls
        />
      );
    default:
      return <span>Foto des Tages</span>;
  }
}

const DayOpen: React.FC<DayOpenprops> = ({ contentType, contentSrc, description }) => {
  return (
    <Card
      maxW="sm"
      padding="5"
      my="2"
      bg="#B6D7A8"
    >
      <CardBody>
        { renderContent(contentType, contentSrc) }
      </CardBody>
      <Stack mt="6" spacing="3" align="center" >
        <Text
          color="#6c0200"
          fontFamily="Raleway"
        >
          { description }
        </Text>
      </Stack>
    </Card>
  );
}

export default DayOpen;
