// const env = window.location.href;
let baseURL = 'http://localhost:3001/';
let environment = 'Prod';

// if (env.includes('localhost') || env.includes('dev')) {
//   baseURL = 'https://dev.fhapi.tbsokc.com/';
//   environment = 'Dev';
// } else if (env.includes('qa')) {
//   baseURL = 'https://qa.fhapi.tbsokc.com/';
//   environment = 'QA';
// } else if (env.includes('uat')) {
//   baseURL = 'https://uat.fhapi.tbsokc.com/';
//   environment = 'UAT';
// }

export const API_DEFAULT_OPTIONS = {
  baseURL,
  environment,
  headers: {
    'Content-Type': 'application/json',
  },
};

export const API_RESOURCES = {
  pokemon: 'https://pokeapi.co/api/v2/pokemon',

  pokeImg: ''
};
