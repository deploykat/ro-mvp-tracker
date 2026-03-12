// @ts-nocheck
import React from 'react';
import { Button } from './styles';

export function ModalPrimaryButton({ children, ...props }) {
  return <Button {...props}>{children}</Button>;
}
