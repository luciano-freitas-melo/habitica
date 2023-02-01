let totalTask = 0;
let totalHab = 0;

export default function addTaskTotal (type) {
  if (type === 'task') {
    totalTask += 1;
    return totalTask;
  }

  if (type === 'habit') {
    totalHab += 1;
    return totalHab;
  }

  return 0;
}
