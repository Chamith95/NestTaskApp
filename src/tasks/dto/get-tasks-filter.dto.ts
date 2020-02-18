import { TaskStatus } from '../task-status.enum';
import { IsIn, IsNotEmpty,IsOptional } from 'class-validator';
import { IsStatusValid } from '../status_filter.decorator';

export class GetTasksFilterDto {
    @IsOptional()
    // @IsIn([TaskStatus.OPEN,TaskStatus.IN_PROGRESS,TaskStatus.DONE])
    @IsStatusValid()
    status: TaskStatus;

    @IsOptional()
    @IsNotEmpty()
    search: string;
}
