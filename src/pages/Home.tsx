import { 
    Flex,
    Text,
} from '@chakra-ui/react'
import { useState } from 'react';
import Day from './Day';
import "@fontsource/great-vibes";
import "@fontsource/anton";
import days from '../components/days';

const Home = () => {
  const [openDays, setOpenDays] = useState(Array(24).fill(false));
  const toggleDayOpen = (dayIndex: number) => {
    setOpenDays((prevDays) =>
      prevDays.map((open, index) => (index === dayIndex ? !open : open))
    );
  };

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      w="100%"
      h="100%"
      bg="#6c0200"
    >
      <Flex direction="row" mt="2">
        <Text
          fontSize="2xl"
          fontWeight="bold"
          color="#B6D7A8"
          mb="4"
          fontFamily="Anton"
        >
            ADVENTSKALENDER
        </Text>
      </Flex>
      <Text
          fontFamily="Great Vibes"
          mb="2"
          color="white"
      >
          „Für mein Marlisbär"
      </Text>
      {Array.from({ length: 24 }).map((_, index) => (
        <Day
          key={index}
          dayOpen={openDays[index]}
          dayNumber={index + 1}
          imageSrc={days[index].imageSrc}
          description={days[index].description}
          onToggle={() => toggleDayOpen(index)}
        />
      ))}
    </Flex>
  )
};


export default Home;
