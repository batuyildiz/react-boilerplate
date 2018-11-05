import WebServer from './web.server'

describe('Started', () => {
  let webServer = null;

  beforeAll(() => {
    webServer = new WebServer()
  });

  test('Expect: start and callback', async () => {
    let promise = webServer.start();
    await expect(promise).resolves.toBeUndefined();
  });

  test('Expect: stop and callback', async () => {
    let promise = webServer.stop();
    await expect(promise).resolves.toBeUndefined();
  })
});