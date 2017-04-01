const dataString  = window.localStorage.contacts || '[]';

export function findAll() {
  return {
    type: 'CONTACT@FIND_ALL',
    data: JSON.parse(dataString),
  };
}

export function create(data) {
  return {
    type: 'CONTACT@CREATE',
    data,
    id: new Data()
  };
}

export function remove(id) {
  'CONTACT@REMOVE';
}
