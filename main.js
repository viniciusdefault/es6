class List {
    constructor() {
        this.data = [];
    }
    add(data) {
        this.data.push(data);
        console.log(this.data)
    }
}
class TodoList extends List {
    constructor() {
        super();

        this.usuario = "ronaldinho";
        
    }
    MostraUsuario() {
        console.log(this.usuario)
    }    
}

const minhaLista = new TodoList();

document.querySelector(".newtodo").onclick = function () {
    minhaLista.add("novo todo");
}

minhaLista.MostraUsuario();

