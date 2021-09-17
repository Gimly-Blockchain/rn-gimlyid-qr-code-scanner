import { QRContent } from 'gimlyid-qr-code';
import React from 'react';

export interface QRScannerProps {
  onRead: (content: QRContent) => void;
  style: React.CSSProperties;
}
