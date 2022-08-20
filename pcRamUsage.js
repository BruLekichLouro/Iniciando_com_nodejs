const os= require('os');

const { arch , platform, totalmem, freemem} = os;

const stats = {
    OS: platform(),
    Arch: arch(),
    TotalRam: totalmem(),
    FreeRam: freemem(),
}

console.log(stats);