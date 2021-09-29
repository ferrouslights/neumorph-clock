import React, { useState, useEffect } from 'react';
import { Time, TimeWrapper, Sun, Moon } from './Clock.styles';

const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const Timer = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(Timer);
    };
  });

  const tick = () => {
    setDate(new Date());
    console.log(date.toLocaleTimeString('it-IT'));
    
  };

  return (
    <TimeWrapper>
      {/* {parseInt(date.toLocaleTimeString('it-It').substring(0, 2)) > 4 && parseInt(date.toLocaleTimeString('it-It').substring(0, 2)) < 20 ? <Icon><FiSun/></Icon> : <Icon><FiMoon/></Icon>} */}
      {parseInt(date.toLocaleTimeString('it-It').substring(0, 2)) > 6 && parseInt(date.toLocaleTimeString('it-It').substring(0, 2)) < 18 ? <Sun/> : <Moon/>}
      <Time>{date.toLocaleTimeString('it-IT')}</Time>
    </TimeWrapper>
  );
};

export default Clock;
