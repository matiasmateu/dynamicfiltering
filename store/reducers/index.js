import { combineReducers } from 'redux';
import workOrders from './workOrders';
import filters from './filters';

export default combineReducers({
  workOrders,
  filters
});
