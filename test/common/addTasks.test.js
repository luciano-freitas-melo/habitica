import addTaskTotal from '../../website/common/script/addTotalTasks';

describe('contador de tarefas criadas', () => {
  it('deveria acrescentar mais 1 na contagem da task retornando 1', () => {
    expect(addTaskTotal('task')).to.equal(1);
  });

  it('deveria acrescentar mais 1 na contagem do habit retornando 1', () => {
    expect(addTaskTotal('habit')).to.equal(1);
  });

  it('deveria fazer a contagem do habit retornando 2, pois já foi chamado duas vezes', () => {
    expect(addTaskTotal('habit')).to.equal(2);
  });
});
