export const  addNumber = (num) => {
  return {
  type: "ADDNUMBER",
  payload:num
  }
};

export const subNumber =(num) => {
  return {
  type: "SUBNUMBER",
  payload:num,
  }
};