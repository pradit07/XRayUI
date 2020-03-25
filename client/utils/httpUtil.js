import axios from 'axios';

export function save(data, userId) {
    return axios
        .post(`/log/${userId}`, data, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
}

export function getThreats(userId) {
  return axios
    .get(`/log/${userId}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
}
