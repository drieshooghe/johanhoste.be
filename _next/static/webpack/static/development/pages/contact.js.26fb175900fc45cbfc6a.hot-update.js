webpackHotUpdate("static/development/pages/contact.js",{

/***/ "./pages/contact.tsx":
/*!***************************!*\
  !*** ./pages/contact.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContactPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _content_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../content/content */ "./content/content.ts");
/* harmony import */ var _src_components_meta_tags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/meta/tags */ "./src/components/meta/tags.tsx");
/* harmony import */ var _src_components_header_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/header/header */ "./src/components/header/header.tsx");
/* harmony import */ var _src_components_footer_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/footer/footer */ "./src/components/footer/footer.tsx");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! html-react-parser */ "./node_modules/html-react-parser/index.js");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(html_react_parser__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/dries/Dev/personal/johanhoste.be/pages/contact.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var contactBody = _content_content__WEBPACK_IMPORTED_MODULE_1__["Content"].pages.services.body.map(function (block, index) {
  return __jsx("div", {
    key: index,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, block.t), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, html_react_parser__WEBPACK_IMPORTED_MODULE_5___default()(block.p)));
});
function ContactPage() {
  return __jsx("div", {
    className: "font-sans bg-white w-screen max-w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx(_src_components_meta_tags__WEBPACK_IMPORTED_MODULE_2__["HeaderTags"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx("div", {
    className: "flex flex-col min-h-screen",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx(_src_components_header_header__WEBPACK_IMPORTED_MODULE_3__["Header"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), __jsx("div", {
    className: "container scroll-content py-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, _content_content__WEBPACK_IMPORTED_MODULE_1__["Content"].pages.contact.title), __jsx("div", {
    className: "flex flex-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("div", {
    className: "w-full lg:w-1/2  mb-8 lg:mb-16 order-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("div", {
    className: "font-black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, _content_content__WEBPACK_IMPORTED_MODULE_1__["Content"].general.contact.name)), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: _content_content__WEBPACK_IMPORTED_MODULE_1__["Content"].general.contact.geoLink,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("a", {
    target: "_blank",
    rel: "noopener",
    className: "link link--inline mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("div", {
    className: "link__label mb-2 text-black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, _content_content__WEBPACK_IMPORTED_MODULE_1__["Content"].general.contact.street, "\xA0", _content_content__WEBPACK_IMPORTED_MODULE_1__["Content"].general.contact.number), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx("div", {
    className: "link__label text-black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, _content_content__WEBPACK_IMPORTED_MODULE_1__["Content"].general.contact.postalCode, "\xA0", _content_content__WEBPACK_IMPORTED_MODULE_1__["Content"].general.contact.town)))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "tel:".concat(_content_content__WEBPACK_IMPORTED_MODULE_1__["Content"].general.contact.geoLink),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("a", {
    target: "_blank",
    rel: "noopener",
    className: "link link--inline mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("div", {
    className: "link__label mb-2 text-black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, _content_content__WEBPACK_IMPORTED_MODULE_1__["Content"].general.contact.street, "\xA0", _content_content__WEBPACK_IMPORTED_MODULE_1__["Content"].general.contact.phone), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  })))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "mailto:".concat(_content_content__WEBPACK_IMPORTED_MODULE_1__["Content"].general.contact.email),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("a", {
    target: "_blank",
    rel: "noopener",
    className: "link link--inline mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("div", {
    className: "link__label mb-2 text-black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, _content_content__WEBPACK_IMPORTED_MODULE_1__["Content"].general.contact.street, "\xA0", _content_content__WEBPACK_IMPORTED_MODULE_1__["Content"].general.contact.phone), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  })))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "BTW\xA0", _content_content__WEBPACK_IMPORTED_MODULE_1__["Content"].general.contact.vatNumber)), __jsx("div", {
    className: "w-full lg:w-1/2 mb-8 lg:mb-16 order-3 lg:order-2 flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("iframe", {
    className: "w-full flex-1 border-none",
    frameBorder: "0",
    src: _content_content__WEBPACK_IMPORTED_MODULE_1__["Content"].pages.contact.embeddedMapLink,
    allowFullScreen: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  })), __jsx("div", {
    className: "w-full order-2 lg:order-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("iframe", {
    src: _content_content__WEBPACK_IMPORTED_MODULE_1__["Content"].pages.contact.embeddedFormLink,
    height: "947",
    frameBorder: "0",
    className: "w-full m-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Loading..."))))), __jsx(_src_components_footer_footer__WEBPACK_IMPORTED_MODULE_4__["Footer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }));
}

/***/ })

})
//# sourceMappingURL=contact.js.26fb175900fc45cbfc6a.hot-update.js.map