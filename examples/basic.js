webpackJsonp([3],{

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rmc_tabs_assets_index_less__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rmc_tabs_assets_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rmc_tabs_assets_index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src__ = __webpack_require__(45);





/* tslint:disable:no-console */




var en = location.search.indexOf('en') !== -1;

var BasicDemo = function (_React$Component) {
    __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(BasicDemo, _React$Component);

    function BasicDemo(props) {
        __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, BasicDemo);

        var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (BasicDemo.__proto__ || Object.getPrototypeOf(BasicDemo)).call(this, props));

        _this.state = {
            page: 0
        };
        return _this;
    }

    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(BasicDemo, [{
        key: 'renderContent',
        value: function renderContent() {
            var pStyle = { margin: 0, padding: 10 };
            return [__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'div',
                { key: 't1', style: { background: '#ADFFD7' } },
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    'p',
                    { style: pStyle },
                    'tab 1 1'
                ),
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    'p',
                    { style: pStyle },
                    'tab 1 2'
                ),
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    'p',
                    { style: pStyle },
                    'tab 1 3'
                ),
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    'p',
                    { style: pStyle },
                    'tab 1 4'
                )
            ), __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'div',
                { key: 't2', style: { background: '#ADFFD7' } },
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    'p',
                    { style: pStyle },
                    'tab 2 1'
                ),
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    'p',
                    { style: pStyle },
                    'tab 2 2'
                ),
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    'p',
                    { style: pStyle },
                    'tab 2 3'
                ),
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    'p',
                    { style: pStyle },
                    'tab 2 4'
                ),
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    'p',
                    { style: pStyle },
                    'tab 2 5'
                )
            ), __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'div',
                { key: 't3', style: { background: '#ADFFD7' } },
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    'p',
                    { style: pStyle },
                    'tab 3 1'
                ),
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    'p',
                    { style: pStyle },
                    'tab 3 2'
                )
            ), __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'div',
                { key: 't4', style: { background: '#ADFFD7' } },
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    'p',
                    { style: pStyle },
                    'tab 4 1'
                )
            )];
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var baseStyle = {
                display: 'flex', flexDirection: 'column', marginTop: 10, marginBottom: 10, fontSize: 14
            };
            return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    'div',
                    { style: baseStyle },
                    __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                        'h2',
                        null,
                        'normal'
                    ),
                    __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                        'div',
                        { style: { background: '#eee', boxShadow: '0 0 0 5px #eee', margin: 10, padding: 10 }, onClick: function onClick() {
                                return _this2.setState({ page: 2 });
                            } },
                        'change to 3'
                    ),
                    __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_8__src__["a" /* Tabs */],
                        { tabs: [{ key: 't1', title: 't1' }, { key: 't2', title: 't2' }, { key: 't3', title: 't3' }], page: this.state.page, onChangeTab: function onChangeTab(index) {
                                return _this2.setState({ page: index });
                            }, renderTabBar: function renderTabBar(props) {
                                return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__src__["b" /* DefaultTabBar */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props, { renderTab: function renderTab(tab) {
                                        if (tab.key === 't2') {
                                            return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                                                'div',
                                                { style: { position: 'relative' } },
                                                tab.title,
                                                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('div', { style: {
                                                        position: 'absolute',
                                                        right: -3,
                                                        top: -1,
                                                        width: 6, height: 6,
                                                        background: 'red',
                                                        borderTopLeftRadius: 6,
                                                        borderBottomLeftRadius: 6,
                                                        borderBottomRightRadius: 6,
                                                        borderTopRightRadius: 6
                                                    } })
                                            );
                                        }
                                        return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                                            'div',
                                            null,
                                            tab.title
                                        );
                                    } }));
                            } },
                        this.renderContent()
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    'div',
                    { style: baseStyle },
                    __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                        'h2',
                        null,
                        'bottom'
                    ),
                    __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_8__src__["a" /* Tabs */],
                        { tabs: [{ key: 't1', title: 't1' }, { key: 't2', title: 't2' }, { key: 't3', title: 't3' }, { key: 't4', title: 't4' }], initalPage: 't2', tabBarPosition: 'bottom' },
                        this.renderContent()
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    'div',
                    { style: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, baseStyle, { height: 240 }) },
                    __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                        'h2',
                        null,
                        'fixed height'
                    ),
                    __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_8__src__["a" /* Tabs */],
                        { tabs: [{ title: 't1' }, { title: 't2' }, { title: 't3' }, { title: 't4' }, { title: 't5' }], initalPage: 1, prerenderingSiblingsNumber: 1 },
                        this.renderContent()
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    'div',
                    { style: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, baseStyle, { height: 240 }) },
                    __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                        'h2',
                        null,
                        'no animate'
                    ),
                    __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_8__src__["a" /* Tabs */],
                        { tabs: [{ title: 't1' }, { title: 't2' }, { title: 't3' }, { title: 't4' }, { title: 't5' }], animated: false },
                        this.renderContent()
                    )
                )
            );
        }
    }]);

    return BasicDemo;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

__WEBPACK_IMPORTED_MODULE_7_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(BasicDemo, null), document.getElementById('__react-content'));
var ip = document.body.children[3].innerText.split('/')[2].split(':')[0];
var elm = document.createElement('script');
elm.src = 'http://' + ip + ':1337/vorlon.js';
document.body.appendChild(elm);

/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(135);


/***/ })

},[290]);
//# sourceMappingURL=basic.js.map