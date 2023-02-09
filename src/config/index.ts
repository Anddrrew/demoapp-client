type configFields = Record<string, string>;

const auth0Fields = {
  domain: 'REACT_APP_AUTH0_DOMAIN',
  clientId: 'REACT_APP_AUTH0_CLIENT_ID',
  redirectUri: 'REACT_APP_AUTH0_CALLBACK_URL',
  audience: 'REACT_APP_AUTH0_AUDIENCE',
};

const apiFields = {
  serverUrl: 'REACT_APP_API_SERVER_URL',
};

const validate = (fields: configFields) => {
  Object.values(fields).forEach((field) => {
    if (!process.env[field]) {
      throw new Error(`${field} must must be in environment variables`);
    }
  });
};

const create = <T>(fields: configFields): T => {
  validate(fields);
  return Object.entries(fields).reduce((acc, [key, value]) => {
    return {
      ...acc,
      [key]: process.env[value],
    };
  }, {} as T);
};

export default {
  auth0: create<typeof auth0Fields>(auth0Fields),
  api: create<typeof apiFields>(apiFields),
};
