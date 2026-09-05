interface StorageService{
    save(data: string):void;
    load(): string;
}
class CloudStorage implements StorageService{
    private data: string = "";
    save(data:string):void{
        this.data=data;
        console.log(`[Cloud] บันทึกข้อมูล "${data}" ไปยัง Server เรียบร้อย`);
    }
    load(): string{
        return `[Cloud Data]: ${this.data}`;
    }
}
class LocalStorage implements StorageService{
    private data: string = "";
    save(data:string):void{
        this.data=data;
        console.log(`[Local] บันทึกข้อมูล "${data}" ลงเครื่องเรียบร้อย`);
    }
    load(): string{
        return `[Local Data]: ${this.data}`;
    }
}
function main() {
  let storage: StorageService;
  storage = new CloudStorage();
  storage.save("User Profile Data");
  console.log(storage.load());
  console.log("-------------------");
  storage = new LocalStorage();
  storage.save("User Profile Data");
  console.log(storage.load());
}
main();