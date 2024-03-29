export const changeCount = num => {
  return num > 10000 ? (num + "").slice(0, -4) : num;
};

export function addClass(el, className) {
  if (hasClass(el, className)) {
    return;
  }
  let newClass = el.className.split(" ");
  newClass.push(className);
  el.className = newClass.join(" ");
}

export function hasClass(el, className) {
  return new RegExp(`(^|\\s)${className}(\\s|$)`).test(el.className);
}

export function hisSave(list) {
  localStorage.setItem('history',list)
}

export function getHis() {
  return localStorage.getItem('history')
}