import { memo } from 'react';

import { GimlyIDQRCodeScanner } from './GimlyIDQRCodeScanner/index';

export { CameraType } from './types';
export default memo(GimlyIDQRCodeScanner);
