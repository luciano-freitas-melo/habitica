export default function addTaskTotal (type) {
  let totalTask = 0;

  if (type === 'task') {
    totalTask += 1;
    return totalTask;
  }
  return 0;
}

addTaskTotal('task');
