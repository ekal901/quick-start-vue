// src/store/actions.js
import Constant from '../Constant';
import axios from 'axios';
import CONF from '../Config';

export default {
  [Constant.ADD_CONTACT_FORM]: (store) => {
    // addContactForm (Constant에서 ADD_CONTACT_FORM의 값) 전달하여 commit
    store.commit(Constant.ADD_CONTACT_FORM);
  },
  [Constant.ADD_CONTACT]: (store) => {
    axios.post(CONF.ADD, store.state.contact)
      .then((response) => {
        if (response.data.status == "success") {
          store.dispatch(Constant.CANCEL_FORM);
          store.dispatch(Constant.FETCH_CONTACTS, { pageno: 1 });
        } else {
          console.log("add contact failed -> " + response.data);
        }
      })
  },
  [Constant.EDIT_CONTACT_FORM]: (store, payload) => {
    // CONF의 FETCH_ONE URL의 ${no} 값을 payload.no로 교체
    axios.get(CONF.FETCH_ONE.replace("${no}", payload.no))
      .then((response) => {
        // 편집하기 위한 단일 연락처 데이터 받아 온 후 
        // commit 사용해서, mutations에서 불러온 값 전달하여 state에 반영
        store.commit(Constant.EDIT_CONTACT_FORM, { contact: response.data });
      })
  },
  [Constant.UPDATE_CONTACT]: (store) => {
    let currentPageNo = store.state.contactlist.pageno;
    let contact = store.state.contact;
    axios.put(CONF.UPDATE.replace("${no}", contact.no), contact)
      .then((response) => {
        if (response.data.status == "success") {
          store.dispatch(Constant.CANCEL_FORM);
          store.dispatch(Constant.FETCH_CONTACTS, { pageno: currentPageNo });
        } else {
          console.log("update contact failed -> " + response.data);
        }
      })
  },
  [Constant.EDIT_PHOTO_FORM]: (store, payload) => {
    axios.get(CONF.FETCH_ONE.replace("${no}", payload.no))
      .then((response) => {
        store.commit(Constant.EDIT_PHOTO_FORM, { contact: response.data });
      })
  },
  [Constant.UPDATE_PHOTO]: (store, payload) => {
    let currentPageNo = store.state.contactlist.pageno;
    let data = new FormData();
    data.append('photo', payload.file);
    axios.post(CONF.UPDATE_PHOTO.replace("${no}", payload.no), data)
      .then(() => {
        store.dispatch(Constant.CANCEL_FORM);
        store.dispatch(Constant.FETCH_CONTACTS, { pageno: currentPageNo });
      })
  },
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
      console.log(response.data);
      store.commit(Constant.FETCH_CONTACTS, { contactlist: response.data });
    })
  },
  [Constant.CANCEL_FORM]: (store) => {
    store.commit(Constant.CANCEL_FORM);
  },
  [Constant.DELETE_CONTACT]: (store, payload) => {
    let currentPageNo = store.state.contactlist.pageno;
    axios.delete(CONF.DELETE.replace("${no}", payload.no))
      .then(() => {
        store.dispatch(Constant.FETCH_CONTACTS, { pageno: currentPageNo })
      })
  }
}