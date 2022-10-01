export const masks = {
  money(value) {
    const cleanValue = +value.replace(/\D+/g, "");
    return new Intl.NumberFormat("pt-br", { 
      style: "currency", currency: "BRL" 
    }).format(cleanValue / 100);
  },

  date(value) {
    const newValue = value.replace(/\D+/g, "");
    return `${newValue.substr(6, 2)}/${newValue.substr(4, 2)}/${newValue.substr(0, 4)}`;
  },
}