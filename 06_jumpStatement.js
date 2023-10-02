//jump statment: break and continue and return

//1st break

for(let i=0;i<20;i++)
{
    console.log(`${i}`);
    if (i==10) {
        break;
    }
    console.log(`Logged Index Value `);
}

console.log("========================Continue =====================");
// 2nd Continue

//This Loop is executed even after giving this output 10
for(let i=0;i<20;i++)
{
    console.log(`${i}`);
    if (i==10) {
        continue;
    }
    console.log(`Logged Index Value `);
}

