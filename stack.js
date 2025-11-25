class Stack{

    constructor(){
        this.data ={};
        this.topIndex = -1;
    }

    push(element){
        this.topIndex++;
        this.data[this.topIndex] = element;
    }

    traverse(){
        let output = "";

        for(let i=0; i<=this.topIndex; i++){
            output += this.data[i] + " ";
        }

        console.log(output);
    }

    is_empty(){
        return this.topIndex === -1;
    }

    size(){
        return this.topIndex+1;
    }

    peek(){
        //Correcting Statement
        if(this.is_empty()) return null;
        return this.data[this.topIndex];
    }

    pop(){
        //Correcting Statement
        if(this.is_empty()) return null;

        let value = this.data[this.topIndex];
        delete this.data[this.topIndex];
        this.topIndex--;
        return value;
    }

}

module.exports = Stack; 