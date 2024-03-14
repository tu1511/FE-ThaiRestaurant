// Chuyen doi so thanh tien vnd
export const formatter = (number) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(number);
};
