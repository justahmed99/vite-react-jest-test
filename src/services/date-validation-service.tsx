export class DateValidationService {
  validateDate(date: string): boolean {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

    if (!dateRegex.test(date)) {
      return false;
    }

    const [year, month, day] = date.split('-');
    const parsedDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));

    if (
      parsedDate.getFullYear() !== parseInt(year) ||
      parsedDate.getMonth() + 1 !== parseInt(month) ||
      parsedDate.getDate() !== parseInt(day)
    ) {
      return false;
    }

    return true;
  }

}