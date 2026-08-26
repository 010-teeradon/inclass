interface StorageService{
    save(data:string):void;
    load():string;
}
class CloudStorage implements StorageService{
    private _data:string;
    save(data:string):void{
        this._data = data;
    }
    load():string{
        return this._data;
    }
}
const storage1= new CloudStorage();
storage1.save("fsdjf sd lksjf;s df;lsjdf;l ;fasjl");
console.log(storage1.load());