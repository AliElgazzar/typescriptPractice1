// exercise 1

import { title } from "process";

export type Item = { id: string, title: string; };

let data: Readonly<Item[]> = Object.freeze([]);

export function get_items(): readonly Item[] {
    return data;
}

export function add_item(new_item: Item): boolean {
    // add item (if id does not exist)
    if(data.some(item=>item.id===new_item.id))return false;
    data=Object.freeze([...data,new_item]);
    return true;
}

    



export function update_item_title_by_id(id: string, new_title: string): boolean {
    // update the title (if id exist)
    const index=data.findIndex(item=>item.id===id);
    if (index === -1) return false;
    const newData=[...data];
    newData[index]={...newData[index],title:new_title};
     data=Object.freeze(newData);
    return true;

    
  
}

export function delete_item_by_id(id: string): boolean {
    // delete the item (if id exist)
    if(!data.some(item=>item.id===id)) return false;
    const newData=data.filter(item=>item.id!==id);
     data=Object.freeze(newData);

return true;

}

export function get_item_title_by_id(id: string): string {
    const foundItem = data.find(item => item.id === id);
    return foundItem ? foundItem.title : "not found";
} 