export enum TodoStatus {
  PENDENTE,
  EM_ANDAMENTO,
  CONCLUIDO,
}

export const TodoStatusLabel= new Map<number,string>([
  [TodoStatus.PENDENTE, 'Pendente'],
  [TodoStatus.EM_ANDAMENTO,'Em Andamento'],
  [TodoStatus.CONCLUIDO,'Concluído'],
]);
