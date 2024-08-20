import moment from 'moment';

export const getBiMonthlyRange = () => {
  return {
    first: {
      from: moment().startOf('month').format(),
      to: moment().startOf('month').add(13, 'days').format()
    },
    second: {
      from: moment().startOf('month').add(14, 'days').format(),
      to: moment().endOf('month').format()
    }
  };
};

export const getMonthlyRange = () => {
  return {
    from: moment().startOf('month').format(),
    to: moment().endOf('month').format()
  };
};