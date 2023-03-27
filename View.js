class View{

    constructor(index ){
        this.index = index;
       
    }

    Template(){
        return  `  <main class="thanks">
        <img src="images/illustration-thank-you.svg" alt="">
        <p>You selected  ${this.index}  out of 5</p>
        <h1>Thank you!</h1>
        <p>We appreciate you taking the time to give a rating. If you ever need more support, 
        don’t hesitate to get in touch!</p>   </main>
        `;
    }
}