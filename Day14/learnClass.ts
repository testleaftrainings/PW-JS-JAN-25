class Browser{
    //properties of the class
    browserName:string="chrome"
    browserVersion:number=133

 // method   
      browserDetails(headless:boolean){
        console.log(`Browser information includes ${this.browserName} & ${this.browserVersion}, ${headless}`)
      }
}
//this -->refered to current class property/method
//object to be created to access the class property and method
//syntax:
//variablename=new ClassName() //constructor -to allocate memory for the class members
const browserInfo=new Browser()
//use variablename.property /methodName()
browserInfo.browserDetails(false)