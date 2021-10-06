import { memo } from 'react';

import { GimlyIDQRCodeScanner } from './GimlyIDQRCodeScanner/index';

export { QRType, QRMode, QRContent } from '@gimly-blockchain/gimlyid-qr-code-generator';
export default memo(GimlyIDQRCodeScanner);
