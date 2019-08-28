console.log("event-listeners");

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += textToPrint;
};

var pies = [
    {
        name: 'Dutch Apple Pie',
        image: 'https://live.staticflickr.com/5309/5697773509_25ec2b64e5_b.jpg',
        instructor: 'Zoe'
    },
    {
        name: 'Berry Pie',
        image: 'https://live.staticflickr.com/5255/5565910047_529f3db320_b.jpg',
        instructor: 'Zoe'
    },
    {
        name: 'Pumpkin Pie',
        image: 'https://live.staticflickr.com/4066/5076305261_09d8a88051_b.jpg',
        instructor: 'Callan'
    },
    {
        name: 'Pecan Pie',
        image: 'https://live.staticflickr.com/59/154845433_c0d558176c_b.jpg',
        instructor: 'Callan'
    },
    {
        name: 'Key Lime Pie',
        image: 'https://live.staticflickr.com/3565/3463369494_6c0d7daac7.jpg',
        instructor: 'Michael'
    },
    {
        name: 'Shoe Fly Pie',
        image: 'https://live.staticflickr.com/3435/3859525186_53661aa1ae_b.jpg',
        instructor: 'Michael'
    },
    {
        name: 'Nothing',
        image: 'https://spectator.imgix.net/content/uploads/2017/03/iStock-175413535.jpg?auto=compress,enhance,format&crop=faces,entropy,edges&fit=crop&w=730&h=486',
        instructor: 'Greg'
    }
]

const printPies = (pieArr) => {
    for (let i = 0; i < pieArr.length; i++) {
        const pieCard = pieArr[i];
        const printPie = `
            <div class="thePie">
            <h3>${pieCard.name}</h3>
            <img src="${pieCard.image}" alt= "Image of ${pieCard.name}" />
            </div>
        `
        printToDom('pieDiv', printPie);
    };
    
};

// const printInstructors = (piePrefArr) => {
//     for (let i = 0; i < piePrefArr.length; i+=2) {
//         const pieNumber = piePrefArr[i];
//         const printButton = `
//             <button type="button" class="instructorName" id="${pieNumber.instructor}">${pieNumber.instructor}</button>
//         `
//         printToDom('instructorButtons', printButton);
//         document.getElementById(`${pieNumber.instructor}`).addEventListener('click', () => {
//             console.log('🐭');
//         } );
//     };
}


printPies(pies);
// printInstructors(pies);


