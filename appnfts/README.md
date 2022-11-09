Pour ce TP, j'ai décidé de faire un site de minting de NFT. 

Lorsque le site est deployé, les utilisateurs ont donc la possibilités d'acheter des NFT avec des ethereum test 
qu'on peut obtenir gratuitement. (j'ai décidé d'utiliser comme réseau de test : Goerli )

Voici les instructions à suivre pour lancer l'application:

- cd appnfts
- npm install ethers hardhat @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers
- npm install @openzeppelin/contracts
- npx hardhat run scripts/deploy.js --network goerli
- npm start

