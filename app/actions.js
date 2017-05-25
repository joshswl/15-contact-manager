// const dataString  = window.localStorage.contacts || '[]';

export function findAll(data) {
  return {
    type: 'CONTACT@FIND_ALL',
    data,
  };
}

export function create(data) {
  return {
    type: 'CONTACT@CREATE',
    data: { ...data, id: new Date() }
  };
}

export function remove(id) {
  return { type: 'CONTACT@REMOVE', id };
}
