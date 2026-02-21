const form=document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const name = document.getElementById("name").value;
    const mobile = document.getElementById("mobileNumber").value;
    const weight = document.getElementById('weight').value
    const item=document.getElementById('item').value

    const message = `Hi, My name is ${name}. I want ${weight} of ${item}. My number is ${mobile}`;
    const encodedMessage = encodeURIComponent(message);

    const phoneNumber = "919634041253"; // replace with real number

    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
    
})
