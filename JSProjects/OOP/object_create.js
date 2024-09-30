// object of protos

const bookProtos = {

    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`
    },

    fullYear: function (){
        const currentYear = new Date().getFullYear() - this.year;
        return `${book2.title} has been in the market for ${currentYear} years.`
    },
};

const book1 = Object.create(bookProtos, {
    title: {value:"Book One"},
    author: {value:"Blank"},
    year: {value:"2020"},
});
