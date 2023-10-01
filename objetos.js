const jesus = {
    firstName: "Jesús",
    lastName: "Moreno",
    age: 28,

    getFirstName: function(){
        return this.firstName;
    },

    otra cosa

    console.log ("hola mundo");

    setFirstName: function (newFirstName){
        this.firstName = newFirstName;
    },

    getLastName: function() {
        return this.lastName;
    },

    getName: function(){
        return this.getFirstName() + "" + this.getLastName();
    }
}

jesus.setFirstName("Jesús Alejandro")
console.log(jesus.getName());