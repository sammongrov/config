import { StyleSheet } from 'react-native';
import RemoteConfig from '../lib/RemoteConfig';
// import app from '../../app.json';
import brandLogo from '../images/aboutLogo.png';
import brandLogoSmall from '../images/logoSmall.png';
import logo from '../images/logo.png';
import HeaderImage from '../images/headerCurves.png';
import firstSlideImage from '../images/intro/introOne.png';
import secondSlideImage from '../images/intro/introTwo.png';
import thirdSlideImage from '../images/intro/introThree.png';

let devMode = process.env.NODE_ENV === 'development';
const app = RemoteConfig.appConfig;

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 250,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    paddingBottom: 30,
    paddingHorizontal: 20,
  },
});

export default {
  // App Details
  name: app.name,
  appName: app.displayName,
  urls: {
    SERVER_URL: '',
  },
  DEV: devMode,
  version: app.version,
  disclaimer: app.disclaimer,
  instanceName: app.service.url,
  brandLogo,
  brandLogoSmall,
  brand: 'mongrov.com',
  HeaderImage,
  logo,
  profile: null,
  store: null,
  Failed: -1,
  Success: 1,
  ACTIONSTATUS: {
    INTIATED: 0,
    INPROGRESS: 1,
    SUCCESS: 2,
    FAILED: 3,
  },
  USERSTATUS: {
    ONLINE: 0,
    OFFLINE: 1,
    AWAY: 2,
    BUSY: 3,
  },
  MESSAGESTATUS: {
    // Message status
    M_LOCAL: 0,
    M_DELIVERED: 10,
    M_READ: 100,
  },
  CALENDER_URL: [
    'https://calendar.google.com/calendar/ical/mongrov.com_7kmoik6h0pqibhgtafs5lvjim4%40group.calendar.google.com/private-95298e703472222bdab8029b780f0903/basic.ics',
  ],
  APPCONFIG: {
    CHECK_FOR_DISCOVER: false,
    DISCOVER_HIDE_ROLE: null,
    ATTACH_AUDIO: true,
    CHANGE_SERVER: true,
    ATTACH_VIDEOCONF: true,
    ATTACH_VIDEO: true,
    BOARD_EDIT_UPDATE: true,
    FORM_ENABLE: true,
    HIDE_WORKSPACE_VIEW: false,
    SHOW_GROUP_TASKS: true,
    HIDE_TIME_TABLE: true,
    HIDE_AUDIO_CONF: true,
    HIDE_VOICE_TO_TEXT: false,
    SHOW_REGISTER: false,
    ATTACH_THREADEDCHAT: false,
    SHOW_BOT_VOICE: false,
  },
  setDebugMode: (mode) => {
    devMode = mode;
  },
  JOBNAME: {
    JOB_CHAT: 'ChatList',
    JOB_FETCH_USER: 'User',
    JOB_FETCH_MESSAGE: 'FetchMessage',
    PUTMESSAGEJOBNAME: 'PutMessage',
    PUTUSERJOBNAME: 'PutUser',
    JOB_USER_SUBSCRIPTIONS: 'subscriptions',
    JOB_LOGOUT: 'logout',
    JOB_CONNECT: 'Connection',
    JOB_LOGIN: 'Login',
    JOB_SETTINGS: 'Settings',
    JOB_REGISTER: 'Register',
    JOB_UPLOAD_FILE: 'FileUpload',
    JOB_SEND_MESSAGE: 'SendMessage',
    JOB_SEND_UNDELIVERED_MESSAGE: 'SendUndeliveredMessage',
    JOB_SEND_TYPING_NOTIFICATION: 'SendTypingNotification',
    JOB_SEARCH_GROUP: 'SearchGroup',
    JOB_FETCH_CURRENT_ROOM_MESSAGE: 'FetchCurrentRoomMessage',
    JOB_DELETE_MESSAGE: 'DeleteMessage',
    JOB_DELETE_OFFLINE_MESSAGE: 'DeleteOfflineMessage',
    JOB_RESET_PASSWORD: 'ResetPassword',
    JOB_RECONNECT: 'Reconnect',
    JOB_GET_IMAGE_URL: 'GetImageURL',
    JOB_SEND_READ_NOTIFICATION: 'SendReadNotification',
    JOB_LIKE_MESSAGE: 'LikeMessage',
    JOB_FETCH_BACKGROUND_GROUP: 'FetchBackgroundGroup',
    JOB_FETCH_BACKGROUND_MESSAGE: 'FetchBackgroundMessage',
    FETCH_CALENDER: 'FetchCalender',
  },
  FETCH_CURRENT_GROUP_MIN_MSGS: 20,

  get service() {
    const svc = app.service;
    const imgs = [firstSlideImage, secondSlideImage, thirdSlideImage];
    for (let i = 0; i < svc.intro.length; i += 1) {
      svc.intro[i].imageStyle = styles.image;
      svc.intro[i].textStyle = styles.text;
      svc.intro[i].image = imgs[i];
    }
    return svc;
  },

  get brandName() {
    return this.brand;
  },

  setBrand(brandName) {
    this.brand = brandName;
  },

  setDefaultProfile() {
    this.profile = {
      name: 'default',
      encryption: null,
      disclaimerAccepted: false,
    };
  },

  resetInstance(resetInstanceUrl) {
    if (resetInstanceUrl) {
      this.instance = resetInstanceUrl;
      this.urls.resetPassword = `https://${this.instance}`;
      this.urls.signUp = this.urls.resetPassword;
      this.urls.SERVER_URL = this.urls.resetPassword;
      this.urls.WS_URL = `wss://${this.instance}/websocket`;
    }
  },
};
