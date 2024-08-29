import OpenAI from 'openai';
import { secretKey } from './constants';

const client = new OpenAI({
  apiKey: process.env[secretKey], 
  dangerouslyAllowAPIKeyInBrowser: true,
});

export default client;