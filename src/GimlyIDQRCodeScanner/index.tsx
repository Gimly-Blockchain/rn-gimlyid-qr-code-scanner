import { QRContent } from '@gimly-blockchain/gimlyid-qr-code-generator';
import React, { FC } from 'react';
import { BarCodeReadEvent, RNCamera } from 'react-native-camera';

import { QRScannerProps } from '../types';

export const GimlyIDQRCodeScanner: FC<QRScannerProps> = (props: QRScannerProps) => {
  const { style, onRead } = props;

  return (
    <RNCamera
      style={style}
      barCodeTypes={[RNCamera.Constants.BarCodeType.qr]}
      captureAudio={false}
      onBarCodeRead={(event: BarCodeReadEvent) => read(event, onRead)}
    />
  );
};

const read = (event: BarCodeReadEvent, onRead: (props: QRContent) => void) => {
  if (onRead) {
    try {
      const content: QRContent = JSON.parse(event.data);
      onRead(content);
    } catch (error) {
      return { error: 'wrong qr code format' };
    }
  }
};
