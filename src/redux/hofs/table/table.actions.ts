import { createAction } from "@reduxjs/toolkit";

const generateTableActions = (sliceName: string) => ({
  getData: createAction(`${sliceName}/GET`),
});

export default generateTableActions;
