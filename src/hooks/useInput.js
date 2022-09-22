import { useState } from "react";
/**
 *
 * @param {*} initialValue default ''
 * @param {*} validator function check text is valid. must return boolean
 *
 * return {value, onChange}
 */
export const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {

    const {target:{value}} = event;
    let willUpdate = (typeof validator === "function") ? validator(value) : true;

    willUpdate && setValue(value)
  }
  return {value, onChange};
}