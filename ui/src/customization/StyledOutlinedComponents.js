import styled from 'styled-components';
import {OutlinedInput, Select} from '@material-ui/core';

export const StyledOutlinedComponents = styled(OutlinedInput)`
    label.focused {
    color: white;
    }
    .MuiOutlinedInput-notchedOutline {
      border-color: gray;
      color: white;
    }
    &:hover .MuiOutlinedInput-notchedOutline {
      border-color: #969696;
    }
    &.Mui-focused .MuiOutlinedInput-notchedOutline {
      border-color: white;
      color: white;
    }
    
    .MuiOutlinedInput-inputMultiline {
      border-color: gray;
      color: white;
    }
    &:hover .MuiOutlinedInput-inputMultiline {
      border-color: #969696;
    }
    &.Mui-focused .MuiOutlinedInput-inputMultiline {
      border-color: white;
      color: white;
    }
    
    .MuiInputBase-input {
      border-color: gray;
      color: white;
    }
    &:hover .MuiInputBase-input {
      border-color: #969696;
    }
    &.Mui-focused .MuiInputBase-input {
      border-color: white;
      color: white;
    }
`;

export const StyledOutlinedSelect = styled(Select)`

    .MuiOutlinedInput-notchedOutline {
      border-color: gray;
      color: white;
    }
    &:hover .MuiOutlinedInput-notchedOutline {
      border-color: #969696;
    }
    &.Mui-focused .MuiOutlinedInput-notchedOutline {
      border-color: white;
      color: white;
    }
    
    .MuiSelect-outlined.MuiSelect-outlined {
        color: white;
    }
`;