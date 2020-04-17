import axios from 'axios';
import {ZOMATO_USER_KEY} from 'react-native-dotenv';

export default axios.create({
  baseURL: 'https://developers.zomato.com/api/v2.1',
  headers: {
    Accept: 'application/json',
    'user-key': ZOMATO_USER_KEY,
  },
});
