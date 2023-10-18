function submitData(name, email){
    const formData = {name: name,
    email: email,};

    const configurationData = {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(formData),
    };

    return fetch("http://localhost:3000/users", configurationData)
    .then(function(response){
        return response.json();
    })
    .then(function(object){
        return object.id;
    });
}
