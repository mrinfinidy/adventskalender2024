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
  const specialDays = [2, 15, 24];
  const cardBgColor = specialDays.includes(dayNumber) ? "gold" : "#B6D7A8";
  const headingStyle = dayNumber === 24 ? "great-vibes" : "raleway";

  return (
      <Card
        maxW="sm"
        padding="5"
        my="2"
        bg={ cardBgColor }
      >
          <Stack mt="6" spacing="3" align="center" >
              <Heading
                color="#6c0200"
                fontFamily={ headingStyle }
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
                      ÖFFNEN
                  </Button>
              </Box>
          </Stack>
      </Card>
  );
}

export default DayClosed;
