// function fact()
// {
//     var fact=1;
//     var f=document.getElementById("text1").value;
//     if(f==0||f==1)
//     {
//         document.getElementById("text2").value=f;
//     }
//     else
//     {
//         for(var i=2;i<=f;i++)
//         {
//             fact=fact*i;
//         }
//     }
//     document.getElementById("text2").value=fact;
// }

function check()
{
    var n= document.getElementById("value").value;
    let isprime=true;
    if(n==1)
    {
        isprime=true;
    }
    else{
        for(var i=2;i<=n-1;i++)
        {
            if(n%i==0){
                isprime=false;
                break;
            }
        }
    }
    if(isprime==true)
    {
        document.getElementById("result").innerHTML=n +' is prime number';
    }
    else{
        document.getElementById("result").innerHTML=n +' is not prime number';
    }
}