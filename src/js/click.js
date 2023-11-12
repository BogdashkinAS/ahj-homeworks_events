export default function elementClick(timer) {
    const count = document.getElementById('count');
    const count2 = document.getElementById('count2');
    const itemArray = Array.from(document.querySelectorAll(".square"));
    let endCount = 0;
    
    for (const el of itemArray) {
        el.addEventListener("click", (event) => {
            const e = event.target.closest(".square");
            if (e.className === 'square active') {
                count.textContent = Number(count.textContent) + 1;
            } else {
                endCount++;
                count2.textContent = Number(count2.textContent) + 1;
                if (endCount >= 5) {
                    clearInterval(timer);
                    alert('Вы проиграли !!!');
                }
            }
        });
    }
}