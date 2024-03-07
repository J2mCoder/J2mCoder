// Remplacez ces valeurs par vos informations GitHub
const tokenGithub = "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";
const nomUtilisateur = "J2mCoder";
const nomDepot = "J2mCoder";
const nomNouvelleBranche = "profiles";
const cheminFichierYaml = "./.github/workflows/main.yml";

// Créez une nouvelle branche à partir de la branche principale
const urlBranche = `https://api.github.com/repos/${nomUtilisateur}/${nomDepot}/git/refs`;
const payloadBranche = {
  ref: `refs/heads/${nomNouvelleBranche}`,
  sha: "SHA_DE_LA_BRANCHE_PRINCIPALE"
};
const headers = {
  Authorization: `token ${tokenGithub}`,
  "Content-Type": "application/json"
};

fetch(urlBranche, {
  method: "POST",
  body: JSON.stringify(payloadBranche),
  headers: headers
})
  .then(response => response.json())
  .then(data => {
    if (data.ref) {
      console.log(`Nouvelle branche '${nomNouvelleBranche}' créée avec succès !`);
      const urlPullRequest = `https://api.github.com/repos/${nomUtilisateur}/${nomDepot}/pulls`;
      const payloadPullRequest = {
        title: "Ajout du jeu de serpent",
        head: nomNouvelleBranche,
        base: "main", // Branche principale
        body: "Voici le jeu de serpent généré à partir des contributions GitHub."
      };

      fetch(urlPullRequest, {
        method: "POST",
        body: JSON.stringify(payloadPullRequest),
        headers: headers
      })
        .then(response => response.json())
        .then(data => {
          if (data.html_url) {
            console.log(`Pull request créée avec succès !`);
          } else {
            console.error(`Erreur lors de la création de la pull request : ${data.message}`);
          }
        })
        .catch(error => {
          console.error(`Erreur lors de la création de la pull request : ${error.message}`);
        });
    } else {
      console.error(`Erreur lors de la création de la branche : ${data.message}`);
    }
  })
  .catch(error => {
    console.error(`Erreur lors de la création de la branche : ${error.message}`);
  });
