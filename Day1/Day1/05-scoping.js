var genderType="female"  //global declaration


printGender()
function printGender(){  //for action 
     let color="brown"

      if(genderType.startsWith("female")){
        var age=30
        let color="pink" //block scoping
        console.log("She/ Her favourite" +color)
    }else{
        var age=35
        console.log("He/Him : " +color)
    }

    console.log(age)//outside block scope
}
console.log(genderType)

