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
  default: () => _error,
  load: () => load
});
var import_index_e286f8ca = require("../../chunks/index-e286f8ca.js");
function load({ error, status }) {
  return {
    props: {
      title: `${status}: ${error.message}`,
      status
    }
  };
}
const _error = (0, import_index_e286f8ca.c)(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { status } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  return `${status == 404 ? `<div class="${"container py-12 text-4xl mx-auto text-violet-500 font-bold flex h-full items-center justify-center"}">Ay Brub! Not found! \u{1F605}
	</div>
	<div class="${"container m-2 text-center tex-2xl mx-auto text-blue-500 font-bold"}">${(0, import_index_e286f8ca.e)(title)}</div>` : `<div class="${"container m-2 text-center tex-2xl mx-auto text-blue-500 font-bold"}">${(0, import_index_e286f8ca.e)(title)} code is ${(0, import_index_e286f8ca.e)(status)}</div>`}`;
});
module.exports = __toCommonJS(stdin_exports);
