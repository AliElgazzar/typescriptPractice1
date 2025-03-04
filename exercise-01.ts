// exercise 1

export type Item = { id: string, title: string; };

let data: Readonly<Item[]> = Object.freeze([]);

export function get_items(): readonly Item[] {
    return data;
}

export function add_item(new_item: Item): boolean {
    // add item (if id does not exist)
    // return true if item is added successfully, false otherwise
    return true;
}

export function update_item_title_by_id(id: string, new_title: string): boolean {
    // update the title (if id exist)
    // return true if item is update successfully, false otherwise
    return true;
}

export function delete_item_by_id(id: string): boolean {
    // delete the item (if id exist)
    // return true if item is deleted successfully, false otherwise
    return true;
}

export function get_item_title_by_id(id: string): string {
    // return the item title by id (if id exist)
    return '';
}
