// const openmodal = document.getElementById('USERS')
// const modal = document.getElementById('modal')
// const closemodal = document.getElementById('close')
// const sumbit = document.getElementById('Sumbitbtn')
// const name = document.getElementById()


// openmodal.addEventListener('click' , () => {
// modal.classList.toggle('hidden')

// })
// closemodal.addEventListener('click' , () => {
//     modal.classList.toggle('hidden')
    
//     })

//     sumbit.addEventListener('click' , () =>
//     {

//     })
const btnadd = document.getElementById('USERS');
const Name = document.getElementById('first_name');
const lastName = document.getElementById('last_name');
const markBal = document.getElementById('company');
const submitBtn = document.getElementById('submit');
const closeBtn = document.getElementById('close');
const modal = document.getElementById('modal');
const tbody = document.getElementById('tbody');

btnadd.addEventListener('click', () => {
    modal.classList.toggle('hidden');
});

closeBtn.addEventListener('click', () => {
    modal.classList.toggle('hidden');
});

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const mark = parseFloat(markBal.value);
    const percentage = (mark / 150) * 100;
    const status = percentage >= 50 ? 'Pass' : 'Fail';
    const statusColor = status === 'Pass' ? '#438059' : '#FF0000'; // Green for Pass, Red for Fail

    tbody.innerHTML += `
    <tr class="bg-white border-b">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  max-[700px]:px-1 max-[700px]:text-[12px]  ">
            ${mark}
        </th>
        <td class=" text px-6 py-4  max-[700px]:px-1 max-[700px]:text-[12px]">${Name.value} ${lastName.value}</td>
        <td class="text px-6 py-4  max-[700px]:px-1 max-[700px]:text-[12px]">${new Date().toLocaleDateString()}</td>
        <td class="text px-6 py-4  max-[700px]:px-1 max-[700px]:text-[12px]">${percentage.toFixed(2)}%</td>
        <td class="text px-6 py-4  max-[700px]:px-1 max-[700px]:text-[10px]">
            <button class="text  pt-[7px] pb-[8px] pl-[15px] pr-[15px] text-[#fff] rounded-[9px] max-[700px]:text-[10px]" style="background-color: ${statusColor}">
                ${status}
            </button>
        </td>
        <td class=" px-6 py-4  max-[700px]:px-1 max-[700px]:text-[10px]">
            <div class=" w-[39px] h-[39px] rounded-[5px]">
                <button class="btn-two hover:bg-[#808080] hover:text-white hover:ease-[.5s]  " style="border:2px solid gray;padding: 9px 8px 9px 8px;border-radius: 5px; "><i class="fa-solid fa-pen"></i></button>
            </div>
        </td>
        <td class="px-6 py-4  max-[700px]:px-1 max-[700px]:text-[10px]">
            <div class="dfgg w-[39px] h-[39px] rounded-[5px]">
                 <button class="btn "><i class="fa-solid fa-trash "></i></button>
            </div>
        </td>
    </tr>
    `;

    // Reset the input fields
    Name.value = '';
    lastName.value = '';
    markBal.value = '';

    modal.classList.toggle('hidden');
});






    
