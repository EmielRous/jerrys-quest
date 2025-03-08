// Key for local storage
export enum STORAGE_KEY {
  Inventory = "inventory",
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

export const addItemToStorage = (key: STORAGE_KEY, item: string): void => {
  const array = getArrayFromStorage(key);
  if (!array.includes(item)) {
    array.push(item);
  }
  saveArrayToStorage(key, array);
  update(key);
};

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

export enum Levels {
  DeskLevel = "desk-level",
  DeurLevel = "deur-level",
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
