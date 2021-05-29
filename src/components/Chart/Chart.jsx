import React from 'react';
import { Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';

const Chart = ({ data: { confirmed, recovered, deaths } }) => {
    const barChart = (
        confirmed ? (
            <Bar
                data={{
                    labels: ['Confirmed', 'Recovered', 'Deaths'],
                    datasets: [
                        {
                            label: 'People',
                            backgroundColor: [
                                'rgba(0,0,255,0.5)',
                                '#AFD275',
                                'rgba(255,0,0,0.5)'
                            ],
                            data: [confirmed.value, recovered.value, deaths.value],
                        },
                    ],
                }}
                options={{
                    legend: { display: false },

                }}
            />
        ) : null
    );
    return (
        <div className={styles.container}>
            { barChart}
        </div>

    );
};

export default Chart;