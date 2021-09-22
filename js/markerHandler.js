AFRAME.registerComponent("markerhandler",{
    init:async function(){
        
        this.el.addEventListener("markerFound",()=>{
            this.handleMarkerFound();
        })

        this.el.addEventListener("markerLost",()=>{
            this.handleMarkerLost();
        })
    },

    handleMarkerFound :function(){
        var buttonDiv = document.getElementById("button-div");
        buttonDiv.style.display = "flex";

        var orderButton = document.getElementById("order-button");
        var orderSummaryButton = document.getElementById("order-summary-button");

        orderButton.addEventListener("click",function(){
            swal({
                icon:"https://i/imgur.com/4NZ6uLY.jpg",
                title:"Thank you for your order!",
                text:" ",
                timer: 2000,
                buttons: false
            });
        });

        orderSummaryButton.addEventListener("click",()=>{
            swal({
                icon:"warning",
                title:"Order Summary",
                text:"Work in Progress"
            });
        });
    },

    handleMarkerLost :function(){
        var buttonDiv = document.getElementById("button-div");
        buttonDiv.style.display = "none";
    }
})