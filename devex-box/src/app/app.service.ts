import { Injectable } from '@angular/core';

export class Item {
    ID: Number
    Name: String
    Category: String
}

const items: Item[] = [{
    "ID": 1,
    "Name": 'Banana',
    "Category": 'Fruits',
}, {
    "ID": 2,
    "Name": 'Cucumber',
    "Category": 'Vegetables',
}, {
    "ID": 3,
    "Name": 'Apple',
    "Category": 'Fruits',
}, {
    "ID": 4,
    "Name": 'Tomato',
    "Category": 'Vegetables',
}, {
    "ID": 5,
    "Name": 'Apricot',
    "Category": 'Fruits',
}]

@Injectable()
export class AppService {
    getItems(): Item[] {
        return items;
    }
}