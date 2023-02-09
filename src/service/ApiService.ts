import config from '../config';

class ApiService {
  private api = config.api.serverUrl;
  accessToken: string | undefined;

  setAccessToken = (token: string) => {
    this.accessToken = token;
  };

  fetch = async (path: string, method: string, body: object) => {
    const url = `${this.api}${path}`;

    const res = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.accessToken}`,
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const error = new Error('Oops. Something wrong.');
      const resError = await res.json();

      if (resError.message) {
        error.message = resError.message;
      }

      throw error;
    }

    return res.json();
  };
}

export default new ApiService();
