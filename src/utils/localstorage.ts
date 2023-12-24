export const setLocalStorage = (key: string, value?: string, hours?: number) => {
  value = JSON.stringify(value);
  if (!value) {
    localStorage.removeItem(key);
  } else {
    const expireHours = hours || 24;
    const exp = new Date();
    localStorage[key] = JSON.stringify({
      value,
      expires: exp.getTime() + expireHours * 1000 * 60 * 60
    });
  }
};

export const getLocalStorage = (key: string) => {
  try {
    const item = JSON.parse(localStorage[key]);
    if (!item || item.expires < Date.now()) {
      return "";
    } else {
      return JSON.parse(item.value);
    }
  } catch (e) {
    return localStorage[key];
  }
};
