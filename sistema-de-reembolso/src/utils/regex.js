export const validationPassword = new RegExp(
  "^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$",
);

export const onlyNumber = (number) => {
  return number.replace(/[^0-9]/g,'')
}

export const formatNumber = (number) => {
  return number.replace('R$', '').replace('.', '').replace(',', '.')
}