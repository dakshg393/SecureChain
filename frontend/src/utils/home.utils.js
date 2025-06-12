const NavItems = [
    { name:"Home" , path:""},
    {name:"Features" , path:"/features"},
    {name:"Upload" , path:"/upload"},
    {name:"Verify" , path:"/verify"},
    {name:"Security" , path:"/security"},
    {name:"Technology" , path:"/technology"},
    {name:"FAQ" , path:"/faq"},
    {name:"Contact" , path:"/contact"}
]



const features = [
  {
    icon: "🦊", // Placeholder (e.g., Metamask icon)
    title: "MetaMask Authentication",
    description: "Users securely log in using MetaMask wallet, enabling blockchain-based identity verification."
  },
  {
    icon: "📤", // Upload icon
    title: "Document Upload",
    description: "Users can upload documents, which are hashed and stored via Solidity smart contract on the blockchain."
  },
  {
    icon: "🔐", // Lock icon
    title: "Secure Hash Generation",
    description: "Each document is converted into a unique SHA-256 hash, ensuring tamper-proof verification."
  },
  {
    icon: "✅", // Check icon
    title: "Blockchain Verification",
    description: "Anyone can verify a document by entering the hash; if it matches a blockchain entry, it's confirmed authentic."
  },
  {
    icon: "🔎", // Search icon
    title: "Document Lookup",
    description: "Verified documents reveal metadata such as uploader’s address, document link, and upload timestamp."
  },
  {
    icon: "🛡️", // Shield icon
    title: "Decentralized & Trustless",
    description: "Built on Ethereum blockchain, eliminating the need for third-party verification and ensuring data integrity."
  }
];

export {NavItems,features}
