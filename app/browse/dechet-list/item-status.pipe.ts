import { Pipe, PipeTransform } from "@angular/core";

import { Dechet } from "../../shared/dechet.model";

@Pipe({
    name: "itemStatus"
})
export class ItemStatusPipe implements PipeTransform {
    transform(items: Array<Dechet>, valideParAdmin: boolean) {
        let itemsToShow: Dechet[] = [];
        if (items && Array.isArray(items)) {
            itemsToShow = items.filter((grocery: Dechet) => {
                return grocery.valideParAdmin === valideParAdmin;
            });
        }
        return itemsToShow;
    }
}