// Key for local storage
export enum STORAGE_KEY {
  Inventory = "inventory",
  Ruby = "ruby",
  SchilderijAugurken = "schilderij-augurken", // New storage key
}

const update = (key) => {
  // Dispatch a custom event to notify about the storage change
  const event = new CustomEvent("storageChange", { detail: { key } });
  window.dispatchEvent(event);
};

// Function to get the array from local storage
export const getArrayFromStorage = (key: STORAGE_KEY): any[] => {
  const storedArray = localStorage.getItem(key);
  return storedArray ? JSON.parse(storedArray) : [];
};

// Function to save the array to local storage
export const saveArrayToStorage = (key: STORAGE_KEY, array: any[]): void => {
  localStorage.setItem(key, JSON.stringify(array));
  update(key);
};

// Function to add an item to the array in local storage
export const addItemToStorage = (key: STORAGE_KEY, item: string): void => {
  const array = getArrayFromStorage(key);
  if (!array.includes(item)) {
    array.push(item);
  }
  saveArrayToStorage(key, array);
  update(key);
};
//
// Function to remove an item from the array
export const removeItemFromStorage = (key: STORAGE_KEY, item: string): void => {
  let array = getArrayFromStorage(key);
  array = array.filter((arrayItem) => arrayItem !== item);
  saveArrayToStorage(key, array);
  update(key);
};

// Function to get all items from the array
export const getAllItemsFromStorage = (key: STORAGE_KEY): any[] => {
  return getArrayFromStorage(key);
};

// New function to add augurken to the schilderij storage
export const addAugurkToSchilderij = (augurk: string): void => {
  addItemToStorage(STORAGE_KEY.SchilderijAugurken, augurk);
};

// New function to get augurken from the schilderij storage
export const getAugurkenFromSchilderij = (): any[] => {
  return getArrayFromStorage(STORAGE_KEY.SchilderijAugurken);
};

export const getRubys = () => {
  return localStorage.getItem(STORAGE_KEY.Ruby) * 1;
};

export const resetRubyes = () => {
  localStorage.setItem(STORAGE_KEY.Ruby, 0 + "");
  update(STORAGE_KEY.Ruby);
};
export const resetAugurken = () => {
  localStorage.setItem(STORAGE_KEY.SchilderijAugurken, []);
  update(STORAGE_KEY.Ruby);
};

export const addRuby = () => {
  let n = localStorage.getItem(STORAGE_KEY.Ruby) * 1 + 1;
  localStorage.setItem(STORAGE_KEY.Ruby, n + "");
  update(STORAGE_KEY.Ruby);
};

export enum Levels {
  DeskLevel = "desk-level",
  DeurLevel = "deur-level",
  FinishLevel = "finish-level",
}

export enum DeskLevelPaths {
  BureauLevel = "bureau-level",
  RaamLevel = "raam-level",
  TafelLevel = "tafel-level",
  KastLevel = "kast-level",
}

export enum BureauLevelPaths {
  KaartLevel = "kaart-level",
  SchilderijLevel = "schilderij-level",
  WikiLevel = "wiki-level",
}

export enum DeurLevelPaths {
  DozenLevel = "dozen-level",
  TapijtLevel = "tapijt-level",
}
