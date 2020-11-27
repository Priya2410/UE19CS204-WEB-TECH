//third party module
//express-file-upload
//simple middleware for uploading files
//when you upload a file it will be accessible from request.files
// how to access the form element request.files.name (the name property in input tag)

/* Different properties request.files.foo.name (name of the file is shown)
request.files.foo.mv to move the file */

/* <input type="file" name="ipfile">
request.files.ipfile.mv(location,callback function) move the file anywhere in the server
request.files.ipfile.name
*/

var express = require('express')
var app=express() // Start the express server 
var fileUpload=require('express-fileupload')
app.use(fileUpload()); // Third party middleware // populates request.files object

//Since we are updating data
app.post('/upload',function(request,response){
    if(!request.files)
    {
        //If there are no files send this status with message to the client
       return response.status(400).send("No files");
    }
    else
    {
        /* ipfile.type use if condition with this to upload file of a particular type */
        var ipfile = request.files.ipfile; //file that has been uploaded by the user
        /* Different properties */
        console.log(ipfile.name) /*afll unit 3.pdf*/
        console.log(ipfile.size) /* 4688476 */
        console.log(ipfile.data) /* <Buffer 25 50 44 46 2d 31 2e 33 0a 25 c4 e5 f2 e5 eb a7 f3 a0 d0 c4 c6 0a 34 20 30 20 6f 62 6a 0a 3c 3c 20 2f 4c 65 6e 67 74 68 20 35 20 30 20 52 20 2f 46 69 ... 4688426 more bytes> */
        ipfile.mv('./files/'+ipfile.name,function(err){
            if(err)
            return response.status(500).send('Couldnt save the files');
            else
            {
                response.send('Saved successfully!');
            }
        })
    }
})
//This has the html content
app.get("/form",function(req,res){//http://localhost:3000/form
            res.send("<form action='http://localhost:3000/upload' method='post' encType='multipart/form-data'><input type='file' name='ipfile'/> <input type='submit' value='Upload File'/>  </form>")
})
app.listen(3000,function()
{
    console.log("Server is listening on port 9000");
})