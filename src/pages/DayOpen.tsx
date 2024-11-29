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

interface DayOpenprops {
    imageSrc: string;
    description: string;
}

const DayOpen: React.FC<DayOpenprops> = ({ imageSrc, description }) => {
    return (
        <Card
          maxW="sm"
          padding="5"
          my="2"
          bg="#B6D7A8"
        >
            <CardBody>
                <Image
                    src={ imageSrc }
                    alt="Foto des Tages"
                    borderRadius="lg"
                />
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
