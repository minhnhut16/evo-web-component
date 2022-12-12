var $61A1A$react = require("react");
var $61A1A$reactdomclient = require("react-dom/client");
var $61A1A$reacttowebcomponent = require("react-to-webcomponent");
require("@swc/helpers/lib/_object_spread.js");
require("@swc/helpers/lib/_sliced_to_array.js");
var $61A1A$reactjsxruntime = require("react/jsx-runtime");
var $61A1A$reactbarcode = require("react-barcode");
var $61A1A$rxjs = require("rxjs");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}



/* eslint-disable react/prop-types */ /* eslint-disable react/jsx-props-no-spreading */ 





var $d51762cdbbe90793$var$subject = new (0, $61A1A$rxjs.BehaviorSubject)(null);
var $d51762cdbbe90793$export$c48ca2d5cde02408 = function(data) {
    return $d51762cdbbe90793$var$subject.next(data);
};
var $d51762cdbbe90793$export$ec068583843480e7 = function(listener) {
    return $d51762cdbbe90793$var$subject.subscribe(listener);
};


function $e9b89d3793d589b5$var$Barcode(props) {
    // eslint-disable-next-line react/destructuring-assignment
    var ref = (0, $e9b89d3793d589b5$import$a521aa921bda7687$2e2bcd8739ae039)((0, $61A1A$react.useState)(function() {
        return props.value || "";
    }), 2), value = ref[0], setValue = ref[1];
    (0, $61A1A$react.useEffect)(function() {
        (0, $d51762cdbbe90793$export$ec068583843480e7)(function(broadcastedValue) {
            return setValue(broadcastedValue);
        });
    }, []);
    if (!value) return null;
    return /*#__PURE__*/ (0, $61A1A$reactjsxruntime.jsx)((0, ($parcel$interopDefault($61A1A$reactbarcode))), (0, $e9b89d3793d589b5$import$edcaf86a4f533110$2e2bcd8739ae039)({
        value: value
    }, props));
}
var $e9b89d3793d589b5$export$2e2bcd8739ae039 = $e9b89d3793d589b5$var$Barcode;




function $33af17a7805ec59b$export$2e2bcd8739ae039() {
    (0, $61A1A$react.useEffect)(function() {
        setTimeout(function() {
            (0, $d51762cdbbe90793$export$c48ca2d5cde02408)("truongqk1987");
        }, 1500);
    }, []);
    return null;
}


var $ac8f80d7ef71e787$var$VoucherBarcode = (0, ($parcel$interopDefault($61A1A$reacttowebcomponent)))((0, $e9b89d3793d589b5$export$2e2bcd8739ae039), (0, ($parcel$interopDefault($61A1A$react))), (0, ($parcel$interopDefault($61A1A$reactdomclient))));
var $ac8f80d7ef71e787$var$VoucherInfoLoader = (0, ($parcel$interopDefault($61A1A$reacttowebcomponent)))((0, $33af17a7805ec59b$export$2e2bcd8739ae039), (0, ($parcel$interopDefault($61A1A$react))), (0, ($parcel$interopDefault($61A1A$reactdomclient))));
customElements.define("voucher-barcode", $ac8f80d7ef71e787$var$VoucherBarcode);
customElements.define("voucher-info-loader", $ac8f80d7ef71e787$var$VoucherInfoLoader);
console.log("hellloo em yeu");


