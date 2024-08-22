import NodeCache from 'node-cache';
import { CACHE_TTL } from './config';

const cache = new NodeCache({ stdTTL: CACHE_TTL });

export default cache;
