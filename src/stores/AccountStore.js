import { observable, makeAutoObservable, action } from "mobx";

const AccountStore = observable({
  // state
  user: {
    id: 0,
    name: "Account 1",
    profile:
      "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGF0dGVybnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    address: "0x8ec8AAC51ABcd6b208c2CFFBc05d2fc92b3CBEfD",
    eth: 0,
  },

  // action
  setUser: action((account) => {
    AccountStore.user = { ...account };
  }),
});

export default AccountStore;
