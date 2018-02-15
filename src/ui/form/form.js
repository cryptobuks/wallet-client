// @flow
import React from 'react';
import styled from 'styled-components';
import { Field as ReduxField } from 'redux-form';

export const Label = styled.label`
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  color: #02bda5;

  &.is-invalid {
    color: #ee583c;
  }
`;

export const Input = styled.input`
  font-size: 16px;
  ::placeholder {
    color: #cccccc;
  }
  &.is-invalid {
    background-image: linear-gradient(
        to top,
        #d50000 2px,
        rgba(213, 0, 0, 0) 2px
      ),
      linear-gradient(to top, rgba(0, 0, 0, 0.26) 1px, transparent 1px);
  }
  &:read-only {
    background-color: white;
  }
`;

export const Select = styled.select`
  font-size: 16px;
  ::placeholder {
    color: #cccccc;
  }
  &.is-invalid {
    background-image: linear-gradient(
        to top,
        #d50000 2px,
        rgba(213, 0, 0, 0) 2px
      ),
      linear-gradient(to top, rgba(0, 0, 0, 0.26) 1px, transparent 1px);
  }
`;

export const Form = (props: any) => <form {...props} />;

export const FormGroup = (props: any) => (
  <div className="form-group" {...props} />
);

export const FormRow = (props: any) => <div className="form-row" {...props} />;

export const Col = (props: any) => <div className="col" {...props} />;

export const Col3 = (props: any) => <div className="col-3" {...props} />;

const FormFeedbackTag = styled.p`
  display: block;
  background-color: #ffc9c0;
  color: #00346b;
  border-radius: 6px;
  padding: 11px 9px 13px 17px;
  font-size: 14px;
  margin-top: 8px;
`;

export const FormFeedback = (props: any) => (
  <FormFeedbackTag
    className={`invalid-feedback ${props.className}`}
    {...props}
  />
);

export const FormInput = (props: any) => (
  <Input className="form-control" {...props} />
);

export const FieldInput = ({
  addon,
  input,
  label,
  type,
  placeholder,
  meta: { touched, error, warning },
}: any) => {
  const renderInput = () => (
    <Input
      className={`form-control ${touched && error
        ? 'is-invalid'
        : ''} ${input.className}`}
      placeholder={placeholder}
      {...input}
      type={type}
      {...(type === 'number'
        ? { step: 'any', pattern: '[\\d\\.]*', min: 0 }
        : {})}
    />
  );
  return (
    <FormGroup>
      {label && (
        <Label
          className={touched && error ? 'is-invalid' : ''}
          htmlFor={input.id}
        >
          {label}
        </Label>
      )}
      {addon ? (
        <div className="input-group">
          {renderInput()}
          <span className="input-group-addon">{addon}</span>
        </div>
      ) : (
        renderInput()
      )}
      {touched &&
        ((error && <FormFeedback>{error}</FormFeedback>) ||
          (warning && <FormFeedback>{warning}</FormFeedback>))}
    </FormGroup>
  );
};

const renderSelectField = ({
  addon,
  input,
  items,
  label,
  meta: { touched, error, warning },
}: any) => {
  const renderSelect = () => (
    <Select
      className={`form-control ${touched && error
        ? 'is-invalid'
        : ''} ${input.className}`}
      {...input}
    >
      {items.map((item, index) => (
        <option key={index} value={item.value}>
          {item.label}
        </option>
      ))}
    </Select>
  );
  return (
    <FormGroup>
      {label && (
        <Label
          className={touched && error ? 'is-invalid' : ''}
          htmlFor={input.id}
        >
          {label}
        </Label>
      )}
      {addon ? (
        <div className="input-group">
          {renderSelect()}
          <span className="input-group-addon">{addon}</span>
        </div>
      ) : (
        renderSelect()
      )}
      {touched &&
        ((error && <FormFeedback>{error}</FormFeedback>) ||
          (warning && <FormFeedback>{warning}</FormFeedback>))}
    </FormGroup>
  );
};

const TosCheckbox = styled.input`
  margin-top: 0;
`;

export const renderCheckbox = ({
  input,
  label,
  meta: { touched, error, warning },
}: any) => (
  <div className={`form-check ${touched && error ? 'has-error' : ''}`}>
    <label className="form-check-label" htmlFor={input.id}>
      <TosCheckbox
        {...input}
        type="checkbox"
        className={`form-check-input ${touched && error
          ? 'is-invalid'
          : ''} ${input.className}`}
      />
      {label}
    </label>
    {touched &&
      ((error && <FormFeedback>{error}</FormFeedback>) ||
        (warning && <FormFeedback>{warning}</FormFeedback>))}
  </div>
);

export const Field = (props: any) => (
  <ReduxField component={props.component || FieldInput} {...props} />
);

export const SelectField = (props: any) => (
  <ReduxField component={props.component || renderSelectField} {...props} />
);

export default {
  Label,
  Input,
  Select,
  Form,
  FormGroup,
  FormRow,
  FormFeedback,
  Field,
  FieldInput,
  SelectField,
  Col,
  Col3,
  renderCheckbox,
  StyledInput: FormInput,
};
