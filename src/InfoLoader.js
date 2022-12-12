import { useEffect } from 'react';
import { sendData } from './shareUtils';

export default function VoucherInfoLoader() {
  useEffect(() => {
    setTimeout(() => {
      sendData('truongqk19cjdnj87');
    }, 1500);
  }, []);

  return null;
}
