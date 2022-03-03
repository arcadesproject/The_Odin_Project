import { format, addMinutes } from 'date-fns';

const convertTime = (seconds) => {
  let date = new Date(seconds * 1000);
  date = addMinutes(date, date.getTimezoneOffset());
  const formatted = format(date, 'mm:ss');
  return formatted;

  //*****ALTERNATIVE*****//
  //
  //date-fns limited to actual time, so couldn't take hours beyond 24
  //
  //   var h = Math.floor(seconds / 3600)
  //       .toString()
  //       .padStart(2, '0'),
  //     m = Math.floor((seconds % 3600) / 60)
  //       .toString()
  //       .padStart(2, '0'),
  //     s = Math.floor(seconds % 60)
  //       .toString()
  //       .padStart(2, '0');

  //   return h + ':' + m + ':' + s;
};

export default convertTime;
