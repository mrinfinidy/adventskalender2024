import React from 'react';
import DayOpen from './DayOpen';
import DayClosed from './DayClosed';
import { isDayInPast } from '../components/utils';

interface DayProps {
  dayOpen: boolean;
  dayNumber: number;
  imageSrc: string;
  description: string;
  onToggle: () => void;
}

const Day: React.FC<DayProps> = ({ dayOpen, dayNumber, imageSrc, description, onToggle }) => {

  return isDayInPast(dayNumber) || dayOpen 
    ? <DayOpen imageSrc={imageSrc} description={description} />
    : <DayClosed dayNumber={dayNumber} onToggle={onToggle} />;
}

export default Day;
