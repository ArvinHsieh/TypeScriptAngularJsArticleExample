module ExampleApp.Models {

    export class HelloWorldViewModel {
        public Message: string;
        public BookInfo: Book;
    }

    export class Book {
        public ID: string;
        public BookName: string;
        public BookAuthor: string;
    }
}

