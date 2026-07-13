/*=========================================
            VELORA LINK
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=====================================
            RIPPLE EFFECT
    =====================================*/

    document.querySelectorAll(".btn").forEach(button => {

        button.addEventListener("click", function(e){

            const circle = document.createElement("span");

            const diameter = Math.max(
                this.clientWidth,
                this.clientHeight
            );

            const radius = diameter / 2;

            circle.style.width = circle.style.height =
                `${diameter}px`;

            circle.style.left =
                `${e.clientX - this.getBoundingClientRect().left - radius}px`;

            circle.style.top =
                `${e.clientY - this.getBoundingClientRect().top - radius}px`;

            circle.classList.add("ripple");

            const ripple = this.querySelector(".ripple");

            if(ripple){

                ripple.remove();

            }

            this.appendChild(circle);

        });

    });

    /*=====================================
            PARALLAX
    =====================================*/

    const glow1 = document.querySelector(".glow1");
    const glow2 = document.querySelector(".glow2");

    document.addEventListener("mousemove",(e)=>{

        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        glow1.style.transform =
            `translate(${x*25}px,${y*25}px)`;

        glow2.style.transform =
            `translate(${-x*25}px,${-y*25}px)`;

    });

    /*=====================================
            LOGO EFFECT
    =====================================*/

    const logo = document.querySelector(".logo");

    logo.addEventListener("mouseenter",()=>{

        logo.style.transform="scale(1.05) rotate(-2deg)";

    });

    logo.addEventListener("mouseleave",()=>{

        logo.style.transform="scale(1) rotate(0deg)";

    });

    /*=====================================
            EXTERNAL LINKS
    =====================================*/

    document.querySelectorAll(".btn").forEach(btn=>{

        const href = btn.getAttribute("href");

        if(
            href &&
            href.startsWith("http")
        ){

            btn.setAttribute("target","_blank");

        }

    });

    /*=====================================
            BUTTON HOVER
    =====================================*/

    document.querySelectorAll(".btn").forEach(btn=>{

        btn.addEventListener("mouseenter",()=>{

            btn.style.transform="translateY(-5px) scale(1.01)";

        });

        btn.addEventListener("mouseleave",()=>{

            btn.style.transform="translateY(0) scale(1)";

        });

    });

});