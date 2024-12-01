import { 
    Flex,
    Text,
    useToast,
} from '@chakra-ui/react'
import { useState } from 'react';
import Day from './Day';
import "@fontsource/great-vibes";
import "@fontsource/anton";
import days from '../components/days';
import { isToday } from '../components/utils';

const Home = () => {
  const [openDays, setOpenDays] = useState(Array(24).fill(false));
  const toast = useToast();
  const toggleDayOpen = (dayIndex: number) => {
    if (!isToday(dayIndex + 1)) {
      toast({
        title: "Ganz geduldig!",
        description: "Nur ein Fenster pro Tag :)",
        duration: 3000,     
        isClosable: true,   
        position: "top",    
        status: "warning",
        colorScheme: "green",
      });
      return;
    }
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
          🎄 ADVENTSKALENDER&nbsp;🎄
        </Text>
      </Flex>
      <Text
          fontFamily="Great Vibes"
          mb="2"
          color="yellow"
      >
        ♡ „Für mein Marlisbär" ♡
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
