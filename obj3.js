function Person(fname, lname)
{
this.fname=fname;

this.lname=lname;
this.print= function()
{
    console.log(this.fname);
    console.log(this.lname);
}
}
var person= new Person("Amitabh", "Bacchan");
var person2= new Person("Abhishek", "Bacchan");
person.print();
person2.print();
