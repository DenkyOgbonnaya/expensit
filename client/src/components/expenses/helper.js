//calculates VAT amount
export const calculateVat = (value) => {
    const vatRate = 20; // 20%
    const newValue = value.replace(/[,/D]/g, '') // replace all none digits and commmas with ''

    const vat = Number(newValue) * (vatRate/100);

    return vat;
}
//format number 100000 to 100,000
export const formatInput = value => {
    const formatedValue = value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return formatedValue;
}