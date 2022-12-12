import React from 'react';
import ReactDom from 'react-dom/client';
import reactToWebComponent from 'react-to-webcomponent';
import Barcode from './Barcode';
import InfoLoader from './InfoLoader';

const VoucherBarcode = reactToWebComponent(Barcode, React, ReactDom);
const VoucherInfoLoader = reactToWebComponent(InfoLoader, React, ReactDom);

customElements.define('voucher-barcode', VoucherBarcode);
customElements.define('voucher-info-loader', VoucherInfoLoader);

console.log('hellloo em yeu');
