import axios from 'axios';

const apiConfig = {
  baseUrl: 'https://example.com',
};

class API {
  constructor () {
    this.api = axios.create(apiConfig)
  }

  anotherMethod () {

  }
}

export default new API();
