const  { faker } = require ('@faker-js/faker') ;
const express = require("express");
const app = express();
const PORT =8000;


app.get('/api/user/new',(request,responce)=>{
    responce.send(newuser)
});

app.get('/api/company/new',(request,responce)=>{
    responce.send(company)
});

app.get('/api/user/company',(request,responce)=>{
    responce.json({company,newuser})
});

const server= app.listen(PORT,()=>{console.log(`this is server running `);})

class User {
    constructor(){
        this.password=faker.internet.password()
        this.email=faker.internet.email()
        this.phoneNumber=faker.phone.number()
        this.lastName=faker.name.lastName()
        this.firstName=faker.name.firstName()
        this.id=faker.datatype.uuid()
    } 
};
class Company{
    constructor(){
        this.id=faker.datatype.uuid()
        this.name=faker.company.name()
        this.address={
            street:faker.address.street(),
            city:faker.address.cityName(),
            state:faker.address.state(),
            zipCode:faker.address.zipCode(),
            country:faker.address.county()
        }
    }
}

const newuser = new User();
const company=new Company();