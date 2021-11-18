import { onRequest, onResponseError, onResponseSuccess } from 'api/apiInterceptor';

describe('APIInterceptor: onRequest', () => {
  const config = { ssl: true };
  it('should return the configuration', () => {
    expect(onRequest(config)).toBe(config);
  });
});

describe('APIInterceptor: onResponseSuccess', () => {
  const success = { data: [] };
  it('should pass the data', () => {
    expect(onResponseSuccess(success)).toBe(success);
  });
});

describe('APIInterceptor: onResponseError', () => {
  it('should pass the error message', (done) => {
    const error = 'error';
    onResponseError('error').catch((errorMessage) => {
      expect(errorMessage).toBe(error);
      done();
    });
  });
});
