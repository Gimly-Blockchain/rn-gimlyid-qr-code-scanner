import { QRContent } from '@gimly-blockchain/gimlyid-qr-code-generator';
import React from 'react';

export interface QRScannerProps {
  onRead: (content: QRContent) => void;
  style: React.CSSProperties;
}
