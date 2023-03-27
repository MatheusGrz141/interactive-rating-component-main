class Controller{ 
    
    constructor(){
     
        this.bind();
    }
    
    bind(){
        
        document.querySelectorAll(".optiion").forEach(EditIndex => {
            EditIndex.addEventListener('click' ,(e) => {
                this.EditIndex(e.target)

            })
            
        })
        document.querySelector("#submit").addEventListener('click' , (e) => {   
            this.Submit(e.target);
        })
    }
    
    Submit(targetButton){ 
        
        let botaoIndex  = new Model(targetButton).getModel; 
        let newHtml= new View(botaoIndex);
       
        document.querySelector('main').innerHTML= newHtml.Template();
    }
    EditIndex(targetButton){
        let botaoIndex  = new Model(targetButton).getModel

        document.querySelector("#butonSubmit").innerHTML = `
         <button data-index="${botaoIndex} " id="submit" >Submit</button>`
         this.bind();
    }
    
}
