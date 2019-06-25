//calculates VAT amount
export const calculateVat = (value, vatRate = 20) => {
    const newValue = value.toString().replace(/[^0-9.]/g, '') // replace all none digits and commmas with ''

    const vat = Number(newValue) * (vatRate/100);

    return vat;
}
export const cleanInput = value => {
    return value.toString().replace(/[^0-9.]/g, '') // removes all none digits except periods
}
//format number 100000 to 100,000
export const formatInput = value => {
    const formatedValue = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return formatedValue;
}
export const formatCurrency = value => { 
const formatter = new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: 'EUR',
  });
  return formatter.format(Number(value));
}
export const truncateReason = (string, max_length = 50) => {
    //truncates the string if legnth is grater than MAX_LENGTH
    return string.length > max_length ? `${string.substring(0, max_length)}...` : string
}

  