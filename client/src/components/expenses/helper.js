//calculates VAT amount
export const calculateVat = (value) => {
    const vatRate = 20; // 20%e
    const newValue = value.toString().replace(/[,/D]/g, '') // replace all none digits and commmas with ''

    const vat = Number(newValue) * (vatRate/100);

    return vat;
}
export const cleanInput = value => {
    return value.replace(/[,/D]/g, '') // replace all none digits and commmas with ''
}
//format number 100000 to 100,000
export const formatInput = value => {
    const formatedValue = value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return formatedValue;
}