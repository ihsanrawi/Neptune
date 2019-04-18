if( typeof(Storage) === 'undefined' ) {
  // Sorry! No Web Storage support...
}

export default {

  /**
   * Check if key exists in local storage
   * @param  string key
   * @return boolean
   */
  localStorageHas: (key) => {
    var item = window.localStorage.getItem(key);

    return ( item !== null );
  },

  /**
   * Retrive an object from local storage.
   * @param  string key
   * @return mixed
   */
  localStorageGet: (key) => {
    var item = window.localStorage.getItem(key);

    if ( ! item ) return;

    if ( item[0] === '{' || item[0] === '[' ) return JSON.parse(item);

    return item;
  },

  /**
   * Save some value to local storage.
   * @param string key    
   * @param string value
   */
  localStorageSave: (key, value) => {
    let error;
    if ( value === undefined ) return error("Can't store undefinded value");

    if ( typeof(value) === 'object' || typeof(value) === 'array' ) {
      value = JSON.stringify(value);
    }

    if ( typeof(value) !== 'string' ) return error("Can't store unrecognized format value");

    window.localStorage.setItem(key, value);
  },

  /**
   * Remove element from local storage.
   * @param string key 
   */
  localStorageRemove: (key) => {
    window.localStorage.removeItem(key);
  },

  /**
   * Clear all element from local storage.
   * 
   */
  localStorageClear: () => {
    window.localStorage.clear();
  },
}