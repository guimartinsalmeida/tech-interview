import { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config';

const useGoogleAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');

    if (code) {
      handleCallbackResponse(code);
    }

    const accessToken = localStorage.getItem('access_token');
    if (accessToken) {
      setIsAuthenticated(true);
    }
  }, []);

  const getAuthUrl = () => {
    const params = new URLSearchParams({
      client_id: config.clientId,
      redirect_uri: config.redirectUri,
      response_type: 'code',
      scope: config.scopes,
      access_type: 'offline',
      prompt: 'consent'
    });

    return `${config.authUrl}?${params.toString()}`;
  };

  const handleCallbackResponse = async (code) => {
    try {
      const response = await axios.post(config.tokenUrl, {
        code,
        client_id: config.clientId,
        client_secret: config.clientSecret,
        redirect_uri: config.redirectUri,
        grant_type: 'authorization_code',
      });

      const { access_token, refresh_token, expires_in } = response.data;

      localStorage.setItem('access_token', access_token);
      localStorage.setItem('refresh_token', refresh_token);
      localStorage.setItem('expires_in', expires_in);

      setIsAuthenticated(true);
    } catch (error) {
      if (!localStorage.getItem('access_token')) {
        setError('Failed to fetch token. Please try again.');
      }
    }
  };

  return {
    isAuthenticated,
    getAuthUrl,
    error,
  };
};

export default useGoogleAuth;
