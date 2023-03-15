const n=document.getElementById('name');
n.value=localStorage.getItem('name');
const d=document.getElementById('dob');
d.value=localStorage.getItem('dob');
const p=document.getElementById('phone');
p.value=localStorage.getItem('phone');
const e=document.getElementById('email');
e.value=localStorage.getItem('email');
const ps=document.getElementById('password');
ps.value=localStorage.getItem('password');


const value = document.querySelectorAll('.value');
const a = [localStorage.getItem('username'), localStorage.getItem('dob'), localStorage.getItem('phone'), localStorage.getItem('mail')]
value.forEach((element, i) => {
    element.value = a[i];
});

console.log(localStorage.getItem('username'));

function submit()
{
    document.getElementById("result").innerHTML="Saved successfully!!";
}