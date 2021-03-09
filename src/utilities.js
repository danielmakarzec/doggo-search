export const getDataFromLocalStorage = name => {
  return JSON.parse(localStorage[name])
}