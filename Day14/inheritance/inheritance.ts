class Login{
 username:string
 password:string

 constructor(){
    this.username="Ragavi"
    this.password="R234"
 }

  enterCredentials(){
    console.log(`Enterend the credentials as ${this.username} & ${this.password}`)
  }

  clickLogin(){
    console.log("Once login clicked , page should lan in welcomePage")
  }

}


class WelcomePage extends Login {

   clickCrmSFA(){
    console.log("Click CRMSFA")
   }
}

class HomePage extends WelcomePage{

    clickLeads(){
        console.log("clicked Leads module")
    }
}


//const  lp=new Login()
// const  wp=new WelcomePage()
// wp.enterCredentials()
// wp.clickLogin()
// wp.clickCrmSFA()

const hp=new HomePage()
hp.enterCredentials()
hp.clickLogin()
hp.clickCrmSFA()
hp.clickLeads()


class AccountsPage extends HomePage{

}

class LeadsPage extends HomePage{

}