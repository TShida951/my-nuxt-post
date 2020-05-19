import Vue from 'vue';
import moment from 'moment';

Vue.filter('formatDate', (date, dateFormat = 'LL') => {
  if (!date) {
    return 'Unknown date and time';
  }
  return moment(date).format(dateFormat);
});
