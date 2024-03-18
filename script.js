document.addEventListener("DOMContentLoaded", function(){

var circularSwitch = document.getElementById("circularSwitch");
var switchContainer = document.getElementById("switchContainer");
var isRightAligned = false;
document.getElementById("monthlyPlan").style.color="var(--Purplish_blue)";
          circularSwitch.addEventListener("click", function() {
            if (isRightAligned) {
              switchContainer.style.textAlign = "left";
              document.getElementById("monthlyPlan").style.color="var(--Purplish_blue)";
              document.getElementById("yearlyPlan").style.color="var(--Cool_gray)";

            } else {
                switchContainer.style.textAlign = "right";
                document.getElementById("yearlyPlan").style.color="var(--Purplish_blue)";
                document.getElementById("monthlyPlan").style.color="var(--Cool_gray)";

          }
            isRightAligned = !isRightAligned;
        }); 

        var form = document.querySelectorAll('.tab');
        var nextBtn = document.querySelector('.next-btn');
        var prevBtn = document.querySelector('.prev-btn');
        var btnContainer = document.querySelector('.btn-in-step-3');
        var formActive=0;
    
        showForm(formActive);
    
        function showForm(n){
            form[n].classList.remove("hidden");
            form[n].classList.add("active");    
            if(n > 0){
           
                if(n < form.length){
                  prevBtn.classList.remove("hidden");
                }else{
                    prevBtn.classList.add("hidden");
                }
            }
            if(n === form.length-1){
                nextBtn.textContent = "Submit";
            }else{
                nextBtn.textContent = "Next";
            }
            if(n == 0){
                prevBtn.classList.remove("active");
                prevBtn.classList.add("hidden");
    
            }
            /* if(n == 2){
              btnContainer.style.bottom='3.9em';

            } */
           
         }
         nextBtn.addEventListener('click',function(){
          
            formActive++;
            showForm(formActive);
            form[formActive-1].classList.remove('active');
            form[formActive-1].classList.add("hidden");
         });
         prevBtn.addEventListener('click',function(){
            formActive--;
            showForm(formActive);
            form[formActive+1].classList.remove('active');
            form[formActive+1].classList.add("hidden");
         });
     
    



    
});

