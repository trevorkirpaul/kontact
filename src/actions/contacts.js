import axios from 'axios';
import { contact_url } from '../config';

export const fetchContacts = () => {
  return dispatch => {
    dispatch({
      type: 'STATUS:LOADING',
      loading: true,
      error: false,
    });
    axios
      .get(contact_url)
      .then(({ data }) => {
        dispatch({
          type: 'CONTACTS:RECIEVE_ALL',
          data,
        });
        dispatch({
          type: 'STATUS:SUCCESS',
          loading: false,
          error: false,
          message: 'fetched contacts',
        });
      })
      .catch(() => {
        dispatch({
          type: 'STATUS:FAIL',
          loading: false,
          error: true,
        });
      });
  };
};
