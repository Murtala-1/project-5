let newQuote;
const Quotes = {
    init: function (beginning, middle, end) {
        this.beginning = beginning;
        this.middle = middle;
        this.end = end;
        
    },
    describe: function () {
        const theBeg = Math.floor(Math.random() * (this.beginning.length));
        const theMid = Math.floor(Math.random() * (this.middle.length));
        const theEnd = Math.floor(Math.random() * (this.end.length));
        newQuote = (`"${this.beginning[theBeg]}  ${this.middle[theMid]}  ${this.end[theEnd]}"`);
        return newQuote;
    }
};

const human = Object.create(Quotes);
human.init([
        "Work hard stay discipline",
        "Falling sick",
        "Be a good person",
        "Stan hopes to"
    ],
    [
        "and be patient,",
        "does not mean",
        "but don\'t waste your time",
        "register for"
    ],
    [
        "on the table",
        "you are about to die",
        "to prove it",
        "class before the deadline"
    ]);

const animal = Object.create(Quotes);
animal.init(
    [
        "The cat",
        "The dog",
        "The tiger"
    ],
    [
        "ran",
        "eat",
        "has"
    ],
    [
        "around the tree",
        "the bones",
        "a long nails"
    ]
);



