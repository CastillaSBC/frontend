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
  default: () => Register
});
var import_index_e286f8ca = require("../../../chunks/index-e286f8ca.js");
var import_userStore_ea18dfce = require("../../../chunks/userStore-ea18dfce.js");
const Register = (0, import_index_e286f8ca.c)(($$result, $$props, $$bindings, slots) => {
  let username = "";
  let password = "";
  return `<div class="${"text-center p-2 border container mx-auto m-12 lg:w-2/4 droap-shadow-md rounded-xl shadow-lg"}"><div class="${"text-lg"}">Username</div>
		<input type="${"text"}" class="${"px-1 py-0.5 rounded border outline-none"}" placeholder="${""}"${(0, import_index_e286f8ca.d)("value", username, 0)}>
		<div class="${"text-lg"}">Password</div>
		<input type="${"password"}" class="${"px-1 py-0.5 rounded border outline-none"}"${(0, import_index_e286f8ca.d)("value", password, 0)}>
		<div class="${"bg-violet-600 w-max mx-auto p-2 my-2 rounded text-white hover:bg-purple-500 cursor-pointer select-none"}">Register Account
		</div>
		${``}</div>`;
});
module.exports = __toCommonJS(stdin_exports);
