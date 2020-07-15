class Storage {
    constructor (arr) {
        this.items = arr;
    }
    getItems() {
        return this.items;
    }
    addItem(item) {
        return this.items.push(item);
    }
    removeItem(item) {
        for (let el = 0; el < this.items.length; el += 1) {
            if(this.items[el] === item) {
                return this.items.splice(el, 1);
            }
        }
    }
}

const storage = new Storage([
    'Нанітоіди',
    'Пролонгер',
    'Залізні жупи',
    'Антигравітатор',
  ]);
  
  const items = storage.getItems();
  console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]
  
  storage.addItem('Дроїд');
  console.table(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]
  
  storage.removeItem('Пролонгер');
  console.table(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]