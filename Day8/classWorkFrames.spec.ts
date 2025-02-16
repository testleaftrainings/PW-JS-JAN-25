
import {expect, test} from "@playwright/test";

test(`Interact with Click me button inside frame`,async ({page}) => {

   await page.goto("https://leafground.com/frame.xhtml");

    const frame=page.frame({url:"https://leafground.com/default.xhtml"});

    const click1=await frame?.click("button#click");

    const afterclick=await frame?.getByRole("button",{name:'Hurray! You Clicked Me.'}).innerText();

  console.log(`after:${afterclick}`);
  

    expect(afterclick).toEqual('Hurray! You Clicked Me.');
})

test(`Get the total count of frames`,async ({page}) => {
  await page.goto("https://leafground.com/frame.xhtml");
  let countofFrames=page.frames().length;
  console.log(`Total frames:${countofFrames-1}`);
  

})

test(`Click Me inside nested frames`,async ({page}) => {
  await page.goto("https://leafground.com/frame.xhtml");

  const frame1=page.frame({url:"https://leafground.com/framebutton.xhtml"});
  const clickMe=await frame1?.click("button#Click");
  const afterclick1=await frame1?.getByRole("button",{name:'Hurray! You Clicked Me.'}).innerText();
  console.log(`after click text:${afterclick1}`);

})