import { memo } from 'react';

import { GimlyIDQRCodeScanner } from './GimlyIDQRCodeScanner/index';

export { QRType, QRMode, QRContent } from '@sphereon/gimlyid-qr-code';
export default memo(GimlyIDQRCodeScanner);
