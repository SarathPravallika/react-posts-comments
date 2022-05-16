import { createAction } from "@reduxjs/toolkit";

const generateTableActions = (sliceName: string) => ({
  getData: createAction<number>(`${sliceName}/GET`),
});

export default generateTableActions;
