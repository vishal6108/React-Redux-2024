class Todo {
    id: string;
    text: string;

    constructor(todoTxtVal:string){
        this.text = todoTxtVal;
        this.id = new Date().toISOString();
    }
}

export default Todo;

