function hasher(key,size){
    let hashedKey = 0
    for (let i = 0 ; i < key.length ; i++){
        hashedKey += key.charCodeAt(i)
    }
    return hashedKey%size
}


class HashTable{
    constructor(){
        this.size = 20;
        this.buckets = Array(this.size)
    }

    add(key,value){
        let index = hasher(key,this.size)
        this.buckets[index] = {[key]: value}
        return this;
    }

    remove(key){
        let index = hasher(key,this.size)
        delete this.buckets[index]
    }

    getItem(key){
        let index = hasher(key,this.size)
        return this.buckets[index]
    }

}