
var name = prompt('Please insert your name ...');
var gender = prompt('Please insert your gender as (male OR female) ...');
var age = prompt('please insert your age ... ');
if (age <=0)
alert('Wrong number, please insert age again ...');
var welcome = confirm('Do you want to skip the welcome message? ...');
if (welcome=='no'||welcome=="No")
{
if (gender=='male')
alert('Welcome Mr '+ name+ ' to our website');
else if (gender=='female'||gender=='Female')
alert('Welcome Ms '+ name+ ' to our website');
}
else 
alert('Welcome '+ name+' to our website');