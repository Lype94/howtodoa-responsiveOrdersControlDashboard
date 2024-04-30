const ctx = document.getElementById('myChart');
const earning = document.getElementById('earning');

new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: ['Facebook', 'Amazon', 'Youtube'],
        datasets: [{
        label: 'Traffic Source',
        data: [1200, 1900, 300],
        backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
        ],
        }]
    },
    options: {
        responsive: true,
    }
});

new Chart(earning, {
    type: 'bar',
    data: {
        labels: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Ago',
            'Set',
            'Oct',
            'Nov',
            'Dec',
        ],
        datasets: [{
            label: 'Earning',
            data: [1200, 1900, 3000, 4320, 5500, 6500, 7800, 6000, 5570, 2340, 4000, 3500],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
        }]
    },
    options: {
        responsive: true,
    }
});