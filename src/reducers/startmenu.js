import {
  pinnedApps,
  recentApps,
  allApps
} from '../utils';

const defState = {
  pnApps: pinnedApps,
  rcApps: recentApps,
  allApps: allApps,
  hide: true,
  menu: false,
  showAll: false,
  alpha: false,
  curAlpha: 'A',
  qksrch: [
    ["faClock",1,"Today in history"],
    ["faFilm",null,"New movies"],
    ["faNewspaper",1,"Top news"],
    ["faChartLine",null,"Markets today"]
  ]
};

const menuReducer = (state = defState, action) => {
  switch (action.type) {
    case 'STARTSHW':
      return {
        ...state, menu: true, hide: false
      };
    case 'STARTHID':
      return {
        ...state, hide: true, showAll: false
      };
    case 'STARTOGG':
      return {
        ...state, hide: !(state.hide || !state.menu),
          menu: true, alpha: false, curAlpha: 'A',
          showAll: state.menu && state.showAll ? true : null
      };
    case 'STARTALL':
      return {
        ...state,
        showAll: !state.showAll,
          alpha: false,
          curAlpha: 'A'
      };
    case 'STARTALPHA':
      return {
        ...state,
        alpha: !state.alpha,
          curAlpha: action.payload || 'A'
      };
    case 'STARTSRC':
      return {
        ...state, hide: !(state.hide || state.menu),
          menu: false
      };
    default:
      return state;
  }
}

export default menuReducer;
