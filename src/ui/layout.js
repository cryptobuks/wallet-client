// @flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const ColumnFlex = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RowFlex = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ColumnFlexCenter = ColumnFlex.extend`
  justify-content: center;
  align-items: center;
`;

export const RowFlexCenter = RowFlex.extend`
  justify-content: center;
  align-items: center;
`;

export const Viewport = ColumnFlex.extend`
  height: 100vh;
  width: 100vw;
`;

export const Content = Viewport.extend`
  background-color: white;
  overflow: scroll;
  ${breakpoint('landscape')`
     width: unset;
     height: 650px;
  `};
`;

export const WrappedContent = Content.extend`
  padding: 5%;
`;

export const Top = styled.div`
  width: 100%;

  .form-group {
    margin-top: 40px;
  }
`;

export const Bottom = ColumnFlex.extend`
  margin-top: auto;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const CardWithTitle = props => (
  <div className={props.className}>
    <span className="title">{props.title}</span>
    <div className="content">{props.children}</div>
  </div>
);

export const Card = styled(CardWithTitle)`
  padding: 10px 20px 10px 20px;
  .title {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
    color: #00346b;
  }
`;

const EmptyDiv = ({ className }: any) => (
  <div className={className}>&nbsp;</div>
);

export const Divider = styled(EmptyDiv)`
  width: 100%;
  height: ${props => (props.small ? '1px' : '6px')};
  background-color: #f2f2f2;
`;
