import React from 'react';
import {
    Button,
    Stack,
    Card,
    Heading,
    Divider,
    useToast,
    Box
} from '@chakra-ui/react';
import "@fontsource/oswald"
import "@fontsource/raleway"

interface DayClosedProps {
    dayNumber: number;
    onToggle: () => void;
}

const DayClosed: React.FC<DayClosedProps> = ({ dayNumber, onToggle }) => {
    const toast = useToast();

    return (
        <Card
          maxW="sm"
          padding="5"
          my="2"
          bg="#B6D7A8"
        >
            <Stack mt="6" spacing="3" align="center" >
                <Heading
                  color="#6c0200"
                  fontFamily="Raleway"
                >
                    { dayNumber }
                </Heading>
                <Divider borderColor="#6c0200" />
                <Box
                    borderRadius="lg"
                  bg="white"
                >
                    <Button
                      onClick={() => onToggle()}
                      variant="outline"
                      color="#6c0200"
                      borderColor="#6c0200"
                    >
                        ÖFNNEN
                    </Button>
                </Box>
            </Stack>
        </Card>
    );
}

export default DayClosed;
