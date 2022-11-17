let laMevaData = new Date();

    let horas = laMevaData.getHours();
    let minutos = laMevaData.getMinutes();
    let segundos = laMevaData.getSeconds();

    horas = 0;
    minutos = 0;
    segundos = 0;


cdocument.write(horas + ':' + minutos + ":" + segundos);