import React, { useState } from "react";

/**
 * Custom hook to manage form state.
 *
 * @param {Object} initialForm - The initial state of the form.
 * @returns {Object} An object containing the form state, a function to handle input changes, and a function to reset the form.
 * @property {Object} formState - The current state of the form.
 * @property {Function} onImputChange - Function to handle input changes.
 * @property {Function} onResetForm - Function to reset the form to its initial state.
 */
const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const onImputChange = ({ target }) => {
    /*Important: This uses the name int 'initialForm' to update the state
    Be sure to use the same name and value in the input fields in the form*/
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = (e) => {
    setFormState(initialForm);
  };

  // console.log(formState); //dev only

  return {
    ...formState,
    formState,
    onImputChange,
    onResetForm,
  };
};

export default useForm;
