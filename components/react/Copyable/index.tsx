import React, { FC, PropsWithChildren } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';

interface Props {
  valueToCopy: string,
  onCopy?: () => void,
}

const Copyable: FC<PropsWithChildren<Props>> = ({
  valueToCopy,
  onCopy = () => {},
  children,
}) => (
  <CopyToClipboard
    text={valueToCopy}
    onCopy={() => {
      onCopy();
      toast.success('Value copied!');
    }}
  >
    {children}
  </CopyToClipboard>
);

export default Copyable;
