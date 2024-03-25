// Question 13
let transportation: string[]=[`Honda 125`,`Civic Reborn`,`Private jet`,`Dodge Challenger`];
for (let i=0; i<transportation.length; i++)
console.log(`I would like to own a `+ transportation[i]);

// Question 14
let invitation: string[]=[`Irfan`,`Mukhtiar`,`Shareefullah`];
for(let i=0; i<invitation.length; i++)
console.log(invitation[i]+`you are invited at dinner tonight`);

// Question 15
let notComing:string = "Irfan";
console.log(`${notComing} can't make it to dinner.`);

// Replace the guest
let newGuest = "Ali";
invitation[invitation.indexOf(notComing)] = newGuest;

// New invitations
invitation.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner tonight?`);
});