/**
 * @format
 */

import './i18n.config';
import 'dayjs/locale/ru';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
