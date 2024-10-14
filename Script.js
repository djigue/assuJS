document.getElementById('formulaire').addEventListener('submit', function(event) {
       
    const age = document.getElementById('age').value;
    const permis = document.getElementById('permis').value;
    const accident = document.getElementById('accident').value;
    const duree = document.getElementById('duree').value;
    
    console.log(age);
    console.log(permis);
    console.log(accident);
    console.log(duree);

    if (isNaN(age) || isNaN(permis) || isNaN(accident) || isNaN(duree)) {
        alert("T'ES CON OU QUOI? on veut des nombres!!!!!");
        return;   
    }

    if  (age >= 25 && permis >= 2 && accident == 2 && duree >= 1) {
       alert("votre tarif est le C");
    }else if (age >= 25 && permis >= 2 && accident == 1 && duree >= 1) {
       alert("votre tarif est le B");
    }else if (age >= 25 && permis >= 2 && accident == 0 && duree >= 1) {
       alert("votre tarif est le A");
    }else if (age >= 25 && permis >= 2 && accident == 1 && duree >= 1) {
       alert("votre tarif est le C");
    }else if (age >= 25 && permis >= 2 && accident == 0 && duree >= 1) {
       alert("votre tarif est le B");
    }else if (age < 25 && permis >= 2 && accident == 1 && duree >= 1) {
       alert("votre tarif est le C");
    }else if (age < 25 && permis >= 2 && accident == 0 && duree >= 1) {
       alert("votre tarif est le B");
    }else if (age < 25 && permis < 2 && accident == 0 && duree >= 1) {
       alert("votre tarif est le C");
    }else if (age < 25 && permis <2 && accident==0) {
        alert("Votre tarif est le D");
    } else if (age < 25 && permis >=2 && accident == 0) {
        alert("votre tarif est le C");
    }else if (age >= 25 && permis < 2 && accident == 0) {
        alert("votre tarif est le C");
    }else if (age < 25 && permis >=2 && accident == 1) {
        alert("votre tarif est le D");
    }else if (age >= 25 && permis < 2 && accident == 1) {
        alert("votre tarif est le D");
    }else if (age >=25 && permis >= 2 && accident == 0) {
        alert("votre tarif est le B");
    }else if (age >= 25 && permis >= 2 && accident == 1) {
        alert("votre tarif est le C");
    }else if (age >= 25 && permis >= 2 && accident == 2) {
        alert("votre tarif est le D");
    }else {
        alert("Vous ne savez pas conduire hors de question qu'on vous assure");
    }

 });

