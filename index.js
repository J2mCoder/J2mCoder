const jsonfile = require('jsonfile')
const moment = require('moment')
const simpleGit = require('simple-git')

const FILE_PATH = './data.json'

const makecommits = (x, y) => {
  const DATE = moment().subtract(1, 'y').add(1, 'd').add(x, 'w').add(y, 'y').format()
  const date = {
    date: DATE
  }
  jsonfile.writeFile(FILE_PATH, date, () => {
    const git = simpleGit();
    git.add('./*')
      .commit("jD " + DATE, { '--date': DATE })
      .push()
  })
}

makecommits(3, 4)
makecommits(3, 4)
makecommits(3, 4)
makecommits(3, 4)




/* const tokenGithub = "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";
const nomUtilisateur = "J2mCoder";
const nomDepot = "J2mCoder";
const nomNouvelleBranche = "profiles";
const cheminFichierYaml = "./.github/workflows/main.yml";
const urlBranche = `https://api.github.com/repos/${nomUtilisateur}/${nomDepot}/git/refs`;
const payloadBranche = {
  ref: `refs/heads/${nomNouvelleBranche}`,
  sha: "SHA_DE_LA_BRANCHE_PRINCIPALE"
};
const headers = {
  Authorization: `token ${tokenGithub}`,
  "Content-Type": "application/json"
};
function creerCommitAutomatique() {
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
}

setInterval(creerCommitAutomatique, 1000);

 */