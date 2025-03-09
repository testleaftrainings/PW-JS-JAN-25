import test from '@playwright/test'
import { LeafTapsLogin } from './pwUseCase'
import { verifyPage } from './useCase2'

test(`Login with Leaftaps application`,async({page})=>{
      // const lp=new LeafTapsLogin(page)
      // await lp.launchApp()
      // await lp.verifyTitle()
      const vp=new verifyPage(page)
      await vp.launchApp()
      await vp.verifyTitle()
      await vp.verifyUrl()
 })
