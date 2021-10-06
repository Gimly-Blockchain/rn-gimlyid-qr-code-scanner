import { QRContent } from '@sphereon/gimlyid-qr-code';
import React from 'react';

export interface QRScannerProps {
  onRead: (content: QRContent) => void;
  style: React.CSSProperties;
}
