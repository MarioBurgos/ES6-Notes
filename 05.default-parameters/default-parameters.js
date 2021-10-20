function showMessage(firstname = "Guest") {
    return `Welcome back ${firstname}!`;
}

console.log(showMessage());
console.log(showMessage("Adell"));

/** */
// ES5 Code
function getUsers(page, results, gender, nationality) {
    var params = "";
    if (page === 0 || page) {
        params += `page=${page}&`;
    }
    if (results) {
        params += `results=${results}&`;
    }
    if (gender) {
        params += `gender=${gender}&`;
    }
    if (nationality) {
        params += `nationality=${nationality}`;
    }

    fetch('https://randomuser.me/api/?' + params)
        .then(function(response) {
            return response.json();
        })
        .then(function(result) {
            console.log(result);
        })
        .catch(function(error) {
            console.log('error', error);
        });
}

getUsers(0, 10, 'male', 'us');