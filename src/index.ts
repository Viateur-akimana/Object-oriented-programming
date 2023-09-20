// //creating classes
// class Account {
//     //  readonly id:number;
//     // private owner:string;
// //    private  balance:number;
//     nickname?:string;
// //parameter proterties
//     constructor(
//         public readonly id:number,
//         private owner:string,
//         private balance:number
//         )
//         {
//         // this.id = id;
//         // this.owner = owner;
//         // this.balance = balance;
//     }
//     deposit(amount:number):void{
//         if(amount <= 0){
//             throw new Error("invalid amount");
//             this.balance +=amount;
            
//         }

//     }
//     get Balance():number {
//         return this.balance;
//     }
//     getOwner():string{
//         return this.owner;
//     }
// }
// //dealing with objects
// const account = new Account(1,"viateur",-70);
// console.log(account.balance)



//index signatures
// class SeatAssignment{
    // using index signatures
    // [SeatAssignment:string]:string;
// }
// 
// object for assigning more properties
// let seats = new SeatAssignment();
// seats.A1 = "viateur";
// seats.A2 = "fils";
// seats.A3 ="arsene";
// seats.A4 = "elite";
// 
// console.log(seats)


    //inheritance

class Person{
    constructor(public firstname:string,public lastname:string){

    }
    getFullname(){
        return this.firstname + " " + this.lastname;
    }
}

//derived classes 



class Student extends Person{
    constructor(public studentId:number, firstname:string,lastname:string){
        super(firstname,lastname)
    }
}

   //overriding


class Teacher extends Person{
   override getFullname(): string {
        return 'Tr'+ " " + this.firstname + " " + this.lastname;
    }
}   
let teacher = new Teacher("AKIMANA","Viateur");
console.log(teacher.getFullname())