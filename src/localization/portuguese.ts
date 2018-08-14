import { editorLocalization } from "../editorLocalization";

var portugueseTranslation = {
  //survey templates
  survey: {
    dropQuestion: "Arraste uma pergunta aqui.",
    copy: "Copiar",
    addToToolbox: "Adicionar à caixa de ferramentas",
    deletePanel: "Deletar painel",
    deleteQuestion: "Deletar pergunta"
  },
  //questionTypes
  qt: {
    checkbox: "Checkbox (múltiplas opções)",
    comment: "Comentário",
    dropdown: "Dropdown (lista suspensa)",
    file: "Arquivo",
    html: "Html",
    matrix: "Matriz (opção única)",
    matrixdropdown: "Matriz (multiplas opções)",
    matrixdynamic: "Matriz (linhas dinâmicas)",
    multipletext: "Texto múltiplo",
    panel: "Painel",
    radiogroup: "Radiogroup (única opção)",
    rating: "Avaliação",
    text: "Texto"
  },
  //Strings in Editor
  ed: {
    addNewPage: "Adicionar nova página",
    newPageName: "Nome da página",
    newQuestionName: "Nome da pergunta",
    newPanelName: "Nome do painel",
    testSurvey: "Testar pesquisa",
    testSurveyAgain: "Testar pesquisa novamente",
    testSurveyWidth: "Tamanho da pesquisa: ",
    embedSurvey: "Incorporar Pesquisa (em uma página)",
    saveSurvey: "Salvar pesquisa",
    designer: "Designer da Pesquisa",
    jsonEditor: "Editor JSON",
    undo: "Desfazer",
    redo: "Refazer",
    options: "Opções",
    generateValidJSON: "Gerar JSON válido",
    generateReadableJSON: "Gerar arquivo de leitura JSON",
    toolbox: "Caixa de ferramentas",
    delSelObject: "Apagar objeto selecionado",
    correctJSON: "Por favor, corrija o JSON.",
    surveyResults: "Resultado da pesquisa: "
  },
  //Property names in table headers
  pel: {
    isRequired: "É obrigatório?"
  },
  //Property Editors
  pe: {
    apply: "Aplicar",
    ok: "OK",
    cancel: "Cancelar",
    reset: "Resetar",
    close: "Fechar",
    delete: "Apagar",
    addNew: "Adicionar novo",
    removeAll: "Remover todos",
    edit: "Editar",
    empty: "<vazio>",
    fastEntry: "Entrada rápida",
    formEntry: "Entrada do formulário",
    testService: "Testar o serviço",
    expressionHelp:
      "Por favor informe uma expressão booleana. Ela deve retornar verdadeiro para manter a pergunta/página visível. Por exemplo: {´pergunta1} = 'valor1' or ({pergunta2} = 3 and {pergunta3} < 5)",

    propertyIsEmpty: "Por favor informe um valor na propriedade",
    value: "Valor",
    text: "Texto",
    columnEdit: "Editar coluna: {0}",
    itemEdit: "Editar item: {0}",

    hasOther: "Tem outro item",
    name: "Nome",
    title: "Título",
    cellType: "Tipo da célula",
    colCount: "Contagem de células",
    choicesOrder: "Selecione a ordem das alternativas",
    visible: "É visível?",
    isRequired: "É obrigatório?",
    startWithNewLine: "Começa com uma nova linha?",
    rows: "Contagem de linhas",
    placeHolder: "Texto de referência",
    showPreview: "Mostra pré-visualização de imagem?",
    storeDataAsText: "Gravar conteúdo de arquivo no resultado JSON como texto",
    maxSize: "Tamanho máximo de arquivo em bytes",
    imageHeight: "Altura da imagem",
    imageWidth: "Largura da imagem",
    rowCount: "Contagem de linhas",
    addRowText: "Texto do botão para adicionar linhas",
    removeRowText: "Texto do botão para remover linhas",
    minRateDescription: "Descrição de qualificação mínima",
    maxRateDescription: "Descrição de qualificação máxima",
    inputType: "Tipo de entrada",
    optionsCaption: "Opções de título",

    qEditorTitle: "Editar pergunta: {0}",
    tabs: {
      general: "Geral",
      fileOptions: "Opções do arquivo",
      html: "Editor Html",
      columns: "Colunas",
      rows: "Linhas",
      choices: "Escolhas",
      visibleIf: "Visível se",
      rateValues: "Valores de qualificação",
      choicesByUrl: "Escolhas pela URL da Web",
      matrixChoices: "Escolhas da Matrix",
      multipleTextItems: "Múltimos itens de texto",
      validators: "Validadores"
    },

    editProperty: "Editar propriedade '{0}'",
    items: "[ Items: {0} ]",

    enterNewValue: "Inserir novo valor.",
    noquestions: "Não há nenhuma pergunta na pesquisa.",
    createtrigger: "Por favor, crie um gatilho",
    triggerOn: "Gatilho Ativado ",
    triggerMakePagesVisible: "Tornar páginas visíveis:",
    triggerMakeQuestionsVisible: "Tornar perguntas visíves:",
    triggerCompleteText: "Completar a pesquisa se obtiver êxito.",
    triggerNotSet: "O gatilho não está definido",
    triggerRunIf: "Executar gatilho se",
    triggerSetToName: "Mudar o nome do gatilho para: ",
    triggerSetValue: "Configurar valor do Gatilho para: ",
    triggerIsVariable: "Não colocar a variável no resultado da pesquisa."
  },
  //Operators
  op: {
    empty: "está vazio",
    notempty: "não está vazio",
    equal: "é igual",
    notequal: "não é igual",
    contains: "contém",
    notcontains: "não contém",
    greater: "maior",
    less: "menor",
    greaterorequal: "maior ou igual",
    lessorequal: "menor ou igual"
  },
  //Embed window
  ew: {
    angular: "Usar versão Angular",
    jquery: "Usar versão jQuery",
    knockout: "Usar versão Knockout",
    react: "Usar versão React",
    vue: "Usar versão Vue",
    bootstrap: "Para framework bootstrap",
    standard: "Versão padrão",
    showOnPage: "Mostrar pesquisa em uma página",
    showInWindow: "Mostrar pesquisa em uma janela",
    loadFromServer: "Carregar JSON da pesquisa de um servidor",
    titleScript: "Título do script",
    titleHtml: "Título HTML",
    titleJavaScript: "Título JavaScript"
  },
  //Properties
  p: {
    name: "nome",
    title: { name: "título", title: "Deixar vazio se for o mesmo que 'Nome'" },
    survey_title: { name: "título", title: "Será mostrado em cada página." },
    page_title: { name: "título", title: "Título de página" }
  }
};

editorLocalization.locales["pt"] = portugueseTranslation;
