import $1Br4e$react, {useState as $1Br4e$useState, useEffect as $1Br4e$useEffect} from "react";
import $1Br4e$reactdomclient from "react-dom/client";
import $1Br4e$reacttowebcomponent from "react-to-webcomponent";
import {jsx as $1Br4e$jsx} from "react/jsx-runtime";
import $1Br4e$reactbarcode from "react-barcode";
import {BehaviorSubject as $1Br4e$BehaviorSubject} from "rxjs";




/* eslint-disable react/prop-types */ /* eslint-disable react/jsx-props-no-spreading */ 



const $a8042a39394a87a4$var$subject = new (0, $1Br4e$BehaviorSubject)(null);
const $a8042a39394a87a4$export$c48ca2d5cde02408 = (data)=>$a8042a39394a87a4$var$subject.next(data);
const $a8042a39394a87a4$export$ec068583843480e7 = (listener)=>$a8042a39394a87a4$var$subject.subscribe(listener);


function $714a541c07d47d3a$var$Barcode(props) {
    // eslint-disable-next-line react/destructuring-assignment
    const [value, setValue] = (0, $1Br4e$useState)(()=>props.value || "");
    (0, $1Br4e$useEffect)(()=>{
        (0, $a8042a39394a87a4$export$ec068583843480e7)((broadcastedValue)=>setValue(broadcastedValue));
    }, []);
    if (!value) return null;
    return /*#__PURE__*/ (0, $1Br4e$jsx)((0, $1Br4e$reactbarcode), {
        value: value,
        ...props
    });
}
var $714a541c07d47d3a$export$2e2bcd8739ae039 = $714a541c07d47d3a$var$Barcode;




function $2ae59a51ead0bf50$export$2e2bcd8739ae039() {
    (0, $1Br4e$useEffect)(()=>{
        setTimeout(()=>{
            (0, $a8042a39394a87a4$export$c48ca2d5cde02408)("truongqk1987");
        }, 1500);
    }, []);
    return null;
}


const $5618abe9c1982b27$var$VoucherBarcode = (0, $1Br4e$reacttowebcomponent)((0, $714a541c07d47d3a$export$2e2bcd8739ae039), (0, $1Br4e$react), (0, $1Br4e$reactdomclient));
const $5618abe9c1982b27$var$VoucherInfoLoader = (0, $1Br4e$reacttowebcomponent)((0, $2ae59a51ead0bf50$export$2e2bcd8739ae039), (0, $1Br4e$react), (0, $1Br4e$reactdomclient));
customElements.define("voucher-barcode", $5618abe9c1982b27$var$VoucherBarcode);
customElements.define("voucher-info-loader", $5618abe9c1982b27$var$VoucherInfoLoader);
console.log("hellloo em yeu");


