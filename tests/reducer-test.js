import reducer from '../app/reducer';

module('reducer', () => {
  test('it exists', (assert) => {
    assert.ok(reducer, 'reducer exists');
  });

  test('add contact', () => {
    const oldStateOne = { contacts: [{ firstName: 'Angelina', lastName: 'Jolie' }] };
    const oldStateTwo = { contacts: [] };
    const actionOne = { type: 'CONTACT@FIND_ALL', data: [{ firstName: 'John', lastName: 'Cena' }] };
    const actionTwo = { type: 'CONTACT@FIND_ALL', data: [{ firstName: 'Nic', lastName: 'Cage' }] };
    const actionThree = { type: 'CONTACT@CREATE', data: { firstName: 'Johnny', lastName: 'Depp' } };
  })
});
