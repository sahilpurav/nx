import { TaskGraph } from '../../config/task-graph';

export enum BatchMessageType {
  Tasks,
  Complete,
}

export interface BatchTasksMessage {
  type: BatchMessageType.Tasks;
  executorName: string;
  batchTaskGraph: TaskGraph;
  fullTaskGraph: TaskGraph;
}
/**
 * Results of running the batch. Mapped from task id to results
 */
export interface BatchResults {
  [taskId: string]: {
    success: boolean;
    terminalOutput?: string;
    startTime?: number;
    endTime?: number;
  };
}
export interface BatchCompleteMessage {
  type: BatchMessageType.Complete;
  results: BatchResults;
}

export type BatchMessage = BatchTasksMessage | BatchCompleteMessage;
