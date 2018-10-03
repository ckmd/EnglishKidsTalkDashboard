import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './user';

export class InMemoryDataService implements InMemoryDbService {
  
  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Magmamama' },
      { id: 21, name: 'Tornado' }
    ];
    const users = [
      { id: 1, name: 'user 1' },
      { id: 2, name: 'user 2' },
      { id: 3, name: 'user 3' },
      { id: 4, name: 'user 4' },
      { id: 5, name: 'user 5' }
    ];
    const items = [
      { id: 1, level: 'easy', category: 'vocabulary', topic: 'animal', title: 'sebutkan nama ikan', answer: 'ikan banyak', xp: 10, image: 'ikan.jpg', sound: 'ikan.mp3' },
      { id: 2, level: 'medium', category: 'vocabulary', topic: 'furniture', title: 'sebutkan nama lemari', answer: 'lemari banyak', xp: 20, image: 'lemari.jpg', sound: 'lemari.mp3' }
    ];
    const   questionDifficulties = [
    { id: 1, name: "easy" },
    { id: 2, name: "medium" },
    { id: 3, name: "hard" }
  ];
    return {heroes, users, items, questionDifficulties};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 11;
  }
}