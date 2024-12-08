import React from 'react';
import DayOpen from './DayOpen';
import DayClosed from './DayClosed';
import { isDayInPast } from '../components/utils';
import { ContentType } from '../components/utils';

interface DayProps {
  dayOpen: boolean;
  dayNumber: number;
  contentType: ContentType
  contentSrc: string;
  description: string;
  onToggle: () => void;
}

const Day: React.FC<DayProps> = ({ dayOpen, dayNumber, contentType, contentSrc, description, onToggle }) => {

  return isDayInPast(dayNumber) || dayOpen 
    ? <DayOpen contentType={contentType} contentSrc={contentSrc} description={description} />
    : <DayClosed dayNumber={dayNumber} onToggle={onToggle} />;
}

export default Day;
