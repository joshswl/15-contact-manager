import reducer from '../app/reducer';

module('reducer', () => {
  test('it exists', (assert) => {
    assert.ok(reducer, 'reducer exists');
  });

  test('it finds all contacts with an empty list', (assert) => {
    const oldState = { contacts: [] };
    const action = { type: 'CONTACT@FIND_ALL', data: [{ firstName: 'John', lastName: 'Cena' }] };
    const expectedState = { contacts: [{ firstName: 'John', lastName: 'Cena' }] };

    assert.deepEqual(reducer(oldState, action), expectedState);
  });

  test('it finds all contacts with an empty list', (assert) => {
    const oldState = { contacts: [{ firstName: 'Angelina', lastName: 'Jolie' }] };
    const action = { type: 'CONTACT@FIND_ALL', data: [{ firstName: 'John', lastName: 'Cena' }] };
    const expectedState = { contacts: [{ firstName: 'John', lastName: 'Cena' }] };

    assert.deepEqual(reducer(oldState, action), expectedState);
  });

  test('it finds all contacts with an empty list', (assert) => {
    const oldState = { contacts: [{ firstName: 'Angelina', lastName: 'Jolie' }] };
    const action = { type: 'CONTACT@FIND_ALL', data: [{ firstName: 'Nic', lastName: 'Cage' }] };
    const expectedState = { contacts: [{ firstName: 'Nic', lastName: 'Cage' }] };

    assert.deepEqual(reducer(oldState, action), expectedState);
  });

  test('it creates a contact from an empty list', (assert) => {
    const oldState = { contacts: [] };
    const action = { type: 'CONTACT@CREATE', data: { firstName: 'Johnny', lastName: 'Depp' } };
    const expectedState = { contacts: [{ firstName: 'Johnny', lastName: 'Depp' }] };

    assert.deepEqual(reducer(oldState, action), expectedState);
  });

  test('it creates a contact from a non-empty list', (assert) => {
    const oldState = { contacts: [{ firstName: 'Angelina', lastName: 'Jolie' }] };
    const action = { type: 'CONTACT@CREATE', data: { firstName: 'Johnny', lastName: 'Depp' } };
    const expectedState = { contacts: [{ firstName: 'Angelina', lastName: 'Jolie' }, { firstName: 'Johnny', lastName: 'Depp' }] };

    assert.deepEqual(reducer(oldState, action), expectedState);
  });
});
