import { QRContent } from 'gimly-id-qr-code';
import React from 'react';

export interface QRScannerProps {
  onRead: (content: QRContent) => void;
  style: React.CSSProperties;
  type: CameraType;
}

export enum CameraType {
  BACK = 0,
  FRONT = 1,
}
