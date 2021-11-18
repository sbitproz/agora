import { map } from 'rxjs';

interface Response<T> {
  data: T;
}

export const getData = <T extends unknown>() => map<Response<T>, T>((response) => response?.data);
