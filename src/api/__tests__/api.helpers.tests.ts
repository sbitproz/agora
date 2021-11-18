import { getData } from 'api/api.helpers';
import { of } from 'rxjs';

describe('APIHelper: getData', () => {
  it('should pluck data from object', (done) => {
    const dataMock = { data: 'mydata' };
    of(dataMock)
      .pipe(getData())
      .subscribe((data) => {
        expect(data).toBe(dataMock.data);
        done();
      });
  });
});
