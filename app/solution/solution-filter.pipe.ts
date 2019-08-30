import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: "solutionFilter"})
export class SolutionFilterPipe implements PipeTransform {
    transform(list: any[], type: string) {
        return list.filter(item => item.type === type);
    }
}