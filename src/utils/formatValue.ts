const formatValue = (value: number, type?: string): string => {
  const formattedValue = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
  if (type === "outcome") {
    return '- ' + formattedValue
  }
  return formattedValue
}
export default formatValue;
