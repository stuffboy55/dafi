const http = require('http');

const VPS_HOST = 'dafi.afrihall.com';
const VPS_PORT = 80;
const UUID = 'ee054fe1-9e46-4ef0-8e13-f08f031f7c20';
const VPS_IP = '146.190.19.121';

const PORT = process.env.PORT || 8080;

const XHTTP_PATH = '/';
const XHTTP_MODE = 'auto';
const XHTTP_PADDING = '100-1000';

const HOST_HEADER = 'main-bvxea6i-5iwmtxkrgcpb4.fr-3.platformsh.site';
const SNI = HOST_HEADER;

const ALPN = ['h2', 'http/1.1'];
const FP = 'chrome';

const DOMAIN =
  process.env.DOMAIN ||
  'main-bvxea6i-5iwmtxkrgcpb4.fr-3.platformsh.site';
