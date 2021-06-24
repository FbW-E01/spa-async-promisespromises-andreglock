// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/


// \/ All of your javascript should go here \/
console.log('test');

setTimeout(() => {
    const modal = document.getElementById("myModal");
    modal.style.display = "block";
}, 60000);

const close = document.querySelector("span.close");

close.addEventListener("click", () => {
    document.getElementById("myModal").style.display = "none";
});
