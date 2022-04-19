
var name = prompt('Please insert your name ...');
var gender = prompt('Please insert your gender as (male OR female) ...');
var age = prompt('please insert your age ... ');
if (age <=0)
alert('Wrong number, please insert age again ...');
if (!( confirm('Do you want to skip the welcome message? ...')))
{
if (gender=='male'||gender=='Male')
alert('Welcome Mr '+ name+ ' to our website');
else if (gender=='female'||gender=='Female')
alert('Welcome Ms '+ name+ ' to our website');
else 
alert('Welcome '+ name+' to our website');
}
