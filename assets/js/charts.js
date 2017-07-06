if ('undefined' !== typeof module) {

    module.exports = function initDemo(graficos) {
        /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */
        // var retorno;
        // $.ajax({
        //     url: "https://sitesuberlandia.com.br/public/api/produtos-mes", success: function (result) {
        //         retorno = result;
        //     }
        // });

        dataDailySalesChart = {
            labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J','A','S',"O",'N','D'],
            series: [
                graficos.produtos
            ]
        };


        optionsDailySalesChart = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            low: 0,
            high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
            chartPadding: {top: 0, right: 0, bottom: 0, left: 0},
        }

        var dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

        md.startAnimationForLineChart(dailySalesChart);

        /* ----------==========     Daily Sales Chart initialization    ==========---------- */
        if (graficos.produtos) {
            console.log(graficos.produtos);
            dataDailySalesChart = {
                labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J','A','S',"O",'N','D'],
                series: [
                    graficos.produtos
                ]
            };

            optionsDailySalesChart = {
                lineSmooth: Chartist.Interpolation.cardinal({
                    tension: 0
                }),
                low: 0,
                high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
                chartPadding: {top: 0, right: 0, bottom: 0, left: 0},
            }

            var dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

            md.startAnimationForLineChart(dailySalesChart);
        }


        /* ----------==========     Completed Tasks Chart initialization    ==========---------- */

        dataCompletedTasksChart = {
            labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J','A','S',"O",'N','D'],
            series: [
                graficos.score
            ]
        };

        optionsCompletedTasksChart = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 10000
            }),
            low: 0,
            high: 100000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
            chartPadding: {top: 0, right: 0, bottom: 0, left: 0}
        }

        var completedTasksChart = new Chartist.Line('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);

        // start animation for the Completed Tasks Chart - Line Chart
        md.startAnimationForLineChart(completedTasksChart);


        /* ----------==========     Emails Subscription Chart initialization    ==========---------- */

        var dataEmailsSubscriptionChart = {
            labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J','A','S',"O",'N','D'],
            series: [
                graficos.pedidos

            ]
        };
        var optionsEmailsSubscriptionChart = {
            axisX: {
                showGrid: false
            },
            low: 0,
            high: 50,
            chartPadding: {top: 0, right: 5, bottom: 0, left: 0}
        };
        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                seriesBarDistance: 5,
                axisX: {
                    labelInterpolationFnc: function (value) {
                        return value[0];
                    }
                }
            }]
        ];
        var emailsSubscriptionChart = Chartist.Bar('#emailsSubscriptionChart', dataEmailsSubscriptionChart, optionsEmailsSubscriptionChart, responsiveOptions);

        //start animation for the Emails Subscription Chart
        md.startAnimationForBarChart(emailsSubscriptionChart);
    }
}
