export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname !== '/weather') {
      return new Response('Weather proxy running');
    }

    const target = 'https://api.weathercn.com';
    const response = await fetch(target, {
      method: 'GET',
      headers: {
        'User-Agent': 'weather-ios-web-test'
      }
    });

    return new Response(await response.text(), {
      status: response.status,
      headers: {
        'Content-Type': response.headers.get('Content-Type') || 'text/plain',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
};
