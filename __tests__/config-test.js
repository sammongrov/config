import AppConfig from '../config';

// const devMode = 'development';
it('setDebugMode', () => {
  var devMode = "process.env.NODE_ENV === 'development'";
  var mode = devMode;
  var res = AppConfig.setDebugMode(mode);
  expect(res).toEqual(devMode);
});

it('appguides service', () => {
  var svc = {
    about: 'This is falconz browser from mongrov',
    url: 'corp.mongrov.com',
    intro: [
      {
        key: 'slide1',
        text: 'Securely communicate with your colleagues wherever they are.',
        image: {
          uri: 'https://mongrov.com/mongrov-app-assets/images/introscreen1_vector.png',
        },
        backgroundColor: '#21A2FF',
      },
      {
        key: 'slide2',
        text: 'View the location of the on-field team and assets in real-time on the map.',
        image: {
          uri: 'https://mongrov.com/mongrov-app-assets/images/introscreen2_vector.png',
        },
        backgroundColor: '#FF706B',
      },
      {
        key: 'slide3',
        text: 'Visualize, collaborate and optimize tasks in real-time with your team.',
        image: {
          uri: 'https://mongrov.com/mongrov-app-assets/images/introscreen3_vector.png',
        },
        backgroundColor: '#5958D7',
      },
      {
        key: 'slide4',
        text:
          'Just a click, your meeting is a video conference with a camera-enabled computer, phone, or tablet.',
        image: {
          uri: 'https://mongrov.com/mongrov-app-assets/images/introscreen4_vector.png',
        },
        backgroundColor: '#6522AC',
      },
    ],
  };
  expect(AppConfig.service).toMatchObject(svc);
});

it('setDefaultProfile to return undefined', () => {
  expect(AppConfig.setDefaultProfile()).toBeUndefined();
});

it('google url production test', () => {
  expect(AppConfig.gaTrackingId).toEqual('UA-84284256-1');
});
it('google url production test', () => {
  expect(AppConfig.setBrand()).toBeUndefined();
});
