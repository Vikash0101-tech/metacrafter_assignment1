/*
------------------------------Assessment Requirements ----------------------------------
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
 

create a variable to hold your NFT's

 this function will take in some values as parameters, create an
 NFT object using the parameters passed to it for its metadata, 
 and store it in the variable above.
function mintNFT () {

}

 create a "loop" that will go through an "array" of NFT's
 and print their metadata with console.log()
function listNFTs () {

}

 print the total number of NFTs we have minted to the console
function getTotalSupply() {

}

 call your functions below this line

*/
 

 // Step 1: Create a class to hold your NFTs
class NFTContract {
    constructor() {
        this.nfts = [];
    }

    // An array is the type of variable that has the capacity to store several NFTs. We can maintain track of all minted NFTs in an ordered collection by using an array, which is appropriate because it can store numerous NFT objects.

    // Step 2: Function to create a new NFT
    mintNFT(name, description, attribute1, attribute2) {
        const newNFT = {
            name: name,
            description: description,
            owner: 'creator', // Assuming 'creator' as the owner for simplicity
            metadata: {
                attribute1: attribute1,
                attribute2: attribute2
            }
        };
        this.nfts.push(newNFT);
    }

    // Step 3: Function to list all NFTs
    listNFTs() {
        for (let i = 0; i < this.nfts.length; i++) {
            const nft = this.nfts[i];
            console.log(`Name: ${nft.name}`);
            console.log(`Description: ${nft.description}`);
            console.log(`Owner: ${nft.owner}`);
            console.log(`Metadata: ${JSON.stringify(nft.metadata)}`);
            console.log("--------------------");
        }
    }

    // Step 4: Function to get the total supply of NFTs
    getTotalSupply() {
        return this.nfts.length;
    }
}

// Create a new instance of the NFTContract class
const nftContract = new NFTContract();

// Call the mintNFT function to create some NFTs
nftContract.mintNFT("NFT 1", "This is the first NFT", "Attribute 1", 1);
nftContract.mintNFT("NFT 2", "This is the second NFT", "Attribute 2", 2);
nftContract.mintNFT("NFT 3", "This is the third NFT", "Attribute 3", 3);

// Call the listNFTs function to print the metadata of all NFTs
nftContract.listNFTs();

// Call the getTotalSupply function to print the total number of NFTs
console.log(`Total supply of NFTs: ${nftContract.getTotalSupply()}`);
