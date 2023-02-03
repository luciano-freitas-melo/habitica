const assert = require('assert');
const moment = require('moment');

async function createTaskWithReminder(taskName, dueDate) {
  if (!taskName) {
    const errorMessage = 'O nome da tarefa não pode estar vazio';
    console.error(`Erro ao criar task "${taskName}"`);
    console.error(errorMessage);
    throw new Error(errorMessage);
  }

  if (!dueDate || !moment(dueDate).isValid() || moment(dueDate).isBefore(moment())) {
    const errorMessage = 'Data de vencimento inválida';
    console.error(`ErCro ao criar task "${taskName}"`);
    console.error(errorMessage);
    throw new Error(errorMessage);
  }

  try {
    // Cria a tarefa
    console.log(`Task "${taskName}" criada com sucesso!`);

    // Agende a notificação para o dia anterior à data de vencimento
    const reminderDate = moment(dueDate).subtract(1, 'days').toDate();
    console.log(`Notificação agendada para ${reminderDate}`);
  } catch (error) {
    console.error(`Erro ao criar task "${taskName}"`);
    console.error(error);
  }
}

module.exports = { createTaskWithReminder };


