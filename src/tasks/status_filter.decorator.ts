import {registerDecorator, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments} from "class-validator";
import { TaskStatus } from './task-status.enum';

@ValidatorConstraint({ async: false })
export class IsStatusValidConstraint implements ValidatorConstraintInterface {
  readonly allowedStatuses = [
    TaskStatus.OPEN,
    TaskStatus.IN_PROGRESS,
    TaskStatus.DONE,
  ]

  private checkStatusValid(status:any) {
    const idx = this.allowedStatuses.indexOf(status);
    return idx !== -1;
  }

  validate(status: any, args: ValidationArguments) {
    return this.checkStatusValid(status)
  }
}

export function IsStatusValid() {
  const validationOptions: ValidationOptions = {message: 'Status is Not valid'};
  return function (object: Record<string, any>, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsStatusValidConstraint
    });
  };
}
