Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var sonner = require('sonner');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var CodeXmlIcon = function () { return (React__default["default"].createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    React__default["default"].createElement("path", { d: "M15 13.3333L18.3333 10L15 6.66668M5 6.66668L1.66666 10L5 13.3333M12.0833 3.33334L7.91666 16.6667", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }))); };
var DownloadIcon = function () { return (React__default["default"].createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    React__default["default"].createElement("path", { d: "M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5M5.83333 8.33333L10 12.5M10 12.5L14.1667 8.33333M10 12.5V2.5", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }))); };
var MenuItem = function (_a) {
    var icon = _a.icon, text = _a.text, onClick = _a.onClick, isFirst = _a.isFirst;
    return (React__default["default"].createElement("button", { className: "flex items-center w-full px-4 py-3 text-left hover:bg-gray-100 ".concat(isFirst ? 'rounded-t-md' : ''), onClick: onClick },
        React__default["default"].createElement("span", { className: "text-gray-400 mr-3 flex items-center justify-center" }, icon),
        React__default["default"].createElement("span", { className: "text-gray-400 text-[16px]" }, text)));
};
var MuralKit = function (_a) {
    var logoSvg = _a.logoSvg, brandmarkSvg = _a.brandmarkSvg, brandkitUrl = _a.brandkitUrl, onCopyLogo = _a.onCopyLogo, onCopyBrandmark = _a.onCopyBrandmark, onDownloadBrandkit = _a.onDownloadBrandkit, children = _a.children;
    var _b = React.useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = React.useState({ x: 0, y: 0 }), position = _c[0], setPosition = _c[1];
    var menuRef = React.useRef(null);
    React.useEffect(function () {
        var handleClickOutside = function (event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return function () {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    var handleContextMenu = function (e) {
        e.preventDefault();
        var x = e.clientX;
        var y = e.clientY;
        setPosition({ x: x, y: y });
        setIsOpen(true);
    };
    var copyToClipboard = function (svg, message) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, navigator.clipboard.writeText(svg)];
                case 1:
                    _a.sent();
                    sonner.toast.success(message);
                    return [3 /*break*/, 3];
                case 2:
                    _a.sent();
                    sonner.toast.error('Failed to copy to clipboard');
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var handleCopyLogo = function () {
        copyToClipboard(logoSvg, 'Logo copied to clipboard');
        onCopyLogo === null || onCopyLogo === void 0 ? void 0 : onCopyLogo();
        setIsOpen(false);
    };
    var handleCopyBrandmark = function () {
        copyToClipboard(brandmarkSvg, 'Brandmark copied to clipboard');
        onCopyBrandmark === null || onCopyBrandmark === void 0 ? void 0 : onCopyBrandmark();
        setIsOpen(false);
    };
    var handleDownloadBrandkit = function () {
        window.open(brandkitUrl, '_blank');
        onDownloadBrandkit === null || onDownloadBrandkit === void 0 ? void 0 : onDownloadBrandkit();
        setIsOpen(false);
    };
    var BrandmarkIcon = function () {
        var parser = new DOMParser();
        var svgDoc = parser.parseFromString(brandmarkSvg, 'image/svg+xml');
        var svgElement = svgDoc.documentElement;
        // Set width and height
        svgElement.setAttribute('width', '20');
        svgElement.setAttribute('height', '20');
        // Remove any fill attributes and set stroke
        var elementsWithStrokeOrFill = svgElement.querySelectorAll('[stroke], [fill]');
        elementsWithStrokeOrFill.forEach(function (el) {
            el.removeAttribute('fill');
            el.setAttribute('stroke', 'currentColor');
            el.setAttribute('fill', 'none');
        });
        // If there are no stroke or fill attributes, add them to the SVG element itself
        if (elementsWithStrokeOrFill.length === 0) {
            svgElement.setAttribute('stroke', 'currentColor');
            svgElement.setAttribute('fill', 'none');
        }
        var modifiedSvg = svgElement.outerHTML;
        return (React__default["default"].createElement("span", { className: "inline-block w-5 h-5 text-gray-400", dangerouslySetInnerHTML: { __html: modifiedSvg } }));
    };
    return (React__default["default"].createElement("div", { className: "relative w-full h-full", onContextMenu: handleContextMenu },
        children,
        isOpen && (React__default["default"].createElement("div", { ref: menuRef, className: "fixed w-64 bg-white rounded-md shadow-lg z-10 border border-gray-100 overflow-hidden", style: {
                left: "".concat(Math.min(position.x, window.innerWidth - 268), "px"),
                top: "".concat(Math.min(position.y, window.innerHeight - 150), "px"),
                boxShadow: '0px 0px 6px 0px rgba(0, 0, 0, 0.02), 0px 2px 4px 0px rgba(0, 0, 0, 0.08)',
            } },
            React__default["default"].createElement(MenuItem, { icon: React__default["default"].createElement(CodeXmlIcon, null), text: "Copy logo as SVG", onClick: handleCopyLogo, isFirst: true }),
            React__default["default"].createElement(MenuItem, { icon: React__default["default"].createElement(BrandmarkIcon, null), text: "Copy brandmark as SVG", onClick: handleCopyBrandmark }),
            React__default["default"].createElement(MenuItem, { icon: React__default["default"].createElement(DownloadIcon, null), text: "Download BrandKit", onClick: handleDownloadBrandkit })))));
};

exports.MuralKit = MuralKit;
//# sourceMappingURL=index.js.map
