const removeMessage = {
    type: 'question',
    buttons: ['Remover', 'Cancelar'],
    defaultId: 1,
    title: 'Message',
    message: 'Você deseja prosseguir ?',
    detail: 'escola e todos seus dados removidos',
};

const exitoMessage = {
    type: 'info',
    buttons: ['Voltar para Home'],
    defaultId: 1,
    title: 'Message',
    message: 'Escola e todos seus dados removidos',
};

const erroMessage = {
    type: 'info',
    buttons: ['Voltar para Home'],
    defaultId: 1,
    title: 'Message',
    message: 'Ocorreu um erro',
};

const salvaMensage = {
    type: 'info',
    buttons: ['Continuar editando', 'Voltar'],
    defaultId: 1,
    title: 'Message',
    message: 'Informações salvas',
};

const deletaMensage = {
    type: 'info',
    buttons: ['Voltar'],
    defaultId: 1,
    title: 'Message',
    message: 'Informações excluidas',
};