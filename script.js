document.querySelector(".menu").addEventListener("click",function(){
    this.classList.toggle("open");
    document.querySelector(".navigation-container").classList.toggle("open");
});

const container = document.querySelectorAll(".product , .company , .connect");

container.forEach(element=>{
    element.addEventListener("click",()=>{
        element.parentElement.querySelector(".options-list").classList.toggle("open");
    });
});