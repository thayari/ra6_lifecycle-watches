import moment from 'moment';

export default function calculateTime(timezone) {
  const time = moment().utc().utcOffset(`${timezone}:00`);
  return {
    hours: time.format('h'),
    minutes: time.format('mm'),
    seconds: time.format('ss')
  }
}