export default function addTaskTotal (count, type) {
    let totalTask = 0;
  
    if (count === 1 && type === 'task') {
      totalTask = totalTask + 1;
      return totalTask;
    }
    return 0;
  }
  
  addTaskTotal(1, 'task');