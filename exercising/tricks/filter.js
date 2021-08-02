//filter faz uma filtragem de verdadiro ou falso

//criando obj

const coisas = [
    
    {nome: "Tablet", preco: 3500, fragil: true},
    {nome: "SamsungGalaxy", preco: 2700, fragil: true},
    {nome: "Mouse", preco: 70, fragil: true},
    {nome: "Cabo-usb",preco: 45, fragil: false},
    {nome: "Gabinete", preco: 1700, fragil: false}
]

//quero que filtre 

//filtrando produtos não fragies com valor abaixo de 2k
const fragilFilt = produto => !produto.fragil;
const valorFiltro = produto=> produto.preco<=2000;

console.log(coisas.filter(fragilFilt).filter(valorFiltro))