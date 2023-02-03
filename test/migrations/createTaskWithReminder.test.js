const assert = require('assert');
const moment = require('moment');
const { createTaskWithReminder } = require('./createTaskWithReminder');


describe('createTaskWithReminder', () => {
  
  it('deve lançar um erro se o nome da tarefa estiver vazio', async () => {
    try {
      await createTaskWithReminder(null, '2022-02-03');
      assert.fail();
    } catch (error) {
      assert.equal(error.message, 'O nome da tarefa não pode estar vazio');
    }
  });
  
  it('deve lançar um erro se a data de vencimento for inválida', async () => {
    try {
      await createTaskWithReminder('tarefa 1', 'data inválida');
      assert.fail();
    } catch (error) {
      assert.equal(error.message, 'Data de vencimento inválida');
    }
  });
  
  
  it('Deve agendar a notificação para o dia anterior à data de vencimento', function() {
    // Armazene a saída padrão do console
    let capturedLog = '';
    const log = console.log;
    console.log = function(message) {
      capturedLog += message + '\n';
    };

    // Crie a tarefa
    createTaskWithReminder('Tarefa de exemplo', moment().add(1, 'days').toDate());

    // Restaura a saída padrão do console
    console.log = log;

    // Verifique se a mensagem de notificação agendada foi exibida
    assert.equal(capturedLog.includes(`Notificação agendada para`), true);
  });
  it('Deve exibir a mensagem de erro "Erro ao criar task "nome da tarefa"" quando ocorrer um erro ao criar a tarefa', function() {
    // Armazene a saída padrão do console
    let capturedLog = '';
    const log = console.error;
    console.error = function(message) {
      capturedLog += message + '\n';
    };

    // Simula o erro ao criar a tarefa
    createTaskWithReminder('',new Date());

    // Restaura a saída padrão do console
    console.error = log;

    // Verifique se a mensagem de erro esperada foi exibida
    assert.equal(capturedLog.includes('Erro ao criar task ""'), true);
  });
});
