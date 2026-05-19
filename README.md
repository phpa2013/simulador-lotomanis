🎲 Sistema de Sorteio Numérico — JavaScript Modular

Projeto desenvolvido com foco em arquitetura modular, manipulação de DOM, gerenciamento de estado e separação de responsabilidades utilizando JavaScript puro (Vanilla JS).

O sistema permite:

selecionar até 50 números;
realizar um sorteio aleatório de 20 números;
comparar os números escolhidos com os sorteados;
exibir visualmente os acertos.
🚀 Tecnologias Utilizadas
HTML5
CSS3
JavaScript (ESModules)
🧠 Conceitos Aplicados

Este projeto foi construído utilizando conceitos modernos de desenvolvimento Front-End:

Modularização com import/export
Manipulação dinâmica do DOM
Delegação de eventos
Imutabilidade de dados
Gerenciamento de estado
Renderização dinâmica
Separação de responsabilidades
Programação funcional (map, filter, some)
Uso de DocumentFragment para otimização de performance
Estrutura escalável baseada em componentes lógicos
📁 Estrutura do Projeto
📂 project
├── main.js
├── generateNumbers.js
├── renderButtons.js
├── sortNumbers.js
├── toggleStatus.js
├── resultGaming.js
└── disabledOrActiveButton.js
⚙️ Responsabilidade dos Módulos
main.js

Responsável pela orquestração da aplicação:

gerenciamento de eventos;
controle de estado;
fluxo principal da aplicação;
renderização inicial;
reinicialização do sistema.


generateNumbers.js

Responsável por gerar a lista inicial de números:

[
  {
    id: 0,
    num: 0,
    status: false
  }
]


renderButtons.js

Responsável pela renderização dinâmica dos botões no DOM.

Técnicas utilizadas:
DocumentFragment
dataset
renderização reativa baseada em estado


toggleStatus.js

Responsável por alternar o estado dos números selecionados.

Regras implementadas:
seleção/desmarcação;
limite máximo de 50 números;
atualização imutável do array.


sortNumbers.js

Responsável pelo sorteio aleatório de 20 números sem repetição.

Técnicas utilizadas:
Math.random()
while
verificação com some()


resultGaming.js

Responsável pela comparação entre:

números escolhidos;
números sorteados.
Resultado:

Transforma os números acertados em:

status: "hit"


disabledOrActiveButton.js

Responsável pela ativação/desativação do botão de início do sorteio.

🔄 Fluxo da Aplicação
1. Geração dos números
2. Renderização dos botões
3. Seleção dos números
4. Atualização do estado
5. Liberação do botão de sorteio
6. Sorteio aleatório
7. Comparação dos resultados
8. Renderização dos acertos
9. Reinicialização da aplicação
🧩 Estrutura de Estado

A aplicação trabalha com três estados principais:

let listBtns = [];
let listSort = [];
let listChosen = [];

Estado	Responsabilidade
listBtns	estado geral dos números
listSort	números sorteados
listChosen	números selecionados
🏗️ Padrões Utilizados
✅ Imutabilidade

Os objetos não são alterados diretamente.

Exemplo:

return {
  ...el,
  status: true
}
✅ Delegação de Eventos

A aplicação utiliza apenas um listener para controlar todos os botões:

contentBtns.addEventListener("click", ...)

Isso reduz:

consumo de memória;
múltiplos listeners desnecessários;
custo de renderização.
✅ Renderização Otimizada

Uso de DocumentFragment para evitar múltiplos reflows no DOM.

🎯 Objetivos do Projeto

Este projeto foi criado com foco em aprendizado avançado de JavaScript moderno, visando praticar:

lógica de programação;
manipulação de arrays;
arquitetura modular;
organização de código;
boas práticas utilizadas no mercado Front-End.
📚 Aprendizados Desenvolvidos

Durante o desenvolvimento foram praticados:

map()
filter()
some()
forEach()
closest()
dataset
addEventListener
DocumentFragment
ESModules
renderização dinâmica
gerenciamento de estado
🔮 Possíveis Melhorias Futuras
persistência com localStorage;
animações CSS;
tema dark/light;
contador de acertos;
separação de estados em store central;
refatoração para arquitetura baseada em componentes;
implementação em React futuramente.
👨‍💻 Autor

Desenvolvido por Paulo Henrique Pereira Alves
Estudando JavaScript moderno e desenvolvimento Front-End.
