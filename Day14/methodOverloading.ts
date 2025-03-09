class ElementAction{

    public clickEle(locatorValue:string):void

    public clickEle(locatorValue:string,forceClick:boolean)

    
    public clickEle(locatorValue:string,forceClick?:boolean){
      if(forceClick==true){
        console.log("The element is clicked forcefully")
      }else{
        console.log("Element clicked normally")
      }

    }

}

const ol=new ElementAction()
ol.clickEle("text=CRM",true)
ol.clickEle("text=Leads")