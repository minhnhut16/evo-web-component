/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import { useEffect, useState } from 'react';
import ReactBarcode from 'react-barcode';
import { subscribe } from './shareUtils';

function Barcode(props) {
  // eslint-disable-next-line react/destructuring-assignment
  const [value, setValue] = useState(() => props.value || '');

  useEffect(() => {
    subscribe((broadcastedValue) => setValue(broadcastedValue));
  }, []);

  if (!value) return null;

  return <ReactBarcode value={value} {...props} />;
}

export default Barcode;
