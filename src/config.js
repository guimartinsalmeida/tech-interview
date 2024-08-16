const config = {
  clientId: process.env.REACT_APP_CLIENT_ID,
  clientSecret: process.env.REACT_APP_CLIENT_SECRET,
  developerToken: process.env.REACT_APP_DEVELOPER_TOKEN,
  loginCustomerId: process.env.REACT_APP_LOGIN_CUSTOMER_ID,
  customerId: process.env.REACT_APP_CUSTOMER_ID,
  redirectUri: process.env.REACT_APP_REDIRECT_URI,
  authUrl: process.env.REACT_APP_AUTH_URL,
  tokenUrl: process.env.REACT_APP_TOKEN_URL,
  scopes: process.env.REACT_APP_SCOPES
};

export default config;
