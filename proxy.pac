var blockedDomains = [
  '.slack.com',
  'github.com',
  '.github.com',
  'instagram.com',
  '.instagram.com',
  'proxy6.net',
  '.proxy6.net',
  '.zoom.us',
  'zoom.us',
];

function FindProxyForURL(url, host) {
  if (isPlainHostName(host) || blockedDomains.some((domain) => dnsDomainIs(host, domain))) {
    return 'PROXY 45.133.227.84:8000; DIRECT';
  }

  return 'DIRECT';
}
