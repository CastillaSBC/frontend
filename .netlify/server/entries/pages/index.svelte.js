var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Routes
});
var import_index_e286f8ca = require("../../chunks/index-e286f8ca.js");
var import_userStore_ea18dfce = require("../../chunks/userStore-ea18dfce.js");
var import_frontend_c9dcfcec = require("../../chunks/frontend-c9dcfcec.js");
const Routes = (0, import_index_e286f8ca.c)(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  $$unsubscribe_user = (0, import_index_e286f8ca.a)(import_userStore_ea18dfce.u, (value) => $user = value);
  function check() {
    if (!$user.username)
      return false;
    return true;
  }
  {
    check();
  }
  $$unsubscribe_user();
  return `<main class="${""}"><div class="${"flex items-center h-screen "}"><div class="${"container mx-auto"}"><div class="${"grid grid-cols-2"}"><div class="${"bg-[" + (0, import_index_e286f8ca.e)(import_frontend_c9dcfcec.c.background) + "]"}"><div class="${"text-xl text-[" + (0, import_index_e286f8ca.e)(import_frontend_c9dcfcec.c.primary) + "]"}">A</div></div></div></div></div></main>`;
});
module.exports = __toCommonJS(stdin_exports);
