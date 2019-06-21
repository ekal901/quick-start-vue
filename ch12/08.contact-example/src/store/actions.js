// src/store/actions.js
import Constant from '../Constant';
import axios from 'axios';
import CONF from '../Config';

export default {
  [Constant.FETCH_CONTACTS]: (store, payload) => {
    var pageno;
    if (typeof payload === "undefined" || typeof payload.pageno === "undefined") {
      pageno = 1;
    } else {
      pageno = payload.pageno;
    }
    var pagesize = store.state.contactlist.pagesize;
    axios.get(CONF.FETCH, {
      params: { pageno: pageno, pagesize: pagesize }
    }).then((response) => {
      store.commit(Constant.FETCH_CONTACTS, { contactlist: response.data });
    })
  },
  [Constant.ADD_CONTACT]: (store) => {
    axios.post(CONF.ADD, store.state.contact)
      .then((response) => {
        if (response.data.status == "success") {
          store.dispatch(Constant.FETCH_CONTACTS, { pageno: 1 });
        } else {
          console.log("add contact failed -> " + response.data);
        }
      })
  },
  [Constant.UPDATE_CONTACT]: (store) => {
    let currentPageNo = store.state.contactlist.pageno;
    let contact = store.state.contact;
    axios.put(CONF.UPDATE.replace("${no}", contact.no), contact)
      .then((response) => {
        if (response.data.status == "success") {
          store.dispatch(Constant.FETCH_CONTACTS, { pageno: currentPageNo });
        } else {
          console.log("update contact failed -> " + response.data);
        }
      })
  },
  [Constant.UPDATE_PHOTO]: (store, payload) => {
    let currentPageNo = store.state.contactlist.pageno;
    let data = new FormData();
    data.append('photo', payload.file);
    axios.post(CONF.UPDATE_PHOTO.replace("${no}", payload.no), data)
      .then(() => {
        store.dispatch(Constant.FETCH_CONTACTS, { pageno: currentPageNo });
      })
  },

  [Constant.DELETE_CONTACT]: (store, payload) => {
    let currentPageNo = store.state.contactlist.pageno;
    axios.delete(CONF.DELETE.replace("${no}", payload.no))
      .then(() => {
        store.dispatch(Constant.FETCH_CONTACTS, { pageno: currentPageNo })
      })
  },
  [Constant.FETCH_CONTACT_ONE]: (store, payload) => {
    axios.get(CONF.FETCH_ONE.replace("${no}", payload.no))
      .then((response) => {
        store.commit(Constant.FETCH_CONTACT_ONE, { contact: response.data });
      })
  },
  [Constant.INITIALIZE_CONTACT_ONE]: (store) => {
    store.commit(Constant.INITIALIZE_CONTACT_ONE);
  }
}