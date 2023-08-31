document.addEventListener('DOMContentLoaded', function () {
    const rekinatButton = document.getElementById('rekinat');
    rekinatButton.addEventListener('click', kalkulacija);
});

function kalkulacija() {
    const cena = parseFloat(document.getElementById('cena').value);
    const nodoklis = parseFloat(document.getElementById('nod').value) || 0;
    const atlaide= parseFloat(document.getElementById('atl').value) || 0;

    const nodSumma = cena * (nodoklis / 100);
    const atlSumma = cena * (atlaide / 100);
    const kopaa = cena + nodSumma + atlSumma;

    const rezultElements = document.getElementById('result');
    rezultElements.textContent = `Kopējā cena: ${kopaa.toFixed(2)} EUR`;
}
