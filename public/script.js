function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var toggleButton = document.querySelector(".toggle-password");
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      toggleButton.innerHTML = "&#128064;";
    } else {
      passwordInput.type = "password";
      toggleButton.innerHTML = "&#128065;";
    }
  }

// On récupère le formulaire
const form = document.querySelector('form');

// On écoute l'événement "submit" du formulaire
form.addEventListener('submit', (event) => {
	// On empêche le comportement par défaut du formulaire (rechargement de la page)
	event.preventDefault();

	// On récupère les 6 inputs de type "text"
	const inputs = document.querySelectorAll('input[type="text"]');

	// On vérifie que les 6 inputs sont remplis
	let code = '';
	for (let i = 0; i < inputs.length; i++) {
		if (inputs[i].value === '') {
			alert('Veuillez remplir tous les champs.');
			return;
		}
		code += inputs[i].value;
	}

	// On affiche le code récupéré
	alert(`Le code récupéré est : ${code}`);
});

  


  