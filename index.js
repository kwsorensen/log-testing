
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

console.log ('logging started')

LOG_BASE_NAME = process.env.LOG_BASE_NAME || "base_log"
LOOP_COUNT =  Number( process.env.LOOP_COUNT || "100")
DELAY_MS = Number(process.env.DELAY_MS || "250")

for (i=0; i<LOOP_COUNT; i++) {
    console.log(`${LOG_BASE_NAME} ${i}`)
    sleep(DELAY_MS)
}

