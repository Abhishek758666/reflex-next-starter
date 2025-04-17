// const API_BASE_URL = "https://api.bishraam.com/v1";
// const API_BASE_URL_IMAGE = "https://api.bishraam.com/assets";
const API_BASE_URL = "http://192.168.1.98:8000/v1";
const API_BASE_URL_IMAGE = `http://192.168.1.98:8000/assets`;
const NEXT_PUBLIC_GOOGLE_MAPS_API_KEY =
  process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
const NEXT_PUBLIC_GOOGLE_LOGIN_CLIENT_ID =
  process.env.NEXT_PUBLIC_GOOGLE_LOGIN_CLIENT_ID;

const PERSIST_VERSION = 1;
const PERSIST_KEY = "bookMyHub-customer";
const API_EXPIRE_TIME = 5000;
const FFEATURE_FLAGS = {
  newFeature: true,
  experimentalFeature: true,
};
export {
  API_BASE_URL,
  PERSIST_KEY,
  PERSIST_VERSION,
  FFEATURE_FLAGS,
  API_EXPIRE_TIME,
  API_BASE_URL_IMAGE,
  NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  NEXT_PUBLIC_GOOGLE_LOGIN_CLIENT_ID,
};
