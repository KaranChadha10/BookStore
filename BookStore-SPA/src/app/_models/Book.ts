export class Book{
    
        id: number;
        name: string;
        author: string;
        description: string;
        value: number;
        publishDate: any;
        categoryid: number;
        constructor(
            id: number,
              name: string, 
              author: string,
              description: string,
              value: number,
              publishDate: any,
              categoryid: number) {
                this.id = id;
                this.name = name;
                this.author = author;
                this.description = description;
                this.value = value;
                this.publishDate = publishDate;
                this.categoryid = categoryid;
            }
    
    }