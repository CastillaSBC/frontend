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
  default: () => _layout
});
var import_index_e286f8ca = require("../../chunks/index-e286f8ca.js");
var import_userStore_ea18dfce = require("../../chunks/userStore-ea18dfce.js");
var import_frontend_c9dcfcec = require("../../chunks/frontend-c9dcfcec.js");
const serviceName = "Whatever :)";
const getStores = () => {
  const stores = (0, import_index_e286f8ca.g)("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session,
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const _layout = (0, import_index_e286f8ca.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $user, $$unsubscribe_user;
  $$unsubscribe_page = (0, import_index_e286f8ca.a)(page, (value) => $page = value);
  $$unsubscribe_user = (0, import_index_e286f8ca.a)(import_userStore_ea18dfce.u, (value) => $user = value);
  let restrictedPaths = ["auth", "home", "trade", "admin"];
  function restrictAuthRoutes() {
    if (restrictedPaths.some((v) => $page.url.pathname.includes(v))) {
      return true;
    }
    return false;
  }
  {
    restrictAuthRoutes();
  }
  $$unsubscribe_page();
  $$unsubscribe_user();
  return `<header class="${"sticky top-0 z-50"}"><div class="${"p-4 bg-[" + (0, import_index_e286f8ca.e)(import_frontend_c9dcfcec.c.background) + "] md:grid grid-cols-3 sticky"}"><div class="${"text-white font-bold text-3xl text-center p-1"}">${(0, import_index_e286f8ca.e)(serviceName)}</div>
		<div class="${"mx-auto text-center gap-2 grid grid-flow-col text-white font-bold items-center"}">${!$user.username ? `<a href="${"/"}"><div class="${"hover:underline mx-auto hover:border-b-indigo-500 cursor-pointer hover:border-b-4 w-max transition-all duration-200 ease-linear"}">Home
					</div></a>` : `<a href="${"/home"}"><div class="${"hover:underline mx-auto hover:border-b-indigo-500 cursor-pointer hover:border-b-4 w-max transition-all duration-200 ease-linear"}">Home
					</div></a>`}
			<a href="${"/forums"}"><div class="${"hover:underline mx-auto hover:border-b-indigo-500 cursor-pointer hover:border-b-4 w-max transition-all duration-200 ease-linear"}">Forums
				</div></a>
			<a href="${"/shop"}"><div class="${"hover:underline mx-auto hover:border-b-indigo-500 cursor-pointer hover:border-b-4 w-max transition-all duration-200 ease-linear"}">Shop
				</div></a>
			<div class="${"hover:underline mx-auto hover:border-b-indigo-500 cursor-pointer hover:border-b-4 w-max transition-all duration-200 ease-linear"}">Users
			</div>
			<div class="${"hover:underline mx-auto hover:border-b-indigo-500 cursor-pointer hover:border-b-4 w-max transition-all duration-200 ease-linear"}">Drops
			</div></div>

		<div class="${"text-white md:grid grid-flow-col my-2 font-bold justify-end"}">${!$user.username ? `<a href="${"/auth/login"}"><div class="${"hover:underline mx-auto text-center p-1 cursor-pointer w-max transition-all duration-200 ease-linear"}">Log In
					</div></a>
				<a href="${"/auth/register"}"><div class="${"hover:underline mx-auto text-center p-1 cursor-pointer w-max transition-all duration-200 ease-linear"}">Register
					</div></a>` : `<div class="${"hover:underline mx-auto text-center p-1 cursor-pointer w-max transition-all duration-200 ease-linear"}">${(0, import_index_e286f8ca.e)($user.username)}</div>
				<div class="${"hover:underline mx-auto text-center p-1 cursor-pointer w-max transition-all duration-200 ease-linear"}">Log Out
				</div>`}</div></div></header>
${`${`<div class="${"text-center mx-auto text-indigo-500 animate-bounce m-12 text-4xl font-bold"}">Loading</div>`}`}`;
});
module.exports = __toCommonJS(stdin_exports);
