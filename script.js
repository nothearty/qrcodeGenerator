const url_input = document.getElementById('url-input');
const generate_btn = document.querySelector('.generate-btn');
const download_btn = document.querySelector('.fa-solid');
const qr_img = document.getElementById('qr-img');
const container = document.querySelector('.container');


const sleep = ms => new Promise(r => setTimeout(r, ms));

console.log(generate_btn)
generate_btn.addEventListener('click', () => {
    console.log("ciao")
    const url = url_input.value;
    if (url === '') {
        return alert('Please enter a URL');
    }

    url_input.value = '';
    container.style.height = "400px";
    sleep(200).then(() => {
        set_style_to_image(`https://api.qrserver.com/v1/create-qr-code/?size=720x720&data=${url}`);

    });

});


function downloadImage(imageSrc) {
    const imageUrl = imageSrc;

    const downloadLink = document.createElement('a');
    downloadLink.href = imageUrl;
    downloadLink.download = 'QRCODE.PNG';
    downloadLink.target = '_blank';
    downloadLink.click();
}



download_btn.addEventListener('click', () => {
    if (qr_img.src === '') {
        return alert('Please generate a QR code first');
    }
    downloadImage(qr_img.src)
});


function set_style_to_image(src) {
    qr_img.src = src;
    qr_img.style.transition = "0.2s";
    qr_img.style.width = "200px";
    qr_img.style.height = "200px";
    qr_img.style.border = "5px solid white";
    qr_img.style.borderRadius = "10px";
}