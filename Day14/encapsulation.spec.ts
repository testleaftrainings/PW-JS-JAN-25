class LoginCredentials{

 public username:string
 private password:string

constructor(){
    this.username="admin"
    this.password="user123"
}

 public get readData(){
    return this.password
 }

 public set writeData(pword:string){
     this.password=pword
 }

}

const credentials=new LoginCredentials()
let pwd=credentials.readData
console.log(pwd)
credentials.writeData="admin345"
console.log(credentials.readData)