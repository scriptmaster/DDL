document.addEventListener("deviceready", onDeviceReady, false);

    	function onDeviceReady(){
        
        window.requestFileSystem(
         LocalFileSystem.PERSISTENT, 0, 
         function onFileSystemSuccess(fileSystem) {
             window.currentDir = fileSystem.root.fullPath;
             window.fileSystem = fileSystem;
         }, fail);

    	}

    	function existsFile(fileName,dwdURL){
        
        fileSystem.root.getFile(fileName, {
            
            
            }, 
            function(f){
                
                console.log(f);
                
                 alert("file founded: " + f.toURI());
                 
                  showLink(f.toURI());
            },
            function(){
                window.confirm("would you like to download..?");
                
                    downloadFile(fileName,dwdURL);
            
            })

    	}

    	function downloadFile(fileName,dwdURL) {
        var fileTransfer = new FileTransfer();
        
        fileTransfer.download(dwdURL, 
        currentDir+"/"+fileName,
           function(theFile) {
           	
               alert("download complete: " + theFile.toURI());
               
               showLink(theFile.toURI());
           },
           function(error) {
           	
            alert("download error source " + error.source);
            alert("download error target " + error.target);
            alert("upload error code: " + error.code);
           });
    	}
 
    	function showLink(url){
        
        alert(url);
        
        //var ft=document.getElementById('playVideo');
        
        //ft.src=url;
        
        $(document).ready(function(){
                
                $("#pg_one").hide();
                
                $("#pg_two").show();
                
        });
       
 
    	}
     
 
    	function fail(evt) {
    		
        	console.log(evt.target.error.code);
    	}
    
    	$(document).ready(function(){
            
            $("#pg_two").hide();
            
            $("#b2p").click(function(){
            
            $("#pg_two").hide();
            
            $("#pg_one").show();
                    
            });
    	})
