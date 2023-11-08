import { Platform } from 'react-native'


let baseURL = '';

{Platform.OS == 'android'
? baseURL = 'https://react-backend-b59s.onrender.com/api/v1/'
: baseURL = 'http://192.168.1.11:4000/api/v1/'
}

export default baseURL;