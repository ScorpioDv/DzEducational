import fs from 'fs';
import { google } from 'googleapis';
import path from 'path';

const CREDENTIALS_PATH = path.join(process.cwd(), './credentials.json');

let credentials;

// Load the OAuth 2.0 client credentials
export const getCredentials = async () => {
  if (!credentials) {
    credentials = JSON.parse(fs.readFileSync(CREDENTIALS_PATH, 'utf8'));
  }
  return credentials;
};

// Generate the OAuth 2.0 client
export const createAuthClient = async () => {
  const creds = await getCredentials();
  return new google.auth.OAuth2(
    creds.installed.client_id,
    creds.installed.client_secret,
    creds.installed.redirect_uris[0]
  );
};

// Generate the authorization URL
export const generateAuthUrl = (creds) => {
  return creds.generateAuthUrl({
    access_type: 'offline',
    scope: ['https://www.googleapis.com/auth/drive'],
  });
};

// Get the access token
export const getAccessToken = async (code) => {
  const auth = await createAuthClient();
  const { tokens } = await auth.getToken(code);
  return tokens.access_token;
};

// Create the Drive API client
export const createDriveClient = (accessToken) => {
    const auth = new google.auth.OAuth2();
    auth.setCredentials({ access_token: accessToken });
    return google.drive({ version: 'v3', auth });
  };
  