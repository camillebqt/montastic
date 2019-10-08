import {Checkpoint} from './checkpoint';

export class InMemoryDataService {
  createDb() {
    const checkpoints = [
  new Checkpoint({id: 1, url: 'google.com'}),
  new Checkpoint({id: 2, url: 'daskeyboard.com'})
];
    return { checkpoints };
  }

}
