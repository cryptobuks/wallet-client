// @flow
import React from 'react';
import styled from 'styled-components';
import variables from '../variables';

type FileUploadProps = {
  type: 'camera' & 'upload',
  name: string,
  children: any,
  onChoose: (files: Array<File>) => void,
};

const uploadFile = onChoose => ({ target }) => {
  onChoose(target.files);
};

const FileUploadBase = ({
  type,
  name,
  children,
  onChoose,
  ...props
}: FileUploadProps) => (
  <label htmlFor={name} {...props}>
    <input
      type="file"
      name={name}
      onChange={uploadFile(onChoose)}
      capture={type === 'camera' ? 'environment' : null}
      accept={type === 'camera' ? 'image/*;capture=camera' : 'image/*'}
    />
    {children}
  </label>
);

export const FileUpload = styled(FileUploadBase)`
  display: inline;
  width: fit-content;
  background-image: linear-gradient(
    to right,
    ${variables.colorGreenLighter},
    ${variables.colorGreenBright}
  );
  padding: 1em 2em 0 2em;
  box-shadow: 0 2px 6px 0 rgba(2, 189, 165, 0.4);
  height: 52px;
  min-width: 140px;
  margin: 0 auto;
  border-radius: 54.5px;
  border: 0;
  font-family: OpenSansBold, Fallback, sans-serif;
  font-size: ${variables.fontSizeNormal};
  color: ${variables.colorWhite};
  text-shadow: 0 1px 0 #0cb88e;
  text-transform: uppercase;

  & input {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const FileUploadLink = styled(FileUploadBase)`
  color: ${variables.colorGreen};

  & input {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }
`;
