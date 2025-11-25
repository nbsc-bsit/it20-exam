// Array.js
class MyArray {

    constructor(initialData = []){
        this.data = {};
        this.length = 0;

        for(let i = 0; i < initialData.length; i++){
            this.data[i] = initialData[i];
            this.length++;
        }
    }

    traverse(){
        let output = "";
        for(let i = 0; i < this.length; i++){
            output += this.data[i] + " ";
        }
        console.log(output);
    }

    insert(index, element){
        if(index < 0 || index >= this.length){
            console.log("Invalid Index");
            return;
        }

        for(let i = this.length; i > index; i--){
            this.data[i] = this.data[i - 1];
        }

        this.data[index] = element;
        this.length++;
    }

    delete(index){
        if(index < 0 || index >= this.length){
            console.log("Invalid Index");
            return;
        }

        for(let i = index; i < this.length; i++){
            this.data[i] = this.data[i + 1];
        }

        delete this.data[this.length - 1];
        this.length--;
    }

    update(index, element){
        if(index < 0 || index >= this.length){
            console.log("Invalid Index");
            return;
        }
        this.data[index] = element;
    }

    search(element){
        for(let i = 0; i < this.length; i++){
            if(this.data[i] === element){
                console.log(`${element} is found at index ${i}`);
                return i;
            }
        }

        console.log(`${element} is not found at any index`);
        return -1;
    }
}

module.exports = MyArray;   // <--- EXPORT
