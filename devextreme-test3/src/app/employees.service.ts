import { Injectable } from "@angular/core";

export class PartyList {
    ID: Number
    Firstname: String
    Lastname: String
    Age: Number
    BirthDate: String
    Photo: String
}

const partyList: PartyList[] = [
    {
        'ID': 1,
        'Firstname': 'Michael',
        'Lastname': 'Keaton',
        'Age': 64,
        'BirthDate': '1968-12-08T00:00:00.000Z',
        'Photo': 'https://img.freepik.com/free-vector/man-shows-gesture-great-idea_10045-637.jpg?w=2000',

    }, {
        'ID': 2,
        'Firstname': 'Tanny',
        'Lastname': 'Tannun',
        'Age': 22,
        'BirthDate': '2011-14-09T00:00:00.000Z',
        'Photo': 'https://img.freepik.com/free-vector/man-shows-gesture-great-idea_10045-637.jpg?w=2000',
    }, {
        'ID': 3,
        'Firstname': 'John',
        'Lastname': 'Snow',
        'Age': 42,
        'BirthDate': '1968-12-08T00:00:00.000Z',
        'Photo': 'https://img.freepik.com/free-vector/man-shows-gesture-great-idea_10045-637.jpg?w=2000',

    }, {
        'ID': 4,
        'Firstname': 'Hello',
        'Lastname': 'Kitty',
        'Age': 1,
        'BirthDate': '1968-12-08T00:00:00.000Z',
        'Photo': 'https://img.freepik.com/free-vector/man-shows-gesture-great-idea_10045-637.jpg?w=2000',

    }, {
        'ID': 5,
        'Firstname': 'Sakura',
        'Lastname': 'Keaton',
        'Age': 22,
        'BirthDate': '1968-12-08T00:00:00.000Z',
        'Photo': 'https://img.freepik.com/free-vector/man-shows-gesture-great-idea_10045-637.jpg?w=2000',

    },{
        'ID': 6,
        'Firstname': 'Hello',
        'Lastname': 'Keaton',
        'Age': 22,
        'BirthDate': '1968-12-08T00:00:00.000Z',
        'Photo': 'https://img.freepik.com/free-vector/man-shows-gesture-great-idea_10045-637.jpg?w=2000',

    },
];

@Injectable({
    providedIn: 'root'
})

export class PartyListService {
    byKey(arg0: any) {
      throw new Error('Method not implemented.');
    }
    getPartyList(): PartyList[] {
        return partyList
    }
}