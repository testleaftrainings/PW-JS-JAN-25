class BrowserType{

    launchBrowser(){
        console.log("Launching chromeBrowser")
    }
}

class Browser extends BrowserType{

    launchBrowser(){
        super.launchBrowser()
        console.log("EdgeBrowser")
    }

}
const br=new Browser()
br.launchBrowser()