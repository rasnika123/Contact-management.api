constexpress=require('express'); constfs=require('fs'); constpath=require('path'); const app = express(); constPORT=3000; 
 
app.use(express.json()); app.use(express.static('public')); 
 
constdataFile=path.join(  dirname,'contacts.json'); 
 
//Readcontacts functionreadContacts(){ 
if(!fs.existsSync(dataFile))return[]; returnJSON.parse(fs.readFileSync(dataFile)); 
} 
 
 
//Writecontacts functionwriteContacts(data){ 
fs.writeFileSync(dataFile,JSON.stringify(data,null,2)); } 
//APIRoutes app.get('/api/contacts',(req,res)=>{ 
res.json(readContacts()); 
}); 
app.post('/api/contacts',(req,res)=>{ 
const contacts = readContacts(); 
const { name, email, phone } = req.body; 
if(!name||!email||!phone){ 
returnres.status(400).json({message:"Allfieldsrequired"}); } 
 
constnewContact={id:Date.now(),name,email, phone}; contacts.push(newContact); writeContacts(contacts); res.status(201).json(newContact); 
}); 
 
app.put('/api/contacts/:id',(req,res)=>{ 
const contacts = readContacts(); constid=parseInt(req.params.id); 
constindex=contacts.findIndex(c=>c.id===id); if(index===-1)returnres.status(404).json({message:"Notfound" 
}); 
 
contacts[index] = { ...contacts[index], ...req.body }; 
writeContacts(contacts); 
res.json(contacts[index]); 
}); 
 
app.delete('/api/contacts/:id', (req, res) => { 
const contacts = readContacts(); constid=parseInt(req.params.id); 
const updated = contacts.filter(c => c.id !== id); 
writeContacts(updated); res.json({message:"Contactdeleted"}); 
}); 
 
app.listen(PORT,()=>console.log(`🚀Serverrunningon http://localhost:${PORT}`)); 
