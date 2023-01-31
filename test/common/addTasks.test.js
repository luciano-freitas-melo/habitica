import addTaskTotal from '../../website/common/script/addTotalTasks';

describe('contador de tarefas criadas', () => {
  it('deveria acrescentar mais 1 na contagem da task retornando 1', () => {
    expect(addTaskTotal(1, 'task')).to.equal(1);
  });
});
