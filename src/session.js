import { writable } from 'svelte/store';
import { deepClone } from './utilities/deepClone.js';

const newSession = {
  isAuthenticated: false, user: {}, x: 0
};

function sessionStore() {

  const { subscribe, set, update } = writable(deepClone(newSession));
  let logging = false;

  return {
    subscribe,  // $session...
    update: (obj) => {
      update(o => { // session.update({a:1, b:2});
        const merged = Object.assign(o, obj);
        if (logging) console.log('session update', merged);
        return merged;
      });
    },
    set: (key, value) => { // session.set('x', 9)
      update(o => {
      const merged = Object.assign(o, {[key]: value});
      if (logging) console.log('session set', merged);
      return merged;
    });
    },
    reset: () => {  // session.reset()
      set(deepClone(newSession));
    },
    set log(bool) {  // setter: session.log = true;
      logging = bool === true;
    }
  };
};
export const session = sessionStore();
