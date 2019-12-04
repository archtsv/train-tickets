import {
  ACTION_SET_FROM,
  ACTION_SET_TO,
  ACTION_SET_IS_CITY_SELECTOR_VISIBLE,
  ACTION_SET_CURRENT_SELECTING_LEFT_CITY,
  ACTION_SET_CITY_DATA,
  ACTION_SET_IS_LOADING_CITY_DATA,
  ACTION_SET_IS_DATE_SELETOR_VISIBLE,
  ACTION_SET_HIGH_SPEED,
} from './actions';

export default {
  from(state = '北京', action) {
    const {type, paylaod} = action;
    switch(type) {
      case ACTION_SET_FROM:
        return paylaod;
      default:
        return state;
    }
  },
  to(state = '上海', action) {
    const {type, paylaod} = action;
    switch(type) {
      case ACTION_SET_TO:
        return paylaod;
      default:
        return state;
    }
  },
  isCitySelectorVisible(state = false, action) {
    const {type, paylaod} = action;
    switch(type) {
      case ACTION_SET_IS_CITY_SELECTOR_VISIBLE:
        return paylaod;
      default:
        return state;
    }
  },
  currentSelectingLeftCity(state = false, action) {
    const {type, paylaod} = action;
    switch(type) {
      case ACTION_SET_CURRENT_SELECTING_LEFT_CITY:
        return paylaod;
      default:
        return state;
    }
  },
  cityData(state = null, action) {
    const {type, paylaod} = action;
    switch(type) {
      case ACTION_SET_CITY_DATA:
        return paylaod;
      default:
        return state;
    }
  },
  isLoadingCityData(state = false, action) {
    const {type, paylaod} = action;
    switch(type) {
      case ACTION_SET_IS_LOADING_CITY_DATA:
        return paylaod;
      default:
        return state;
    }
  },
  isDateSeletorVisible(state = false, action) {
    const {type, paylaod} = action;
    switch(type) {
      case ACTION_SET_IS_DATE_SELETOR_VISIBLE:
        return paylaod;
      default:
        return state;
    }
  },
  highSpeed(state = false, action) {
    const {type, paylaod} = action;
    switch(type) {
      case ACTION_SET_HIGH_SPEED:
        return paylaod;
      default:
        return state;
    }
  },
};