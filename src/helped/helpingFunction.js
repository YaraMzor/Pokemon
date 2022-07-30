export function getNumber(number,LEADING_ZEROS_AMOUNT){
    return String(number).padstart(LEADING_ZEROS_AMOUNT,0)
}
export function capital(string){
    return String.charAt(0).toUpperCase() + string.slice(1);
}
