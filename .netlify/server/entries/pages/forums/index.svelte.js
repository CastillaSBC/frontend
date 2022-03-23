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
  default: () => Forums
});
var import_index_e286f8ca = require("../../../chunks/index-e286f8ca.js");
const Forums = (0, import_index_e286f8ca.c)(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"h-full m-5 container mx-auto"}"><div class="${"h-full md:grid grid-cols-[300px_1fr] grid-rows-[80px_1fr] gap-2 text-white font-bold"}"><div id="${"sidebar"}" class="${"bg-indigo-500 row-span-2 p-2 space-y-2 overflow-y-auto"}">${`<div class="${"mx-auto text-center animate-pulse items-center"}">Loading...</div>`}</div>
		<div id="${"categories"}" class="${"drop-shadow-md bg-violet-500 border p-2"}"><div class="${"text-center text-xl"}">Categories</div>
			<div class="${"p-2 flex space-x-2 justify-center"}">${`<div class="${"mx-auto text-center animate-pulse items-center"}">Loading...</div>`}</div>
			<div class="${"p-1 bg-white mx-auto hover:cursor-pointer my-2 w-max text-black "}">Create Thread
			</div></div>
		<div id="${"content"}" class="${"shadow-xl border p-2 text-black my-8"}">${`<div class="${"text-center text-3xl"}">Select a thread!</div>`}</div></div></div>`;
});
module.exports = __toCommonJS(stdin_exports);
