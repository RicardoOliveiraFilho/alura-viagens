const cpfMask = (value) => value
  // substitui qualquer caractere que não seja numero por nada
  .replace(/\D/g, '')
  // captura 2 grupos de número o primeiro de 3 e o segundo de 1,
  // após capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo
  // de número
  .replace(/(\d{3})(\d)/, '$1.$2')
  .replace(/(\d{3})(\d)/, '$1.$2')
  .replace(/(\d{3})(\d{1,2})/, '$1-$2')
  // captura 2 números seguidos de um traço e não deixa ser digitado mais nada
  .replace(/(-\d{2})\d+?$/, '$1');

export default cpfMask;
